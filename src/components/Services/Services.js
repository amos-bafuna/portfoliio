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
              <div className="face face1">
                <div className="content">
                  <div className="card_logo">
                    <img src={uiLogo} alt="" />
                  </div>
                  <div className="card_title">UI/UX Design</div>
                </div>
              </div>
              <div className="face face2">
                <p>
                  Innovative design to meet your customers' expectations, while
                  offering them an unforgettable experience
                </p>
              </div>
            </div>

            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="card_logo">
                    <img src={webLogo} alt="" />
                  </div>
                  <div className="card_title">Web Development</div>
                </div>
              </div>
              <div className="face face2">
                <p>
                  Need a website? A web application? Or a mobile app? I have
                  everything you need to stand out from the competition
                </p>
              </div>
            </div>

            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="card_logo">
                    <img src={brandingLogo} alt="" />
                  </div>
                  <div className="card_title">Branding Image</div>
                </div>
              </div>
              <div className="face face2">
                <p>
                  Propel your company's image into another dimension through
                  referencing and targeted advertising of your potential
                  customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
