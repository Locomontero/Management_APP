import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.nome}</h3>
      <p><strong>Cliente:</strong> {project.cliente.nome}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <Link to={`/projeto/${project.id}/atividades`}>Ver Atividades</Link>
    </div>
  );
};

export default ProjectCard;
