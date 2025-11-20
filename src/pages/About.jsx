import React from "react";
import "./About.css";
import { FaUniversity } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="about-container fade-in">
      <div className="about-card fade-in-delayed">
        <h2 className="about-header">About Me</h2>

        <p className="about-text">
          Results-driven <strong>Frontend Developer</strong> with strong knowledge of React.js, JavaScript (ES6+), HTML5, and CSS3. Experienced in building responsive, interactive, and high-performance single-page applications. Skilled in API integration, client-side routing, and UI/UX design optimization. Dedicated to delivering clean, maintainable code and intuitive user experiences using modern web technologies.
        </p>

        <div className="education-section fade-in-delayed">
          <h3 className="education-header">Education</h3>

          <div className="education-cards">
            <div className="edu-card fade-in-delayed">
              <FaUniversity size={40} className="edu-icon" />
              <div>
                <h4 className="edu-title">B.Tech in Computer Technology</h4>
                <p className="edu-institute">
                  <strong>K.I.T.S (RTM Nagpur University)</strong> — Nagpur,
                  Maharashtra
                </p>
                <p className="edu-details">CGPA: 7.22</p>
                <p className="edu-details">2020 – 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;