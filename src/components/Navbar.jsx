import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h2 className="logo">CoDeFiXx.dev</h2>
      <div className="nav-links">
        <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link to="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>

      <button className="theme-btn"  onClick={() => setDarkMode(!darkMode)}>
        {darkMode ?  <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
      </button>
    </nav>
  );
};

export default Navbar;


// import React, { useState, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Apply theme on change
//   useEffect(() => {
//     document.body.className = darkMode ? "dark" : "light";
//   }, [darkMode]);

//   return (
//     <nav className="navbar">
//       <h2 className="logo">Piyush Portfolio</h2>
//       <ul className="nav-links">
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/projects">Projects</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>

//       <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "🌞 Light" : "🌙 Dark"}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
