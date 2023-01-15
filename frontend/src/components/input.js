import { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import Nav from "./top_nav";
// import Preview from "./preview";

export default function Input() {
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

  const hideHamburger = () => {
    setIsActive((current) => !current);
  };


const compressImage = () => {

}

  const Name = "{Username}";

  return (
    <div>
      {!isActive ? (
        <div className="d-md-none">
          <div className="close">
            <ion-icon
            name="close-circle-outline"
            size="large"
            onClick={hideHamburger}
          ></ion-icon>
            </div>
           
           <Nav className='' />
          </div>
     ) : ("")}
    <div className="input_body">
      {/* create a top navbar for smaller screens, don't use this sidebar */}
      {/* {!isActive ? 
      <div className="d-block d-md-none relative">
      <ion-icon
          name="close-circle-outline"
          className='side_close absolute'
          size="large"
          onClick=""
        ></ion-icon>
      <Sidebar /> 
      </div>: ''} */}

     
 <Sidebar />
      <div className="input_container">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="m-0">Welcome </h1>

          <div className="navbar navbar-dark d-grid d-md-none">
            {/* <div className="container"> */}

            {/* hamburger button*/}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#n_bar"
              aria-controls="navbarNavAltMarkup"
              aria-label="Toggle navigation"
              style={{
                display: isActive ? "block" : "none",
              }}
              onClick={hideHamburger}
            >
              <span className="navbar-toggler-icon bg-dark rounded-3 "></span>
            </button>
          </div>
        </div>
        <hr />
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
                  id='btnn'
                  onChange=""
                >
                  Compress Image
                </button>
              </div>
            );
          })}
      </div>
      {/* <Preview

      /> */}
    </div>
    </div>
  );
}
