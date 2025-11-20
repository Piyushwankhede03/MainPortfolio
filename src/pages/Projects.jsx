import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Inventory Management System",
    desc: "Built a CRUD dashboard allowing product addition, editing, and deletion with persistent LocalStorage data. Designed modular React components for forms, tables, and filtering to streamline inventory workflow. Ensured cross-browser compatibility and optimized accessibility (WCAG) compliance.",
    ss: "/IM.png",
    tech: ["React js", "LocalStorage", "CSS", "Netlify"],
    live: "https://piyush03-inventorymanagement.netlify.app",
    code: "https://github.com/Piyushwankhede03/Inventory-Management",
  },
  {
    title: "React Routing Template",
    desc: "Reusable routing template with react-router-dom v6 supporting nested routes and dynamic course routes. Includes Product routes (Men/Women/Kids) and a 404 NotFound fallback.",
    ss: "/ReactRouterDom.png",
    tech: ["React js", "React Router Dom", "Component Architecture"],
    live: "https://react-router-advance.netlify.app/",
    code: "https://github.com/Piyushwankhede03/react-router-dom",
  },
  {
    title: "Pagination App",
    desc: "Implemented client-side pagination with API fetching from Picsum and dynamic Prev/Next + page buttons and Handled loading states with a custom spinner and optimized state updates using useEffect and useState.",
    ss: "/paginate.png",
    tech: ["React js", "Fetch API", "CSS"],
    live: "https://react-gallerypagination.netlify.app/",
    code: "https://github.com/Piyushwankhede03/react-router-dom",
  },
  // ... add other projects here
];

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">A collection of my works</p>

      <div className="projects-grid">
        {PROJECTS.map((p, idx) => (
          <div
            className="project-card animate-card"
            key={idx}
            style={{ animationDelay: `${idx * 0.25}s` }} // staggered smooth delay
          >
            <div className="project-ss">
              <img src={p.ss} alt={p.title} />
            </div>

            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tech">
                {p.tech.map((t, i) => (
                  <span className="tech-badge" key={i}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn code-btn"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn live-btn"
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
