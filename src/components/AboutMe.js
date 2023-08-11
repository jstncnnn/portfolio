import "./AboutMe.css";
import myIcon from "../assets/dp.jpg";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="about-container">
      <h1> About Me </h1>
      <div className="about-content">
        <div className="left-content">
          <img className="my-icon" src={myIcon} alt="my-icon"></img>
          <div className="about-icons">
            <a
              href="https://www.facebook.com/ntsjcnnn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com/jstncnnn_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://twitter.com/jstncnnn_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>

        <div className="right-content">
          <h2 style={{ color: "#fff" }}>I am John Justin R. Cunanan</h2>
          <p> I am 22 years old</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
