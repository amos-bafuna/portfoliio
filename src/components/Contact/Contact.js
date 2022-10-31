import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_container">
          <div className="contact_info">
            <p>
              Let's make something <br />
              <span className="contact_color">phenomenal</span>.
            </p>
            <div className="contact_info_detail">
              <div className="contact_phone">
                <span className="contact_detail_icon">
                  <BsFillTelephoneFill />
                </span>
                +243 89 755 37 58
              </div>
              <div className="contact_mail">
                <span className="contact_detail_icon">
                  <BsEnvelope />
                </span>
                amosbafuna24@gmail.com
              </div>
              <div className="contact_portfolio">
                <span className="contact_detail_icon">
                  <BsGlobe />
                </span>
                www.amosbafuna.vercel.com
              </div>
            </div>
            <div className="contact_info_social">
              <div>
                <a href="https://github.com/amos-bafuna">
                  <BsGithub className="social_item" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/amos-bafuna-3057a723b/">
                  <BsLinkedin />
                </a>
              </div>
              <div>
                <a href="https://web.facebook.com/amos.bafuna">
                  <BsFacebook />
                </a>
              </div>
            </div>
          </div>
          <div className="contact_form">
            <form action="#">
              <div className="form-control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name"
                />
              </div>

              <div className="form-control">
                <input
                  className="input"
                  type="text"
                  name="email"
                  id=""
                  placeholder="Your Email"
                />
              </div>

              <div className="form-control">
                <textarea
                  className="inputMessage"
                  type="text"
                  name="message"
                  id=""
                  placeholder="Your Message"
                />
              </div>
              <button className="submit_btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
