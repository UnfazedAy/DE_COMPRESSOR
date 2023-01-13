import os
import io
import shutil
import time
from datetime import datetime, timedelta
from pathlib import Path
from PIL import Image
import zipfile




def convertToBinaryData(path):
    """Convert digital data to binary format"""
    with open(path, 'rb') as image:
        f = image.read()
        binaryData = bytes(f)
    return binaryData


def convertFromBinaryData(image, imageFilename):
    """Convert binary data to proper image format"""
    img = Image.open(io.BytesIO(image))
    return img


def create_folder(folder):
    """ function to create a folder if it doesn't exist """
    if not os.path.exists(folder):
        os.makedirs(folder)


def remove_folder(path):
    """ function to delete temp folder after use"""
    try:
        # removing the folder
        if not shutil.rmtree(path):
             return

    except Exception as e:
        return(e)


def create_file(new_file):
    if not os.path.exists(new_file):
        create = Path(new_file)
        create.touch()


def remove_file(path):

	# removing the file
    try:
        if not os.remove(path):
            return
    except Exception as e:
        return(e)




def zip_images(zip_file, files_to_zip):
    # Create a zip file which we will write files to
    # zip_file = "/home/username/test.zip"
    zipf = zipfile.ZipFile(zip_file, 'w', zipfile.ZIP_DEFLATED)

    # 2. Write files found in "/home/username/files/" to the test.zip
    # files_to_zip = "/home/username/files/"
    for file_to_zip in os.listdir(files_to_zip):

        file_to_zip_full_path = os.path.join(files_to_zip, file_to_zip)

        # arcname argument specifies what will be the name of the file inside the zipfile
        zipf.write(filename=file_to_zip_full_path, arcname=file_to_zip)

    zipf.close()
    return zipf


    
def old_files():
    path = os.getcwd()
    location = os.path.dirname(path) + '/backend/save_images/'
    now = datetime.now()

    for file in files:
        file_path = os.path.join(location, file)
        #Get the last modified time of the file
        last_modified = datetime.fromtimestamp(file.stat().st_mtime)

        # Calculate the age of the file
        file_age = now - last_modified
