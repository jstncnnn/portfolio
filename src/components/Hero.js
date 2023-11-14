import "./Hero.css";
import myIcon from "../assets/dp.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="content-left">
          <h1 className="h1-hero">Front-End React Developer</h1>
          <p className="p-hero">
            Hi, Im John Justin R. Cunanan. An Aspiring Front-End <br /> React
            Developer based in Philippines{" "}
            <FaLocationDot size={15} style={{ color: "red" }} />
          </p>
          <div className="hero-icons">
            <a
              href="https://www.facebook.com/ntsjcnnn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={20}
                style={{ color: "#4267B2", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com/jstncnnn_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="ig"
                size={20}
                style={{ marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://twitter.com/jstncnnn_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={20}
                style={{ color: "#26a7de", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
        <div className="content-right">
          <img className="my-icon" src={myIcon} alt="my-icon"></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
