import React from 'react';
import CV from '../../img/AmosBafunaCV.pdf';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="container header_container">
        <nav className="nav_menu">
          <a href="/" className="nav_item active">
            Home
          </a>
          <a href="#About" className="nav_item">
            About
          </a>
          <a href="#Services" className="nav_item">
            Services
          </a>
          <a href="#Contact" className="nav_item">
            Contact
          </a>
        </nav>

        <a href={CV} className="menu_cv">
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
