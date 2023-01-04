import Logo from "./../img/logo.png";
import Img from "./../img/signup.jpg";
import { Link } from "react-router-dom";

export default function Signup() {
  //   const [passwordVisibility, setPasswordVisibility] = useState(() => false);

  // const handleVisibility = () => {
  // 	setPasswordVisibility((prev) => !prev);
  // };

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

        <form className="mt-5">
          <input
            type="name"
            placeholder="Username"
            className="signin-field p-3 my-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="signin-field p-3 my-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="signin-field p-3 my-3"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="signin-field p-3 my-3"
          />
          <button type="submit" className=" p-3 my-3">
            Submit
          </button>
        </form>
        <p>
          Already have an account yet?
          <Link to="/login" className="signUp_link">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
