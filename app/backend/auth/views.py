from django.views import View
from django.http import HttpResponse, HttpRequest
# Create your views here.
class User(View): 
    async def get(self, request: HttpRequest):
        message_id = request.GET.get('id')
        # Return a simple HttpResponse
        return HttpResponse('Hello, This is a Django view')

    async def post(self, request: HttpRequest):
        return HttpResponse('Hello, This is a Django view')

    async def put(self, request: HttpRequest):
        return HttpResponse('Hello, This is a Django view')

    async def delete(self, request: HttpRequest):
        return HttpResponse('Hello, This is a Django view')
    async def signed_in(self, request: HttpRequest): 
        return "id"