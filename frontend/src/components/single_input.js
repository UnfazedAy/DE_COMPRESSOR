import Navbar from "./Landingpage/navbar";
import Footer from "./Landingpage/footer";
import { useState } from "react";

function Single() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [preview, setPreview] = useState(false);
  // const [imageToCompress, setImageToCompress] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const handleFile = (e) => {
    let file = e.target.files;
    //console.log(file);

    const selectedFilesArray = Array.from(file);

    //Displays images
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setPreview((current) => !current);
    console.log(selectedImages);
    // setImageToUpload((prev) => prev.concat(selectedFilesArray));
  };

  return (
    <div className="comp_container relative">
            

      <Navbar className="comp_nav" />

      {/* input  */}
      <div className="comp_div container">
        {!preview && (
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
        )}

        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={index} className="preview_div">
                <div className="preview_div div">
                    
                <img src={image} alt="" className="preview_image" />
                </div>
                <button
                  className="btn button-primary bg-black text-white rounded-pill px-4 py-2  mt-5"
                  id="btnn"
                  onChange=""
                >
                  Compress Image
                </button>
                
              </div>
            );
          })}
      </div>

      {/* <Footer className="comp_footer" /> */}
      
    </div>
  );
}

export default Single;
