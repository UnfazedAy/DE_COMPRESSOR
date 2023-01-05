from pathlib import Path

def delete_old_files(folder: str, age: int):
    from datetime import datetime, timedelta
    
    """
    Deletes files in the specified folder that are older than the
    specified age (in hours).

    Args:
        folder: The folder containing the files to delete.
        age: The maximum age (in hours) of the files to keep.
    """

    try:
        # Convert the age to a datetime.timedelta object
        age_delta = timedelta(hours=age)

        # Get the current time
        now = datetime.now()
        files = folder.iterdir()

        # Iterate over the files in the folder
        for file in files:
            # Get the last modified time of the file
            last_modified = datetime.fromtimestamp(file.stat().st_mtime)

            # Calculate the age of the file
            file_age = now - last_modified

            # If the file is older than the specified age, delete it
            
            if file_age >= age_delta:
                file.unlink()

    except Exception as e:
        return(e)


# folder = Path(r'./save_images')
# delete_old_files(folder, 1)
