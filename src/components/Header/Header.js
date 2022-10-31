import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="container header_container">
        <nav className="nav_menu">
          <div className="nav_item active">Home</div>
          <div className="nav_item">About</div>
          <div className="nav_item">Services</div>
          <div className="nav_item">Contact</div>
        </nav>

        <div className="menu_cv">
          <span>Download CV</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
