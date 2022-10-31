import React from 'react';
import './Main.css';
import MainImg from '../../img/Background1.png';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

function Main() {
  return (
    <div>
      <div className="main">
        <div className="container main_container">
          <div className="main_description">
            <p>
              Hi,
              <br />
              I'm <span className="main_description_color">Amos</span>,<br />A
              <span className="main_description_color"> web developer</span>.
            </p>
            <div className="main_description_detail">
              Front End & Back End developer | UI & UX Designer
            </div>
            <div className="contact_me">
              <div>Contact Me</div>
            </div>
          </div>
          <div className="main_image">
            <img src={MainImg} alt="" />
          </div>
        </div>
        <div className="main_social">
          <span>
            <a href="https://github.com/amos-bafuna">
              <BsGithub />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/amos-bafuna-3057a723b/">
              <BsLinkedin />
            </a>
          </span>
          <span>
            <a href="https://web.facebook.com/amos.bafuna">
              <BsFacebook />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
