""" A flask API that takes image as an input and compresses the image."""

import os
import secrets
from flask import Flask, flash, request, redirect, url_for, send_from_directory
from werkzeug.utils import secure_filename
from PIL import Image

UPLOAD_FOLDER = './save_images'
secret_key = 'fd382e4b5f2dfb42a0ec447d'


app = Flask(__name__)
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# Sets the maximum upload size to 16mb
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024


def allowed_file(filename):
    return filename.rsplit('.', 1)[-1].lower()


@app.route('/api/compress_image', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        image_data = request.files['file']

        # Checks if the filename is empty or contains a valid image data
        if image_data.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if image_data and allowed_file(image_data.filename):
            filename = secure_filename(image_data.filename)

            # Uses the PILLOW library PIL.Image to open the image
            image = Image.open(image_data)
            width, height = image.size
            image_format = allowed_file(filename)

            # compresses the image with the resize method
            image.resize((width, height), resample=Image.Resampling.LANCZOS)
            new_img = f'compressed_image.{image_format}'

            # saves the image to the desired location
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], new_img))

            return redirect(url_for('download_file', name=new_img))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''


@app.route('/uploads/<name>')
def download_file(name):
    return send_from_directory(app.config["UPLOAD_FOLDER"], name)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
