import "./heroimagestyles.css";
import React from "react";
import IntroImg from "../assets/intro-background.jpg";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="introImg" />
      </div>
      <div className="content">
        <p>Hi, I'M AMAN KUMAR</p>
        <h1>FULLSTACK DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
