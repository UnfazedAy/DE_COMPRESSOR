import os
from decompressor import app, db
from flask import request, abort, url_for, redirect, flash, jsonify
from flask_restx import Api, Resource, fields
from werkzeug.utils import secure_filename
from decompressor.models import User, Images
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, create_refresh_token
from flask_migrate import Migrate
from decompressor.config import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
#from oauthlib.oauth2 import WebApplicationClient
from authlib.integrations.flask_client import OAuth


JWTManager(app)
UPLOAD_FOLDER = './save_images'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
oauth = OAuth(app)

api = Api(app, doc='/api/v1/docs')

#client = WebApplicationClient(GOOGLE_CLIENT_ID)
#flow = Flow.fom_client_

# to serialise the model
signup_model = api.model(
    "SignUp",
    {
        "username": fields.String(),
        "email": fields.String(),
        "password": fields.String(),
    }
)

# to serialise the model
login_model = api.model(
    "LogIn", 
    {
        "email":fields.String(),
        "password":fields.String()
    }
)

def allowed_file(filename):
    """function to split the filename"""
    return filename.rsplit('.', 1)[-1].lower()




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
            username=data.get("username").title(),
            email = data.get("email"),
            password = generate_password_hash(data.get("password"))
        )
        new_user.save()

        return jsonify ({"message": "New account created successfully"})



@api.route('/api/v1/login')
class LogIn(Resource):
    @api.expect(login_model)
    def post(self):
        """post request function"""
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        current_user = User.query.filter_by(email=email).first()
        if current_user and check_password_hash(current_user.password, password):
            access_token = create_access_token(identity=current_user.email)
            refresh_token = create_refresh_token(identity=current_user.email)
            return jsonify(
                {"access_token": access_token, "refresh_token": refresh_token }
            )
        return {"message":"Incorrect Username or password"}



api.route('/api/v1/google/')
class Google(Resource):
    def get(self):
        CONF_URL = 'https://accounts.google.com/.well-known/openid-configuration'
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
        #print(redirect_uri)
        return oauth.google.authorize_redirect(redirect_uri)


@api.route('/api/v1/callback')
class Callback(Resource):
    def google_auth():
        token = oauth.google.authorize_access_token()
        user = oauth.google.parse_id_token(token)
        print(" Google User ", user)
        return redirect('/')


@api.route('/api/v1/userfiles')
class UserFiles(Resource):
    @jwt_required()
    def get(self):
        return  {"message": "Dashboard"}

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
    def get(self):
        pass

    def post(self):
        # check if the post request has the file part
        if 'file' not in request.files:
            return jsonify('No file part')

        image_data = request.files['file']

        # Checks if the filename is empty or contains a valid image data
        if image_data.filename == '':
            return jsonify('No selected file')

        if image_data and allowed_file(image_data.filename):
            filename = secure_filename(image_data.filename)

            # Uses the PILLOW library PIL.Image to open the image
            image = Image.open(image_data)
            width, height = image.size
            image_format = allowed_file(filename)

            # compresses the image with the resize method
            image.resize((width, height), resample=Image.Resampling.LANCZOS)
            new_img = filename.split(".")[0] + f'_new.{image_format}'
            # new_img = f"compressed_image.{image_format}"

            # saves the image to the desired location
            image.save(
                os.path.join(UPLOAD_FOLDER, new_img),
                optimize=True, quality=50
                )

            return jsonify(
                {'message': 'Image uploaded and compressed successfully'}
            )


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




@api.route('/api/v1/compress')
class Compress(Resource):
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



#@api.route('/api/v1/deleteaccount')
#class Delete(Resource):
   

    



@app.shell_context_processor
def make_shell():
    return {
        "db": db,
        "User": User,
        "Images":Images
    }

