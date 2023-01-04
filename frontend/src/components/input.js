import { useState } from "react";
import Sidebar from "./sidebar";
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

  const [isActive, setIsActive] = useState(true);

  const hideHamburger = () => {
    setIsActive((current) => !current);
  };

  const Name = "Victor";

  return (
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

      <div className="d-none d-md-block">
        <Sidebar />
      </div>

      <div className="input_container">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="m-0">Welcome {Name}</h1>

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
        { selectedImages && 
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
        </div> }

          {selectedImages && selectedImages.map((image, index) => {
            return (
              <div
                key={index}
                className="vic_her_div relative cbk-hover"
                // onChange={storeItem(image)}
              >
                {/* <img src={imgae} className="" /> */}
</div>
  );})
          }

      </div>
      {/* <Preview

      /> */}
    </div>
  );
}
