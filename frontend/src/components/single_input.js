import Navbar from "./Landingpage/navbar";
// import Footer from "./Landingpage/footer";
import axios from "axios";
import { useState, useEffect } from "react";
// import fs from 'fs'
function Single() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [preview, setPreview] = useState(false);
  const [imageToCompress, setImageToCompress] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const [responseData, setResponseData] = useState([]);
  // const [fileName, setFileName] = useState(null);
  const [title, setTitle] = useState("");

  const handleFile = (e) => {
    let file = e.target.files;
    console.log(file);

    setTitle(e.target.value);
    console.log("value is:", e.target.value);

    const selectedFilesArray = Array.from(file);
    console.log(selectedFilesArray);

    // setFileName(file[0][name])

    //Displays images
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    console.log(imagesArray);
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setPreview((current) => !current);
    // console.log(selectedImages);
    setImageToCompress((prev) => prev.concat(selectedFilesArray));
  };

  const sendImages = async () => {
    // console.log(user.email, 'email');
    setIsActive(!isActive);
    const formData = new FormData();

    imageToCompress.forEach((image) => {
      formData.append("image", image);
    });

    // imageToCompress = formData.append("files", image);

    console.log(formData);
    // formData.append('title', title);
    // formData.append('email', user?.email);
    // formData.append('photo_class', photoUser);
    // console.log("formdata", title);

    const url = "https://de-compressor.onrender.com/api/v1/compress";
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    // await axios({
    //   method: 'POST',
    //   headers: { 'Content-Type': 'multipart/form-data', },
    //   // headers: { 'Content-Type': 'application/json'},
    //   url: url,
    //   body: formData,
    // })
    await axios
      .post(url, formData, config)
      .then((response) => {
        // response.arrayBuffer().then(function(buffer) {
        //   const url = window.URL.createObjectURL(new Blob([buffer]));
        //   const link = document.createElement("a");
        //   link.href = url;
        //   link.setAttribute("download", "image.png"); //or any other extension
        //   document.body.appendChild(link);
        //   link.click();

        setResponseData(response.data);
        console.log("responseData ", typeof responseData);
        // new Promise((resolve, reject) => {
        //   // response.data
        //   //   .pipe(fs.createWriteStream(responseData))
        //   //   .on('finish', () => resolve())
        //   //   .on('error', e => reject(e));
        // })

        // console.log("upload data: ", response.data);
        // setGenAvt(false);
      })
      .catch((e) => {
        // setGenAvt(false);
        const err = e?.response?.data;
        console.log(err);
      });
  };

  // const [imageUrl, setImageUrl] = useState([]);

  // useEffect(() => {
  //   const reader = new FileReader();
  //   reader.onloadend = () => setImageUrl(reader.result);
  //   // reader.readAsDataURL(responseData);
  // }, [responseData]);

  // const handleClick = () => {
  //   const link = document.createElement("a");
  //   link.href = imageUrl;
  //   link.download = imageUrl;
  //   link.click();
  //   console.log("Downloading....");
  // };

  //   const objectURL = "http://";
  // if (responseData.lenght !== 0){
  //   }
  const handleClick = () => {
    // const objectURL = window.URL.createObjectURL(responseData)
    // const blob = new Blob([responseData], { type: "image/jpeg" });
    // console.log(blob);
    const objectURL = URL.createObjectURL(responseData);
    // const objectURL = URL.createObjectURL(blob);
    console.log(objectURL);
    const link = document.createElement("a");
    link.href = objectURL;
    link.download = title;
    link.click();
    console.log("Downloading....");
  };

  return (
    <div className="comp_container relative">
      <Navbar className="comp_nav" />

      {/* input  */}
      <div className="comp_div container">
        {!preview && (
          <div>
            {/* <form method="post" enctype="multipart/form-data"></form> */}
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
                {/* <div className=" div"> */}
                  <img src={image} alt="" className="preview_image" />
                {/* </div> */}

                {!isActive ? (
                  <button
                    className="btn button-primary bg-black text-white rounded-pill px-4 py-2  m-5"
                    id="btnn"
                    onClick={sendImages}
                    // onChange={setIsActive(!isActive)}
                  >
                    Compress Image
                  </button>
                ) : (
                  ""
                )}
                {isActive ? (
                  <button
                    className="btn button-primary bg-black text-white rounded-pill px-4 py-2  m-5"
                    id="btnn"
                    onClick={handleClick}
                  >
                    download Image
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
      </div>

      {/* <Footer className="comp_footer" /> */}
    </div>
  );
}

export default Single;
