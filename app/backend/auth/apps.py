from django.apps import AppConfig
from signals.signals import django_start, django_stop
import atexit

class AuthConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'auth'
    def ready(self) -> None:
        # send a signal that server has started
        django_start.send(None)
        # send a signal that server has ended
        atexit.register(lambda: django_stop.send(None))
