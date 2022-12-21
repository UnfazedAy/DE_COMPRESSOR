// import Link from 'react'
import Logo from "./../img/logo.png";

export default function Navbar() {
  return (
    <div className=' bg-white'>
        <div className='container d-flex p-3 align-items-center justify-content-between nav_bar'>
        <div>
          <img src={Logo} alt="" className="logo" />
        </div>
      <div className="navbar navbar-expand-sm navbar-dark">
        
        <div className="container">
          <button
            className="navbar-toggler ms-auto "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#n_bar"
            aria-controls="navbarNavAltMarkup"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-dark rounded-3 "></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul>
              {/* <li><Link to=''>About Us</Link></li>
                     <li><Link> </Link></li>
                    <li><Link> </Link></li>
                    <li><Link> </Link></li> */}
            </ul>

            <button className="btn button-primary bg-black text-white rounded-pill px-5">
                Sign-in
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
