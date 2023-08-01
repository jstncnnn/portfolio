import "./Footer.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="address">
          <div className="icon icon-address">
            <FaHome size="20" style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
          <p>Poblacion, Makato, Aklan</p>
        </div>
        <div className="phone">
          <div className="icon icon-phone">
            <FaPhone size="20" style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
          <p> 0970-646-5775</p>
        </div>
        <div className="mail">
          <div className="icon icon-mail">
            <FaMailBulk
              size="20"
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
          <p>jjustincunanan@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
