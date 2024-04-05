from django.http import HttpRequest
import json

def parse_body(request: HttpRequest):
    body_unicode = request.body.decode('utf-8')
    parsed = json.loads(body_unicode)
    return parsed

