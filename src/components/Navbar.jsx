import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <h2 className="logo-initials">PW</h2>
          <div className="logo-name">
            <p className="full-name">Piyush Wankhede</p>
            <p className="role">Frontend Developer</p>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="nav-links desktop">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/Resume">Resume</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* Hamburger (mobile only) */}
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Drawer */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>×</button>
        <ul className="drawer-links">
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
          <li><NavLink to="/Resume" onClick={closeMenu}>Resume</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Me</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
}
