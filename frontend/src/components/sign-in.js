import Logo from "./../img/logo.webp";
import Img from "./../img/login.webp";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="d-md-flex justify-content-between container">
      <div className="signin-left m-5 d-none d-lg-grid">
        <img src={Img} alt='' className="left_img"/>
      </div>
      <div className="signin-right m-lg-5">
        <div className=" d-flex justify-content-center mb-5">
          <Link to="/">
          <img src={Logo} alt="" className="logo" /></Link>
        </div>

        <form className="mt-5" method="POST">
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
          <button type='submit' className="buttonn p-3 my-3">Submit</button> 
          <p className="text-center">OR</p>
          <button type="submit" className="buttonn  p-3 mb-3 d-flex justify-content-center">
          <ion-icon name="logo-google-playstore" size='large' ></ion-icon>
            <p className='ps-3 m-0'>Sign in with google</p>
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
