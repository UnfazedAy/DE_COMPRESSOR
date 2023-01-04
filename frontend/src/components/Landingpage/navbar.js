// import Link from 'react'
import Logo from "./../../img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(true);

  const hideHamburger = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className=" bg-white nav_bar">
      <div className="d-flex p-3 align-items-center justify-content-between ">

        {/* logo */}
        <div style={{
          display: isActive ? "block" : "none",
        }}>
          <Link to="/">
            <img
              src={Logo}
              alt=""
              className="logo"
            />
          </Link>
        </div>


        {/* hamburger */}
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
        {/* </div> */}


        {/* widescreen navbar options */}
        <div className="d-none d-md-block" >

          <ul className="Nav_1">
            <li>
              <Link to="/" className="text-decoration-none nav_link" id="nav_link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-decoration-none nav_link" id="nav_link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="text-decoration-none nav_link" id="nav_link">
                Contact Us
              </Link>
            </li>
          </ul>


        </div>

        <button className="btn button-primary bg-black text-white rounded-pill px-5 d-none  d-md-block">
          Sign-in
        </button>

      </div>


      {/* hanburger navbar options */}
      {!isActive ? <div
        className="nav-options d-md-none">
        <img src={Logo} alt="" className="logo" />
        <ul className="Nav_">
          <li>
            <Link to="/" className="text-decoration-none nav_link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none nav_link">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none nav_link">
              Contact Us
            </Link>
          </li>
        </ul>

        <button className="btn button-primary bg-black text-white rounded-pill px-5">
          Sign-in
        </button>
      </div> : ''}
    </div>
  );
}
