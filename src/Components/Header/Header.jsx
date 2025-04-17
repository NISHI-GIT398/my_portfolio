import React from "react";
import "./Header.css";
import profile_img from "../../assets/profile_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div id="header" className="header">
      <img src={profile_img} alt="Nishi" />
      <h1>
        <span>Hi, I'm Nishi</span>
      </h1>
      <p>
        Frontend Developer passionate about building beautiful and responsive
        web interfaces.
      </p>
      <div className="header-action">
        <div className="header-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="header-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Header;
