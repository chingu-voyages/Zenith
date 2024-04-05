from marshmallow import fields, ValidationError, post_load, INCLUDE
from marshmallow_generic import GenericSchema
from django.http import HttpRequest, HttpResponse
from prisma_client.client import prisma_client
import prisma
# classes for type saftey and validation
class GetMessageRequest:
    def __init__(self, message_ids: list[int] | None, pin_id: int | None, cursor: int | None, limit: int) -> None:
        self.message_ids = message_ids
        self.pin_id = pin_id
        self.cursor = cursor
        self.limit = limit


class GetMessageRequestSchema(GenericSchema[GetMessageRequest]):
    message_ids = fields.List(
        fields.Integer(), required=False, allow_none=True),
    pin_id = fields.Int(required=False, allow_none=True),
    cursor = fields.Int(required=False, allow_none=True, default=None),
    limit = fields.Int(required=False, default=10)

    class Meta:
        unknown = INCLUDE

    @staticmethod
    def validate_only_one_key(data):
        keys = [key for key in ['message_ids', 'pin_id'] if key in data]
        if len(keys) != 1:
            raise ValidationError(
                'Only message_ids, or pin_id allowed.')

    @post_load
    def check_only_one_key(self, data, **kwargs):
        self.validate_only_one_key(data)
        return GetMessageRequest(**data)

# different access patterns for messages
async def get_messages_by_id(
    params: GetMessageRequest,
    client: prisma.Prisma,
):
    query: prisma.types.MessageWhereInput = {}
    if type(params.message_ids) is int:
        query['id'] = {
            'in': params.message_ids or []
        }
    messages = await client.message.find_many(
        where={
            **query,
        },
        take=params.limit,
        skip=1 if type(params.cursor) is int else 0,
        cursor={
            'id': params.cursor
        } if type(params.cursor) is int else None,
    )
    return messages

async def get_all_messages_from_pin(
    params: GetMessageRequest,
    client: prisma.Prisma,
):
    query: prisma.types.PinWhereInput = {
    }
    cursor: prisma.types._MessageOnPinsCompoundPrimaryKey
    if type(params.pin_id) is int:
        query['id'] = params.pin_id
    else: 
        return []
    if type(params.cursor) is int and type(params.pin_id) is int:
        cursor = {
            'message_id_pin_id': {
                'message_id': params.cursor,
                'pin_id': params.pin_id
            }
        }
    pin_with_messages = await client.pin.find_first(
        where=query,
        include={
            'messages': {
                'take': params.limit,
                'skip': 1 if type(params.cursor) is int else 0,
                'cursor': cursor or None,
                'include':{
                    'message': True
                }
            }
        }
    )
    return pin_with_messages.messages or [] if pin_with_messages else []

# root request function
async def get_messages_request(request: HttpRequest):
    schema = GetMessageRequestSchema()
    params: GetMessageRequest
    try:
        params = schema.load(request.GET)
    except ValidationError as err:
        return HttpResponse(err.messages, status=400)
    # ensure client is connected
    client = prisma_client.prisma
    if not client.is_connected():
        client = await prisma_client.connect()
    result: HttpResponse | None
    if type(params.message_ids) is int:
        result = await get_messages_by_id(params, client)
    if type(params.pin_id) is int:
        result = await get_all_messages_from_pin(params, client)
    return result or HttpResponse('Could not process your request', status=404)
