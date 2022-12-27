""" A flask API that takes image as an input and compresses the image."""

import os
import secrets
from flask import Flask, request, send_from_directory, jsonify
from werkzeug.utils import secure_filename
from PIL import Image

UPLOAD_FOLDER = './save_images'
secret_key = 'fd382e4b5f2dfb42a0ec447d'


app = Flask(__name__)
app.secret_key = secret_key
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# Sets the maximum upload size to 16mb
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024


# A function that gets the image type from the filename by using rsplit
def allowed_file(filename):
    return filename.rsplit('.', 1)[-1].lower()


@app.route('/api/compress_image', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
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
                os.path.join(app.config['UPLOAD_FOLDER'], new_img),
                optimize=True, quality=50
                )

            return jsonify(
                {'message': 'Image uploaded and compressed successfully'}
            )


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
