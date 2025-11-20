import React from "react";
import "./Resume.css";
import LazySection from "./LazySection";

export default function Resume() {
  return (
    <section className="resume-container">
      <div className="resume-card animate-popup">
        <h2 className="resume-title">📄 Resume</h2>
        <p className="resume-subtitle">A quick glance at my journey.</p>

        {/* Profile Info */}
        <LazySection>
          <div className="resume-profile">
            <div className="profile-info">
              <h3>👨‍💻 Piyush Wankhede</h3>
              <p>Frontend Developer</p>
              <p>📍 Nagpur, Maharashtra, India</p>
              <p>✉️ wpiyush62@gmail.com | 📞 +91-9860460673</p>
              <div className="resume-links">
                <a href="https://github.com/Piyushwankhede03" target="_blank" rel="noreferrer">💻 GitHub</a>
                <a href="https://www.linkedin.com/in/piyush-wankhede-188005287/" target="_blank" rel="noreferrer">💼 LinkedIn</a>
              </div>
            </div>
          </div>
        </LazySection>

        {/* Professional Summary */}
        <LazySection>
        <div className="resume-section">
          <h4>📝 Professional Summary</h4>
          <p>
            Results-driven Frontend Developer with strong knowledge of React.js, JavaScript (ES6+), HTML5, and CSS3.
            Experienced in building responsive, interactive, and high-performance single-page applications. Skilled in API
            integration, client-side routing, and UI/UX design optimization. Dedicated to delivering clean, maintainable
            code and intuitive user experiences using modern web technologies.
          </p>
        </div>
        </LazySection>

        {/* Technical Skills */}
        <LazySection>
          <div className="resume-section">
            <h4>⚙️ Technical Skills</h4>
            <ul className="skills-list">
              <li><span className="key">Frontend Development:</span> React.js, JavaScript, HTML5, CSS3</li>
              <li><span className="key">React Tools:</span> Router DOM, Context API, Hooks</li>
              <li><span className="key">API & Data:</span> REST APIs, Axios, Fetch</li>
              <li><span className="key">Performance:</span> Lazy Loading, Code Splitting</li>
              <li><span className="key">Deployment:</span> Git, GitHub, Netlify, Vite</li>
            </ul>
          </div>
        </LazySection>

        <LazySection>
          <div className="resume-section">
            <h4>💼 Professional Experience & Internship</h4>
            <p><span className="key">Frontend Development Intern</span> — Coderfuel Infotech Pvt. Ltd, Nagpur | July 2024 – Dec 2024</p>
            <ul>
              <li>Developed and optimized 10+ responsive React components improving overall UI load time by 30%.</li>
              <li>Integrated RESTful APIs to fetch and render data efficiently.</li>
              <li>Implemented SPA navigation using React Router DOM and Context API.</li>
              <li>Enhanced UX with lazy loading, code splitting, and re-render optimization.</li>
              <li>Collaborated using Git/GitHub and deployed projects via Netlify.</li>
            </ul>
        </div>
        </LazySection>

        {/* Projects */}
        <LazySection>
          <div className="resume-section">
          <h4>🚀 Projects</h4>
          <div className="projects-list">
            <div className="project-item">
              <h5>Inventory Management System (CRUD)</h5>
              <p>CRUD dashboard with LocalStorage persistence, modular React components, and WCAG compliance.</p>
              <p className="tech-stack">Technologies: React.js, LocalStorage, CSS, Netlify</p>
            </div>
            <div className="project-item">
              <h5>Advanced React UI Features</h5>
              <p>Client-side pagination, infinite scrolling, and route-based code splitting with hooks.</p>
              <p className="tech-stack">Technologies: React.js, React Router DOM, Fetch API</p>
            </div>
            <div className="project-item">
              <h5>Portfolio Website</h5>
              <p>Responsive portfolio with light/dark mode toggle, deployed via Netlify.</p>
              <p className="tech-stack">Technologies: React.js, CSS3, UI/UX Principles</p>
            </div>
            <div className="project-item">
              <h5>Mini Projects</h5>
              <p>Notes App, To-Do List, Age Calculator to strengthen JS & React fundamentals.</p>
              <p className="tech-stack">Technologies: JavaScript, React.js</p>
            </div>
          </div>
        </div>
        </LazySection>

        {/* Education */}
        <LazySection>
          <div className="resume-section">
            <h4>🎓 Education</h4>
            <p><span className="key">B.Tech in Computer Technology</span> — KITS, RTMNU</p>
            <p>CGPA: 7.22 | Graduation: 2024</p>
          </div>
        </LazySection>

        <LazySection>
        <div className="resume-section">
            <h4>📜 Certifications</h4>
            <ul>
              <li>Web Development — Coderfuel Infotech Pvt. Ltd</li>
              <li>Responsive Web Design — freeCodeCamp (In Progress)</li>
            </ul>
        </div>
        </LazySection>

        <LazySection>
          {/* Achievements */}
        <div className="resume-section">
          <h4>🏆 Achievements & Additional Skills</h4>
          <ul>
            <li>Completed a comprehensive frontend roadmap covering HTML, CSS, JavaScript, and React.js.</li>
            <li>Developed and deployed multiple personal projects using Git, GitHub, and Netlify.</li>
            <li>Solved 50+ JavaScript coding challenges to strengthen problem-solving skills.</li>
          </ul>
        </div>
        </LazySection>

        <LazySection>
          {/* Soft Skills */}
        <div className="resume-section">
          <h4>🤝 Soft Skills</h4>
          <p>Problem-Solving | Collaboration | Communication | Time Management | Adaptability</p>
        </div>
        </LazySection>

        <LazySection>
          {/* Languages */}
        <div className="resume-section resume-languages">
          <h4>🌐 Languages</h4>
          <p>English | Hindi | Marathi</p>
        </div>
        </LazySection>

        {/* PDF Viewer */}
        <LazySection>
          <div className="resume-pdf">
            <iframe 
              src="/Piyush Wankhede Resume.pdf" 
              title="Piyush Wankhede Resume"
              loading="lazy"
            />
          </div>
        </LazySection>

        {/* Download Button */}
        <LazySection>
          <a href="/Piyush Wankhede Resume.pdf" download className="resume-download">
            ⬇️ Download Resume
          </a>
        </LazySection>
      </div>
    </section>
  );
}