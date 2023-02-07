import "./WorkCardStyles.css";
import React from "react";
import Pro1 from "../assets/pro-1.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="project-card">
      <img src={Pro1} alt="image" />
      <h2 className="Project-title">Project Title</h2>
      <div className="pro-details">
        <p>This is the text</p>
        <div className="pro-btns">
          <NavLink to="url.com" className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
