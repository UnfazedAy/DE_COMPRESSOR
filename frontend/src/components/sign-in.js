import Logo from "./../img/logo.png";

export default function Signin() {
  return (
    <div className="d-md-flex justify-content-between container">
      <div className="signin-left m-5 d-none d-lg-block"></div>
      <div className="signin-right m-lg-5">
        <div className=" d-flex justify-content-center mb-5">
          <img src={Logo} alt="" className="logo" />
        </div>

        <form className="mt-5">
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
          <button type='submit' className="w-100 p-3 my-3">Submit</button> 
        </form>
        <p>Don't have an account yet? <a> Sign Up</a></p>
      </div>
    </div>
  );
}
