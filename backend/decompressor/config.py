from decouple import config
import os

# Basedir = os.path.dirname(os.path.realpath(__file__))
USERNAME = config('USERNAME')
PASSWORD = config('PASSWORD')
DATABASE = config('DATABASE')
HOSTNAME = config('HOSTNAME')

class Config:
    SECRET_KEY=config('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool)


class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI=config('SQLALCHEMY_DATABASE_URI')
    DEBUG=True
    SQLALCHEMY_ECHO=True

GOOGLE_CLIENT_ID = config('GOOGLE_CLIENTID')
GOOGLE_CLIENT_SECRET = config('GOOGLE_CLIENT_SECRET') 
