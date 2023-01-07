import os 
from flask import Flask, request, abort, url_for, redirect, flash, jsonify
#from flask_jwt_extended import JWTManager, jwt_required
from flask_migrate import Migrate
from sqlalchemy import MetaData
from decompressor.config import DevConfig
from flask_sqlalchemy import SQLAlchemy


# application = app
app = Flask(__name__)
app.config.from_object(DevConfig)
#db.init_app(app)
#os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

convention = {
    "ix": 'ix_%(column_0_label)s',
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)
db = SQLAlchemy(app, metadata=metadata)
migrate = Migrate(app, db)


from decompressor import routes
