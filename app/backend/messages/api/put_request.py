from marshmallow import validate, fields, ValidationError, post_load, INCLUDE
from marshmallow_generic import GenericSchema
from django.http import HttpRequest, HttpResponse
from prisma_client.client import prisma_client
import prisma
from utils.parse_body import parse_body
# classes for type saftey and validation


class PostMessageRequest:
    def __init__(self, title: str, message: str) -> None:
        self.title = title
        self.message = message


class PostMessageRequestSchema(GenericSchema[PostMessageRequest]):
    title = fields.Str(required=True, allow_none=False,
                       validate=validate.Length(max=50))
    message = fields.Str(required=True, allow_none=False,
                         validate=validate.Length(max=500))

    class Meta:
        unknown = INCLUDE

    @post_load
    def check_only_one_key(self, data, **kwargs):
        return PostMessageRequest(**data)

# root request function
# since django does not support delete or put methods,
# we must tunnel this through the post request


async def put_messages_request(request: HttpRequest, user_id: int):
    dict_body = parse_body(request)
    schema = PostMessageRequestSchema()
    params: PostMessageRequest
    try:
        params = schema.load(dict_body)
    except ValidationError as err:
        return HttpResponse(err.messages, status=400)
    # ensure client is connected
    client = prisma_client.prisma
    if not client.is_connected():
        client = await prisma_client.connect()
    result: HttpResponse | None

    data_input: prisma.types.MessageCreateInput = {
        'title': params.title,
        'message': params.message,
        'user_id': user_id
    }
    updated_message = await client.message.create(
        data=data_input
    )
    result = HttpResponse(updated_message)
    return result or HttpResponse('Could not process your request', status=404)
