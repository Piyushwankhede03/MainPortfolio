import "./Pages.css";

const Projects = () => {
  const projects = [
    { title: "Portfolio Website", tech: "React, CSS" },
    { title: "Inventory Management System", tech: "React" },
    { title: "Routing Template", tech: "React Router" },
    { title: "Pagination Feature", tech: "React Hooks" },
    { title: "Infinite-Scrolling Feature", tech: "React Hooks" },
  ];

  return (
    <div className="page">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
