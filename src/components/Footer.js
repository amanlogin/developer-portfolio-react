import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>House No: 25, Deopur, Deoghar</p>
              <p> 814142, Jharkhand, India</p>
            </div>
          </div>
          <div className="Phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              9663362170
            </h4>
          </div>
          <div className="Email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              aman_sinha@live.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is Aman Kumar. I'm a full stack java and web developer. I'm
            currently learning Web3. I enjoy learning new technologies
          </p>
          <div className="Social">
            <Link to="https://www.facebook.com/">
              <FaFacebook
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://www.twitter.com/">
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/aman-kumar-a08138174/">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://github.com/amanlogin">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://www.instagram.com">
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
