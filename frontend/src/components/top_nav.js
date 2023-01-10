import Logo from "./../img/logo.webp";
import { Link } from "react-router-dom";



function Nav() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="top_container d-md-none">
        
    {/* sidebar menu */}
    <div className="py-5 a">
      <Link to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>
    </div>

    <div className="side_">
      <ul className="side_ ">
        <hr />
        <li className="py-2 m-0 a">
              <Link to="/input" className="side_link" onClick={refreshPage}>
                <ion-icon name="scale-outline"></ion-icon>
                Dashboard
              </Link>
            </li>
            <li className="py-2 m-0 a">
              <Link to="/" className="side_link">
                <ion-icon name="folder-outline"></ion-icon>
                Files
              </Link>
            </li>
            <li className="py-2 m-0 a">
              <Link to="/" className="side_link">
                <ion-icon name="git-network-outline"></ion-icon>
                Activities
              </Link>
            </li>

            <hr />

            <li className="py-2 m-0 a">
              <Link
                to="/login"
                className="side_link"
                // onClick={ }
              >
                <ion-icon name="log-out-outline"></ion-icon>
                Logout
              </Link>
            </li>
      </ul>
    </div>
  </div>
  )
}

export default Nav
