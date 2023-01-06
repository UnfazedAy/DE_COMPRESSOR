from decouple import config
import os

Basedir = os.path.dirname(os.path.realpath(__file__))

class Config:
    SECRET_KEY=config('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool)


class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI='sqlite:///'+os.path.join(Basedir, 'dev.db')
    DEBUG=True
    SQLALCHEMY_ECHO=True

GOOGLE_CLIENT_ID = config('GOOGLE_CLIENTID')
GOOGLE_CLIENT_SECRET = config('GOOGLE_CLIENT_SECRET')