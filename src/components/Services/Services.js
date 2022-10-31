import React from 'react';
import uiLogo from '../../img/uiLogo.png';
import webLogo from '../../img/webLogo.png';
import brandingLogo from '../../img/brandingLogo.png';
import './Services.css';

function Services() {
  return (
    <section className="services" id="Services">
      <div className="container">
        <div className="services_container">
          <div className="services_title">My services</div>
          <div className="services_main">
            <div className="card">
              <div className="card_logo">
                <img src={uiLogo} alt="" />
              </div>
              <div className="card_title">UI/UX Design</div>
            </div>

            <div className="card web_development">
              <div className="card_logo">
                <img src={webLogo} alt="" />
              </div>
              <div className="card_title">Web Development</div>
            </div>

            <div className="card">
              <div className="card_logo">
                <img src={brandingLogo} alt="" />
              </div>
              <div className="card_title">Branding Image</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
