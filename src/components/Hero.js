import "./Hero.css";

import React from "react";
import HeroBg from "../assets/bg.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-bg" src={HeroBg} alt="Hero-background" />
      </div>
      <div className="content">
        <p>Hi, Im John Justin R. Cunanan</p>
        <h1>Aspiring Front-End Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
