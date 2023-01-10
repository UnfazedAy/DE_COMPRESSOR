import os 
from flask import Flask, request, abort, url_for, redirect, flash, jsonify
from flask_jwt_extended import JWTManager
#from flask_jwt_extended import JWTManager, jwt_required
from flask_migrate import Migrate
from sqlalchemy import MetaData
from decompressor.config import DevConfig
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
# def create_app():
#     current_app = Flask(__name__)

#     with current_app.app_context():
#         # init_db()
#         current_app.config.from_object(DevConfig)


    # return current_app
# app = create_app()
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
jwt = JWTManager(app)
# login_manager = LoginManager(app)
# login_manager.login_view = 'log_in'
# login_manager.login_message_category = 'info'


from decompressor import routes

