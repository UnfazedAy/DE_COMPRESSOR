import Logo from "./../img/logo.webp";
import Img from "./../img/login.webp";
// import { useAuth } from "./auth-content";
import { useNavigate, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";

export default function Signin() {
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  // const { token, setUser, setToken } = useAuth();
  // const [errorStatus, setErrorStatus] = useState({
  //   error: null,
  //   message: "",
  // });

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [token, setToken] = useState("");

  const Login = async () => {
    let items = { email, password };

    const url = "https://de-compressor.onrender.com/api/v1/login";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    };

    fetch(url, config)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There has been some error");
      })
      .then((data) => {
        // setToken(data)
        sessionStorage.setItem("token", data.access_token);
        console.log(data);
      })
      .catch((error) => {
        console.error("There was an error", error);
      });
  };
  //   let result = await fetch(url, config)
  //   result = await result.json();
  //   console.warn(JSON.stringify(result));
  //   localStorage.setData(JSON.stringify(result));
  // };

  // const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem('user-info')){
  //     history.push("/add")
  //   }
  // }, [])

  // const {
  // 	register,
  // 	handleSubmit,
  // 	reset,
  // 	formState: { errors },
  // } = useForm();

  // const [passwordVisibility, setPasswordVisibility] = useState(() => false);

  // const handleVisibility = () => {
  //   setPasswordVisibility((prev) => !prev);
  // };

  // const googleLogin = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse),
  //   onError: () => console.log("Login with Google Failed"),
  // });

  /** Remember to pass user data to api for storage */
  // const url = `${import.meta.env.VITE_API_URL}/api/user/login`;
  // const onSubmit = async (data) => {
  //   setLoading(true);
  //   await axios
  //     .post(url, data, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response, "response");

  //       //Reset login form
  //       // reset();
  //       setLoading(false);

  //       //Get token and save to local storage
  //       const token = response?.data?.access_token;
  //       localStorage.setItem("zvt_token", JSON.stringify(token));

  //       const user = response?.data?.userData;
  //       localStorage.setItem("zvt_user", JSON.stringify(user));

  //       //save token to state
  //       setToken(token);
  //       setUser(user);

  //       setErrorStatus({ error: false, message: "Login successful" });
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       const err = e?.response?.data?.detail;
  //       setErrorStatus({ error: true, message: err });
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   if (token) {
  //     navigate("/dashboard", { replace: true });
  //   }
  // }, [token]);

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/dashboard">
            <button type="submit" className="buttonn p-3 my-3" onClick={Login}>
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
          Don't have an account yet?
          <Link to="/signup" className="signUp_link">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
