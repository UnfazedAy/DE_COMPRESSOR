import Logo from "./../img/logo.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar_container p-4">
      <div className="py-5">
        <Link to="/">
        <img src={Logo} alt="" className="logo" />
        </Link>
      </div>

      {/* sidebar menu */}
      <div className="side_">
        <ul className="side_">
          <hr />
          <li className="py-2 m-0">
            <Link to="/" className="side_link ">
              <ion-icon name="scale-outline"></ion-icon>
              Dashboard
            </Link>
          </li>
          <li className="py-2 m-0">
            <Link to="/" className="side_link">
              <ion-icon name="folder-outline"></ion-icon>
              Files
            </Link>
          </li>
          <li className="py-2 m-0">
            <Link to="/" className="side_link">
              <ion-icon name="git-network-outline"></ion-icon>
              Activities
            </Link>
          </li>

          <hr />

          <li className="py-2 m-0">
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
  );
}

export default Sidebar;
