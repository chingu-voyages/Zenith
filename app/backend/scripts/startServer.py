import subprocess
import sys
from dotenv import load_dotenv
from manage import main as start_django_server
def grab_secrets(): 
    command = "doppler secrets download --no-file --format env > .env"
    subprocess.call(command, shell=True)
def generate_prisma_schema():
    """
    Generates a Prisma schema from the Prisma API.
    """
    # Define the command to execute in the command line
    subprocess.call([sys.executable, '-m', 'prisma', 'db', 'push', '--schema', './prisma/schema.prisma'])
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