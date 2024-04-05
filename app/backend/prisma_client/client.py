from prisma import Prisma
from signals.signals import django_start, django_stop
#handle prisma client
class PrismaPythonClient():
    prisma = Prisma()
    async def connect(self):
        if self.prisma.is_connected():
            return self.prisma
        await self.prisma.connect()
        return self.prisma

    async def disconnect(self):
        if not self.prisma.is_connected():
            return self.prisma
        await self.prisma.disconnect()
        return self.prisma

    async def __init__(self):
        if self.prisma.is_connected():
            return self.prisma
        await self.connect(self)
prisma_client = PrismaPythonClient()
django_start.connect(lambda: prisma_client.connect())
django_stop.connect(lambda: prisma_client.disconnect())
