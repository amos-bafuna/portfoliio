import React from "react";
import AboutImg from "../../../img/about_me_img.png";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about_img">
        <img src={AboutImg} alt="" />
      </div>
      <div className="about_info">
        <div className="about_contact">
          <div className="about_title">About me</div>
          <div className="about_description">
            I am a full stack developer based in DRC
          </div>
          <div className="about_paragraph">
            <p>
              I am a web enthusiast since young age. I am able to build flexible
              and robust sites with the latest technologies.
            </p>
            <p>
              I am a creative problem solver, using different tools to bring the
              best solution for your business
            </p>
          </div>
        </div>
        <div className="about_cv">
          <span>Download CV</span>
        </div>
      </div>
    </div>
  );
}

export default About;
