import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      {/* To change the color of header when scrolled */}
      <Link to="/">
        <h1>Justin</h1>
      </Link>
      <ul
        onClick={handleClick}
        className={clicked ? "nav-menu active" : "nav-menu"}
      >
        {/* To make the nav-menu be shown when the hamburger is clicked */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {/* To change hamburger icon into X when clicked; when using small devices */}
        {clicked ? (
          <FaTimes size={25} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
