import os
import io
import shutil
import time
from datetime import datetime, timedelta
from pathlib import Path
from PIL import Image




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


def remove_file(path):

	# removing the file
    try:
        if not os.remove(path):
            return
    except Exception as e:
        return(e)



    
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
