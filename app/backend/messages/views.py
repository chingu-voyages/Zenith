# Import HttpResponse from the Django HTTP module
from django.http import HttpResponse, HttpRequest
# Import the view you are going to use
from django.views import View
from auth.views import User
from messages.api.get_request import get_messages_request
from messages.api.post_request import post_messages_request
from messages.api.put_request import put_messages_request
from messages.api.delete_request import delete_messages_request
# Create your views here.


class Messages(View):
    curr_user = User()
    # Define the function that will handle GET requests

    async def get(self, request: HttpRequest):
        res = await get_messages_request(request)
        # Return a simple HttpResponse
        return HttpResponse(res)

    async def post(self, request: HttpRequest):
        signed_in = await self.curr_user.signed_in(request)
        if signed_in is None:
            return HttpResponse('User not signed in', status=401)
        res = await post_messages_request(request, user_id=signed_in)
        return HttpResponse(res)

    async def put(self, request: HttpRequest):
        signed_in = await self.curr_user.signed_in(request)
        if signed_in is None:
            return HttpResponse('User not signed in', status=401)
        res = await put_messages_request(request, user_id=signed_in)
        return HttpResponse(res)

    async def delete(self, request: HttpRequest):
        signed_in = await self.curr_user.signed_in(request)
        if signed_in is None:
            return HttpResponse('User not signed in', status=401)
        res = await delete_messages_request(request, user_id=signed_in)
        return HttpResponse(res)
