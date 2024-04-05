# Import HttpResponse from the Django HTTP module
from django.http import HttpResponse, HttpRequest
# Import the view you are going to use
from django.views import View
from auth.views import User
from prisma_client.client import PrismaPythonClient
from signals.signals import django_start, django_stop
# initalize prisma client for messages app

# Create your views here.
class Messages(View):
    curr_user = User()
    # Define the function that will handle GET requests
    def get(self, request: HttpRequest):

        # Return a simple HttpResponse
        return HttpResponse('Hello, This is a Django view')

    def post(self, request: HttpRequest):
        signed_in = self.curr_user.signed_in(request)
        return HttpResponse('Hello, This is a Django view')

    def put(self, request: HttpRequest):
        signed_in = self.curr_user.signed_in(request)
        return HttpResponse('Hello, This is a Django view')

    def delete(self, request: HttpRequest):
        signed_in = self.curr_user.signed_in(request)
        return HttpResponse('Hello, This is a Django view')
