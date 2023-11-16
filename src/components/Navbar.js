import "./Navbar.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  return (
    <div className="header">
      <a href="#Home">
        <div>
          <h1 className="h1-nav">Justin</h1>
        </div>
      </a>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {/* To make the nav-menu be shown when the hamburger is clicked */}
        <li>
          <a href="#Home">
            <div className="header-h1">Home</div>
          </a>
        </li>
        <li>
          <a href="#Services">
            <div className="header-h1">Projects</div>
          </a>
        </li>
        <li>
          <a href="#AboutMe">
            <div className="header-h1">About</div>
          </a>
        </li>
        <li>
          <a href="#ContactMe">
            <div className="header-h1">Contact</div>
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {/* To change hamburger icon into X when clicked; when using small devices */}
        {clicked ? (
          <FaTimes size={25} style={{ color: "black" }} />
        ) : (
          <FaBars size={25} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
