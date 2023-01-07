# if 'img' not in request.files:
#             return jsonify('No file part')

#         image_data = request.files['file']

#         # Checks if the filename is empty or contains a valid image data
#         if image_data.filename == '':
#             return jsonify('No selected file')

#         if image_data and allowed_file(image_data.filename):
#             filename = secure_filename(image_data.filename)

#             # Uses the PILLOW library PIL.Image to open the image
#             image = Image.open(image_data)
#             width, height = image.size
#             image_format = allowed_file(filename)

#             # compresses the image with the resize method
#             image.resize((width, height), resample=Image.Resampling.LANCZOS)
#             new_img = filename.split(".")[0] + f'_new.{image_format}'
#             # new_img = f"compressed_image.{image_format}"

#             # saves the image to the desired location
#             image.save(
#                 os.path.join(UPLOAD_FOLDER, new_img),
#                 optimize=True, quality=50
#                 )

#             return jsonify(
#                 {'message': 'Image uploaded and compressed successfully'}
#             )