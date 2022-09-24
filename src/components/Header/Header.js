import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="nav_menu">
        <div className="nav_item">Home</div>
        <div className="nav_item">About</div>
        <div className="nav_item">Service</div>
        <div className="nav_item">Contact</div>
      </nav>

      <div className="menu_cv">
        <span>Download CV</span>
      </div>
    </div>
  );
}

export default Header;
