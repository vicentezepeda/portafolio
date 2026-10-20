import React from 'react';
import { Title } from '../atoms/Title';
import { ProjectCard } from '../molecules/ProjectCard';
import { FaCode } from 'react-icons/fa';

export const ProjectsSection = ({ projects }) => {
return (
    <section id="proyectos" className="projects-section">
    <Title level={2}><FaCode /> Proyectos Destacados</Title>
    <div className="projects-grid">
        {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
        ))}
    </div>
    </section>
);
};