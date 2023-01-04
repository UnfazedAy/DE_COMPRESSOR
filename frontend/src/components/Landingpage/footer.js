import Logo from "./../../img/logo.png";
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <div className='footer-bg mb-0'>
      <div className='container footer_content'>
        <Link to="/">
        <img src={Logo} alt="" className="logo1 mt-5 mb-3" /></Link>
        <div className="socials">
        <ion-icon name="mail-outline" className='icon'></ion-icon>
        <ion-icon name="logo-facebook" className='icon'></ion-icon>
        <ion-icon name="logo-twitter" className='icon'></ion-icon>
        <ion-icon name="logo-instagram" className='icon'></ion-icon>
        </div>
        <div className="footer_links ">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <p className="">© 2023 Ayo Jedda Vic </p>
        </div>
      </div>
    </div>
  )
}


