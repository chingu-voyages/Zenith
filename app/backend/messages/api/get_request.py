from marshmallow import fields, ValidationError, post_load, INCLUDE
from marshmallow_generic import GenericSchema
from django.http import HttpRequest, HttpResponse
from prisma_client.client import prisma_client
import asyncio
# classes for type saftey and validation
class GetMessageRequest:
    def __init__(self, message_id: str | None, pin_id: str | None, cursor: str | None, limit: int) -> None:
        self.message_id = message_id,
        self.pin_id = pin_id,
        self.cursor = cursor,
        self.limit = limit

class GetMessageRequestSchema(GenericSchema[GetMessageRequest]):
    message_id = fields.Str(required=False, allow_none=True),
    pin_id = fields.Str(required=False, allow_none=True),
    cursor = fields.Str(required=False, allow_none=True, default=None),
    limit = fields.Int(required=False, default=10)

    class Meta:
        unknown = INCLUDE

    @staticmethod
    def validate_only_one_key(data):
        keys = [key for key in ['message_id', 'pin_id'] if key in data]
        if len(keys) != 1:
            raise ValidationError(
                'Only message_id, or pin_id allowed.')

    @post_load
    def check_only_one_key(self, data, **kwargs):
        self.validate_only_one_key(data)
        return GetMessageRequest(**data)


async def get_request(request: HttpRequest):
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

    messages = client.message.find_many(
        where={
            
        },
        take=params.limit,
    )

    # we continue since data is valid
