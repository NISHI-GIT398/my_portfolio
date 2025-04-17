import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Nishi Logo" className="logo-img" />

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={handleNavClick}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={handleNavClick}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#projects"
            onClick={handleNavClick}
          >
            My Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={handleNavClick}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Nav;
