from marshmallow import fields, ValidationError, post_load, INCLUDE
from marshmallow_generic import GenericSchema
from django.http import HttpRequest, HttpResponse
from prisma_client.client import prisma_client
from utils.parse_body import parse_body
# classes for type saftey and validation


class DeleteMessageRequest:
    def __init__(self, message_ids: list[int]) -> None:
        self.message_ids = message_ids


class DeleteMessageRequestSchema(GenericSchema[DeleteMessageRequest]):
    message_ids = fields.List(
        fields.Integer(), required=True, allow_none=False),

    class Meta:
        unknown = INCLUDE

    @post_load
    def check_only_one_key(self, data, **kwargs):
        return DeleteMessageRequest(**data)

# root request function
# since django does not support delete or put methods,
# we must tunnel this through the post request


async def delete_messages_request(request: HttpRequest, user_id: int):
    dict_body = parse_body(request)
    schema = DeleteMessageRequestSchema()
    params: DeleteMessageRequest
    try:
        params = schema.load(dict_body)
    except ValidationError as err:
        return HttpResponse(err.messages, status=400)
    # ensure client is connected
    client = prisma_client.prisma
    if not client.is_connected():
        client = await prisma_client.connect()
    result: HttpResponse | None
    deleted_messages = await client.message.delete_many(
        where={
            'id': {
                'in': params.message_ids
            },
            'user_id': user_id
        }
    )
    result = HttpResponse(
        f'Deleted {deleted_messages} messages with ids: {", ".join(map(str, params.message_ids))}')
    return result or HttpResponse('Could not process your request', status=404)
