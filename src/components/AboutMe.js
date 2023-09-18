import "./AboutMe.css";

import workspace from "../assets/workspace.jpg";
import React from "react";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="image-side">
        <img src={workspace} className="workspace-icon" alt="workspace-icon" />
      </div>
      <div className="content-side">
        <h1>About Me</h1>
        <p> Hello, I am John Justin Cunanan</p>
      </div>
    </div>
  );
}

export default AboutMe;
