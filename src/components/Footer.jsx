import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Piyush | Built with React
      </p>
    </footer>
  );
};

export default Footer;