import React from 'react';
import { Title } from '../atoms/Title';
import { ExperienceItem } from '../molecules/ExperienceItem';

export const ExperienceSection = ({ experiences }) => {
return (
    <section id="experiencia" className="experience-section">
    <Title level={2}>Experiencia Laboral</Title>
    <div className="experience-list">
        {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
        ))}
    </div>
    </section>
);
};