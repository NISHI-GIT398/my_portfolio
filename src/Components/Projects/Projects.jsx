import React from "react";
import "../Projects/Projects.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const Projects = () => {
  return (
    <div id="projects" className="Projects">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt={work.w_name} />;
        })}
      </div>
      <div className="myproject-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Projects;
