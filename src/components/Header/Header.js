import React from 'react';
import CV from '../../img/AmosBafunaCV.pdf';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="container header_container">
        <nav className="nav_menu">
          <Link
            className="nav_item"
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
          >
            Home
          </Link>
          <Link
            className="nav_item"
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-200}
            duration={700}
          >
            About
          </Link>
          <Link
            className="nav_item"
            activeClass="active"
            to="Services"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
          >
            Services
          </Link>
          <Link
            className="nav_item"
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Contact
          </Link>
        </nav>

        <a href={CV} className="menu_cv">
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
