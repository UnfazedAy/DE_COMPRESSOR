import { useState } from "react";
import Preview from "./preview";

export default function Input() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);

  const handleFile = (e) => {
    let file = e.target.files;
    console.log(file);

    const selectedFilesArray = Array.from(file);

    //Displays images
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    setImageToUpload((prev) => prev.concat(selectedFilesArray));
  };

  return (
    <div className="container py-5">
      <div>
        <input
          type="file"
          name="file"
          accept="image/*"
          id="file"
          className="input_hide"
          onChange={handleFile}
        />
        <label htmlFor="file" className="input-label">
          <p className="m-0">Drag and Drop your Image here</p>
        </label>
      </div>
      <Preview 
      
      />
    </div>
  );
}
