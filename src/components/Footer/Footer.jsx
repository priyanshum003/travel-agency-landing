import './Footer.scss';
// import social links from react icons
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section brand">
          <h2>Jadoo.</h2>
          <p>Book your trip in minutes, get full control for much longer.</p>
        </div>
        <div className="footer-section links">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Contact</h3>
          <ul>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>More</h3>
          <ul>
            <li>Airline Fees</li>
            <li>Airline</li>
            <li>Low Fare Tips</li>
          </ul>
        </div>
        <div className="footer-section social">
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
          <p>Discover our app</p>
          <div className="app-stores">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play Store" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="Apple App Store" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved @jadoo.co</p>
      </div>
    </footer>
  );
};

export default Footer;
