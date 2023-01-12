import os
import requests
import io
import pathlib
from decompressor import app, db, jwt
from flask import request, abort, url_for, redirect, jsonify
from flask import send_from_directory, send_file, make_response, Response
from flask_restx import Api, Resource, fields, reqparse
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename
from PIL import Image
from decompressor.models import User, Images
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from flask_jwt_extended import create_refresh_token, current_user
from flask_jwt_extended import get_current_user, get_jwt_identity
from flask_migrate import Migrate
from decompressor.config import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
import psycopg2
from decompressor.functions import remove_folder, convertToBinaryData, create_folder
from decompressor.functions import convertFromBinaryData
# from oauthlib.oauth2 import WebApplicationClient
# from authlib.integrations.flask_client import OAuth


UPLOAD_FOLDER = './save_images'
TEMP_FOLDER = './temp'


app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

app.config['TEMP_FOLDER'] = TEMP_FOLDER

app.config['MAX_CONTENT_LENGTH'] = 30 * 1024 * 1024


# oauth = OAuth(app)

upload_parser = reqparse.RequestParser()
upload_parser.add_argument('image', type=FileStorage, location='files',
                           required=True)


api = Api(app, doc='/api/v1/docs')

# client = WebApplicationClient(GOOGLE_CLIENT_ID)
# flow = Flow.fom_client_

# to serialise the model
signup_model = api.model(
    "SignUp",
    {
        "name": fields.String(),
        "email": fields.String(),
        "password": fields.String(),
    }
)

# to serialise the model
login_model = api.model(
    "LogIn",
    {
        "email": fields.String(),
        "password": fields.String()
    }
)


def allowed_file(filename):
    """function to split the filename to get the image format"""
    return filename.rsplit('.', 1)[-1].lower()


""" defining all the routes """


@api.route('/api/v1/signup')
class SignUp(Resource):
    @api.expect(signup_model)
    def post(self):
        """post request to get signin details"""
        data = request.get_json()
        check_email = data.get("email")
        user = User.query.filter_by(email=check_email).first()
        if user is not None:
            return {"message": "Email address already in use"}

        new_user = User(
            name=data.get("name").title(),
            email=data.get("email"),
            password=generate_password_hash(data.get("password"))
        )
        new_user.save()

        return jsonify({"message": "New account created successfully"})


@api.route('/api/v1/login')
class LogIn(Resource):
    @api.expect(login_model)
    def post(self):
        """post request function"""
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        current_user = User.query.filter_by(email=email).first()
        if (current_user and
           check_password_hash(current_user.password, password)):
            access_token = \
                create_access_token(identity=current_user.email)
            refresh_token = \
                create_refresh_token(identity=current_user.email)
            return jsonify(
                {"access_token": access_token,
                 "refresh_token": refresh_token})
        return {"message": "Incorrect Username or password"}


@api.route('/api/v1/google/')
class Google(Resource):
    def get(self):
        CONF_URL = \
            'https://accounts.google.com/.well-known/openid-configuration'
        oauth.register(
            name='google',
            client_id=GOOGLE_CLIENT_ID,
            client_secret=GOOGLE_CLIENT_SECRET,
            server_metadata_url=CONF_URL,
            client_kwargs={
                'scope': 'openid email profile'
            }
        )

        # Redirect to google_auth function
        redirect_uri = url_for('google_auth', _external=True)
        return oauth.google.authorize_redirect(redirect_uri)


@api.route('/api/v1/callback')
class Callback(Resource):
    """ callback class for google login auth """
    def google_auth():
        token = oauth.google.authorize_access_token()
        user = oauth.google.parse_id_token(token)
        print(" Google User ", user)
        return redirect('/')


@api.route('/api/v1/userfiles')
class UserFiles(Resource):
    @jwt_required()
    def get(self):
        return {"message": "Dashboard"}

    def post(self):
        pass

    @jwt_required()
    def delete(self):
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        user_to_delete = User.query.filter_by(email=email).first()
        user_to_delete.delete()

        return jsonify("Account deleted successfully")


