import React from "react";
import "./Main.css";
import MainImg from "../../../img/Background1.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Main() {
  return (
    <div>
      <div className="main">
        <div className="main_description">
          <p>
            Hi,
            <br />
            I'm <span className="main_description_color">Amos</span>,<br />A
            <span className="main_description_color"> web developer</span>.
          </p>
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
          <BsGithub />
        </span>
        <span>
          <BsLinkedin />
        </span>
        <span>
          <BsFacebook />
        </span>
      </div>
    </div>
  );
}

export default Main;
