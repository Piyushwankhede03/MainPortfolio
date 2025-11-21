
import React from "react";
import "./Home.css";
import "../index.css";

export default function Home() {
  const professions = [
    "Frontend Developer",
    "React.js",
    "UI/UX Enthusiast",
    "Responsive Web Designer",
    "JavaScript Developer",
    "Interactive UI Builder",
  ];

  const quickLinks = [
    { img: "/github.png", title: "GitHub", link: "https://github.com/Piyushwankhede03" },
    { img: "/LinkedIn.jpg", title: "LinkedIn", link: "https://www.linkedin.com/in/piyush-wankhede-188005287/" },
    { img: "/gmail.png", title: "Email", link: "mailto:wpiyush62@gmail.com" },
    { img: "/whatsapp.jpg", title: "WhatsApp", link: "https://wa.me/+919860460673" },
    { img: "/instagram.jpg", title: "Instagram", link: "https://www.instagram.com/wpiyush_03/" },
    { img: "/facebook.png", title: "Facebook", link: "https://www.facebook.com/piyush.wankhede.1044" },
  ];

  return (
    <section className="home-section">
      <div className="home-top">
        <div className="photo-container fade-in-left">
          <div className="photo-ring rotate"></div>
          <div className="photo-frame float">
            <img
              src="/My Photo.jpeg"
              alt="Piyush Wankhede"
              className="profile-photo fade-in"
            />
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="home-info fade-in-right">
          <h1 className="home-title">
            Hi, I’m <span className="home-name">Piyush Wankhede</span>
          </h1>

          <p className="typing-effect">
            Frontend Developer | Tech Explorer
          </p>

          <div className="profession-tags">
            {professions.map((role, i) => (
              <div key={i} className="profession-tag hover-scale">
                {role}
              </div>
            ))}
          </div>

          <div className="info-cards">
            {[
              { label: "📍 Location", value: "Nagpur, Maharashtra, India" },
              { label: "💼 Expertise", value: "React js, Problem Solving" },
              { label: "📧 Contact", value: "wpiyush62@gmail.com" },
            ].map((info, i) => (
              <div key={i} className="info-card hover-lift">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quick-links fade-in-up">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-rotate"
            >
              <img src={item.img} alt={item.title} className="quick-link-img" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}