@api.route('/api/v1/compress')
class Compress(Resource):
    @api.expect(upload_parser)
    def post(self):

        image_data = request.files['image']

        # check if the key: image is in the request file
        if 'image' not in request.files:
            return jsonify('No file part')

        # Checks if the filename is empty or contains a valid image data
        if image_data is None:
            return jsonify('No selected file')

        if image_data:
            # getting the name of the image uploaded
            filename = secure_filename(image_data.filename)

            # Uses the PILLOW library PIL.Image to open the image
            image = Image.open(image_data)
            width, height = image.size

            # splitting the filename to get the image format
            image_format = allowed_file(filename)

            # compresses the image with the resize method
            image.resize((width, height), resample=Image.Resampling.LANCZOS)
            new_img = filename.split(".")[0] + f'_new.{image_format}'

            # creates folder if it doesn't exist
            create_folder(UPLOAD_FOLDER)
            # saves the image to the desired location
            image.save(
                os.path.join(UPLOAD_FOLDER, new_img),
                optimize=True, quality=40)

            # return jsonify(
            #  {'message': 'Images uploaded and compressed successfully'})
            return redirect(url_for('download_file', filename=new_img))


@api.route('/api/v1/uploads/<path:filename>')
class DownloadFile(Resource):
    """to download compressed image"""
    def get(self, filename):
        """ get function to download compressed image """
        # splitting the filename to get the image format
        image_format = allowed_file(filename)

        path = os.getcwd()
        # path to compressed image
        img_location = os.path.dirname(path) + \
            '/backend/save_images/' + filename

        filename = f'{img_location}'
        return send_file(filename) #   mimetype=f'image/image_format', as_attachment=True)

    def delete(self, filename):
        pass


@api.route('/api/v1/multiplecompress')
class Compress(Resource):
    """ class defined to compress images"""
    @api.expect(upload_parser)
    @jwt_required()
    def post(self):

        image_files = request.files.getlist('image')
        if 'image' not in request.files:
            return jsonify('No file part')

        # Checks if the filename is empty or contains a valid image data
        if image_files is None:
            return jsonify('No selected file')

        # to loop through the multiple files uploaded\
        for image_file in image_files:
            # to get the filename
            filename = secure_filename(image_file.filename)

            # Uses the PILLOW library PIL.Image to open the image
            img = Image.open(image_file)
            width, height = img.size
            # amount = 0.5
            image_format = allowed_file(filename)
            new_imgName = filename.split(".")[0] + f'_new.{image_format}'

            # compresses the image with the resize method
            img.resize((width, height), resample=Image.Resampling.LANCZOS)

            # creates the temp folder to store the images
            create_folder(TEMP_FOLDER)

            # saves the image to the desired location
            img.save(os.path.join(TEMP_FOLDER, new_imgName),
                     optimize=True, quality=40)

        path = os.getcwd()
        images_location = os.path.dirname(path) + '/backend/temp/'
        # get id of logged in user
        user = User.query.filter_by(email=get_jwt_identity()).first()
        #use for loop to scan image location
        for f in os.scandir(images_location):
            # check if f in location is a file
            if f.is_file():
                # convert image to binary format
                compressed_img = convertToBinaryData(f)

                # save converted image to database using user.id
                new_image = Images(image=compressed_img,
                                   imageFilename=f.name, user=user)
                db.session.add(new_image)

        db.session.commit()
        # delete temp folder where images was stored temporarily
        # remove_folder(images_location)

        return jsonify(
            {'message': 'Images uploaded and compressed successfully'}
        )


@api.route('/api/v1/user')
class DownloadFile(Resource):
    """ class for downloading file by a registered user"""
    @jwt_required()
    def get(self):
        """ function to download multiole files """
        create_folder(TEMP_FOLDER)
        user = User.query.filter_by(email=get_jwt_identity()).first()
        downloads = Images.query.filter_by(user_id=user.id).all()
        for download in downloads:
            download_image = download.image
            download_name = download.imageFilename
            new_img = convertFromBinaryData(download_image, download_name)

            

            new_img.save(
                    os.path.join(TEMP_FOLDER, download_name),
                    optimize=True, quality=50)
    
        return jsonify(
            {'message': 'Images saved successfully'}
        ) 

        # image_format = allowed_file(filename)
        # path = os.getcwd()
        # img_location = os.path.dirname(path) + \
        #     '/backend/save_images/' + filename

        # filename = f'{img_location}'
        # return send_file(filename,
        #                  mimetype=f'image/image_format', as_attachment=True)


@api.route('/api/v1/forgotpassword')
class ForgotPassword(Resource):
    def get(self):
        pass

    def post(self):
        data = request.get_json()
        email = data.get("email")
        pass


@api.route('/api/v1/premium')
class Premium(Resource):
    @jwt_required()
    def get(self):
        pass

    def post(self):
        pass


@api.route('/api/v1/drive_download')
class GoogeDriveDownload(Resource):
    def get(self):
        pass

    def post(self):
        pass


@app.shell_context_processor
def make_shell():
    return {
        "db": db,
        "User": User,
        "Images": Images
    }
