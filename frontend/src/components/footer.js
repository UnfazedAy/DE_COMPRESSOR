import Logo from "./../img/logo.png";



export default function Footer() {
  return (
    <div className='footer-bg'>
      <div className='container'>
        <img src={Logo} alt="" className="logo" />
        <div className="socials">
        <ion-icon name="mail-outline" className='icon'></ion-icon>
        <ion-icon name="logo-facebook" className='icon'></ion-icon>
        <ion-icon name="logo-twitter" className='icon'></ion-icon>
        <ion-icon name="logo-instagram" className='icon'></ion-icon>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
      </div>
    </div>
  )
}


