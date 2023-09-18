import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  return (
    <div className="header">
      <Link to="/">
        <h1 className="h1-nav">Justin</h1>
      </Link>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {/* To make the nav-menu be shown when the hamburger is clicked */}
        <li>
          <Link to="/" className="header-h1">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Services" className="header-h1">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="header-h1">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="header-h1">
            Contact
          </Link>
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
