import "./AboutMe.css";

import workspace from "../assets/workspace.jpg";
import React from "react";

function AboutMe() {
  return (
    <div className="about-container" id="AboutMe">
      <div className="image-side">
        <img src={workspace} className="workspace-icon" alt="workspace-icon" />
      </div>
      <div className="content-side">
        <h3>About Me</h3>
        <h4>Junior Front-End Developer</h4>
        <p>
          As a starting front-end developer, I possess foundational knowledge in
          HTML, CSS, and JavaScript. Currently, I'm expanding my skill set with
          ReactJS to establish a strong and fulfilling career in web
          development. My ambition is to apply my technical skills and
          contribute to the development of aesthetically pleasing and
          user-centric web applications. I'm excited to work with teams, making
          sure designs become websites that work well and look good, all while
          keeping projects on schedule.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
