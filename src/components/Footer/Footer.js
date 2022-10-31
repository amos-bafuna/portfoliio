import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p className="footer_text">
          <span>
            <BiCopyright />
          </span>
          2022 All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
