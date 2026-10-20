import React from 'react';
import { Title } from '../atoms/Title';
import { EducationItem } from '../molecules/EducationItem';

export const EducationSection = ({ education }) => {
return (
    <section id="estudios" className="education-section">
    <Title level={2}>Educación</Title>
    <div className="education-list">
        {education.map((edu, index) => (
        <EducationItem key={index} {...edu} />
        ))}
    </div>
    </section>
);
};