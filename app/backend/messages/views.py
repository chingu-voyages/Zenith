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
    # Define the function that will handle GET requests
    async def get(self, request: HttpRequest):
        res = await get_messages_request(request)
        # Return a simple HttpResponse
        return HttpResponse(res)

    async def post(self, request: HttpRequest):
        curr_user = User()
        signed_in = await curr_user.signed_in(request)
        if signed_in is None:
            return HttpResponse('User not signed in', status=401)
        # we will use the _method to determine the type of request
        # since django cannot template delete and put requests
        # so we will default to post request entirely
        method = self.request.POST.get('_method', '').lower()
        if method == 'put':
            res = await put_messages_request(request, user_id=signed_in)
        if method == 'delete':
            res = await delete_messages_request(request, user_id=signed_in)
        if method == 'post':
            res = await post_messages_request(request, user_id=signed_in)
        return HttpResponse(res)
