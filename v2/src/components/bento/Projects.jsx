import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Projet 1', description: 'Description du projet' },
    { title: 'Projet 2', description: 'Description du projet' },
  ];

  return (
    <div className="bento-card card-large">
      <h2 className="card-title">Projets Récents</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="card-text">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 