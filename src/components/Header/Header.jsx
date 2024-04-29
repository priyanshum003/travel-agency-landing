import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Travel Agency" />
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Flights</a></li>
          <li><a href="#">Bookings</a></li>
          <li><a href="#">Login</a></li>
          <li><button className="signup-btn">Sign up</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
