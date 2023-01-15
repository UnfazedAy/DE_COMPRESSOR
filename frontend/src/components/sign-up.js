import { useState } from "react";
import Logo from "./../img/logo.webp";
import Img from "./../img/signup.webp";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  //   const [passwordVisibility, setPasswordVisibility] = useState(() => false);

  // const handleVisibility = () => {
  // 	setPasswordVisibility((prev) => !prev);
  // };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // console.log(name, email, password)

  const sendDetails = async () => {
    let items = { name, email, password };

    const url = "https://de-compressor.onrender.com/api/v1/signup";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    };

    let result = await fetch(url, config);
    result = await result.json();
    console.warn(result);

    // await axios
    //   .post(url, formData, config)
    //   .then((response) => {
    //   })
    //   .catch((e) => {
    //     const err = e?.response?.data;
    //     console.log(err);
    //   });
  };

  return (
    <div className="d-md-flex justify-content-between container">
      <div className="signin-left m-5 d-none d-lg-grid">
        <img src={Img} alt="" className="left_img" />
      </div>
      <div className="signin-right m-lg-5">
        <div className=" d-flex justify-content-center mb-5">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>

        <div className="mt-5">
          <input
            type="name"
            placeholder="Username"
            className="signin-field p-3 my-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="signin-field p-3 my-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signin-field p-3 my-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="signin-field p-3 my-3"
            value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // onChange={sendDetails}
          />
          <Link to="/login">
            <button className="buttonn p-3 my-3" onClick={sendDetails}>
              Submit
            </button>
          </Link>
          <p className="text-center">OR</p>

          <button
            type="submit"
            className="buttonn  p-3 mb-3 d-flex justify-content-center"
          >
            <ion-icon name="logo-google-playstore" size="large"></ion-icon>
            <p className="ps-3 m-0">Sign in with google</p>
          </button>
        </div>
        <p>
          Already have an account?
          <Link to="/login" className="signUp_link">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
