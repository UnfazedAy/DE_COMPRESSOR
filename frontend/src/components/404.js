import Img from "./../img/404.webp";
// import { Link } from "react-router-dom";
import Navbar from "./Landingpage/navbar";

function Four04() {
  return (
    <div className="four d-block m-auto">
      <Navbar />
      <img src={Img} alt="" className="four04img" />
       <h1>Oops! You seem to be lost.</h1>
     {/* <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/contactus">Contact Us</Link> */}
    </div>
  );
}

export default Four04;
