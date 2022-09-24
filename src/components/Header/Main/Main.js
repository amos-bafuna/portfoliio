import React from "react";
import "./Main.css";
import MainImg from "../../../img/Background1.png";

function Main() {
  return (
    <div className="main">
      <div className="main_description">
        <p>
          Hi,
          <br />
          I'm <span className="main_description_color">Amos</span>,<br />A
          <span className="main_description_color"> web developer</span>.
        </p>
        <div className="contact_me">Contact Me</div>
      </div>
      <div className="main_image">
        <img src={MainImg} alt="" />
      </div>
    </div>
  );
}

export default Main;
