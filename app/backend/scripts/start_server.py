import subprocess
import sys
from dotenv import load_dotenv
def start_django_server():
    """
    Starts the Django server.
    """
    # Define the command to execute in the command line
    command = "python manage.py runserver 0.0.0.0:8000"
    subprocess.call(command, shell=True)
def grab_secrets(): 
    command = "doppler secrets download --no-file --format env > .env"
    subprocess.call(command, shell=True)
def generate_prisma_schema():
    """
    Generates a Prisma schema from the Prisma API.
    """
    # Define the command to execute in the command line
    subprocess.call([sys.executable, '-m', 'prisma', 'db', 'push', '--schema', './prisma_client/schema.prisma'])

def main():
    #initialize secrets
    grab_secrets()
    load_dotenv()
    #generate the prisma schema
    generate_prisma_schema()
    #start django server
    start_django_server()
if __name__ == '__main__':
    main()