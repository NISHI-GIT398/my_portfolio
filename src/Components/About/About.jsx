import React from "react";
import "./About.css";
import about_img from "../../assets/About_profile.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="about-wrapper">
      <div className="about-left">
        <img src={about_img} alt="Nishi profile" />
      </div>
      <div className="about-right">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <p>
          I'm Nishi, a Frontend Developer with experience in HTML5, CSS3,
          JavaScript, and React.js. I focus on building scalable, accessible,
          and responsive web applications. I write clean, maintainable code and
          follow modern frontend practices such as component-based architecture,
          Git version control, and API integration.
        </p>
        <p>
          I continuously improve my skills in React Hooks, performance
          optimization, and UI/UX best practices. My goal is to create seamless
          digital experiences that perform well across devices and browsers.
        </p>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skill">
            <p>HTML & CSS</p>
            <hr style={{ width: "90%" }} />
          </div>
          <div className="skill">
            <p>JavaScript (ES6+)</p>
            <hr style={{ width: "85%" }} />
          </div>
          <div className="skill">
            <p>React.js</p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="skill">
            <p>Python</p>
            <hr style={{ width: "75%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
