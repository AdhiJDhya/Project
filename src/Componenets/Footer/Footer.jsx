import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>HomeCare</p>
      </div>
      <ul className='footer-links'>
        <li>Experienced Workers</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <di className='barath'>
        <h2>Established in 2023, HOMEHELPER is enabling customers to hire experienced, verified and reliable professionals.</h2>
      </di>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href='https://www.instagram.com/?hl=en' target='_blank' rel='noopener noreferrer'>
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href='https://in.pinterest.com/pinterest/' target='_blank' rel='noopener noreferrer'>
            <img src={pintester_icon} alt="Pinterest" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href='https://web.whatsapp.com/' target='_blank' rel='noopener noreferrer'>
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright &copy; 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
