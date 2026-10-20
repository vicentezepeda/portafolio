import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ title, description, image, github }) => {
return (
    <div className="project-card">
    <div className="project-card-image-wrapper">
        <img src={image} alt={title} className="project-card-image" />
    </div>
    <div className="project-card-body">
        <div>
        <h3>{title}</h3>
        <p className="bio-text">{description}</p>
        </div>
        {github && (
        <a href={github} target="_blank" rel="noreferrer" className="repo-btn">
            <FaGithub /> Ver repositorio
        </a>
        )}
    </div>
    </div>
);
};