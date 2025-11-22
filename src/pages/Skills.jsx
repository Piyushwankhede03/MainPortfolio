import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVite, SiNetlify, SiTailwindcss } from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#9CA3AF" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
];

function SkillBubbles() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll trigger: show when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { root: null, threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-desc">
          Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </div>

      <div className={`bubble-container ${visible ? "show" : ""}`}>
        {skills.map((skill, idx) => (
          <div key={idx} className={`bubble bubble-${idx}`}>
            <div
              className={`bubble-content ${visible ? "fade-in" : ""}`}
              style={{ animationDelay: `${idx * 0.35}s` }}
            >
              <span className="icon">{skill.icon}</span>
              <span className="label">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillBubbles;
