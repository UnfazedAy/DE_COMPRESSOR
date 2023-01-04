import Logo from "./../img/logo.png";
import { Link } from "react-router-dom";

export default function Signup() {
  //   const [passwordVisibility, setPasswordVisibility] = useState(() => false);

  // const handleVisibility = () => {
  // 	setPasswordVisibility((prev) => !prev);
  // };

  return (
    <div className="d-md-flex justify-content-between container">
      <div className="signin-left m-5 d-none d-lg-block"></div>
      <div className="signin-right m-lg-5">
        <div className=" d-flex justify-content-center mb-5">
          <img src={Logo} alt="" className="logo" />
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
          <button type="submit" className="w-100 p-3 my-3">
            Submit
          </button>
        </form>
        <p>
          Don't have an account yet?
          <Link to="/signup" className="signUp_link"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
