import "./ContactMe.css";

import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { TbHandFinger } from "react-icons/tb";

function ContactMe() {
  return (
    <div className="contact-container" id="ContactMe">
      <div className="contact-top">
        <h3>CONTACT</h3>
        <p>
          Feel free to contact me!{" "}
          <span className="handFinger">
            <TbHandFinger />
          </span>
        </p>

        <br />
      </div>

      <div className="contact-details">
        <div className="contact-left">
          <div className="contact-iconbox">
            <AiOutlinePhone
              className="contact-icons"
              size={30}
              style={{ position: "relative", top: "8px" }}
            />
            <div className="contact-info">
              <h3>Contact Number</h3>
              <p>0970 646 5775</p>
            </div>{" "}
          </div>
          <div className="contact-iconbox">
            <GrMapLocation
              className="contact-icons"
              size={30}
              style={{ position: "relative", top: "8px" }}
            />
            <div className="contact-info">
              <h3>Location</h3>
              <p>Imus, Cavite</p>
            </div>
          </div>
          <div className="contact-iconbox">
            <AiOutlineMail
              className="contact-icons"
              size={30}
              style={{ position: "relative", top: "8px" }}
            />
            <div className="contact-info">
              <h3>E-mail</h3>
              <p>jjustincunanan@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
