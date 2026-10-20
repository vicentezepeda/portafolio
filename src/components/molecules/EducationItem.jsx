import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

export const EducationItem = ({ degree, institution, period, description }) => {
return (
    <div className="item-card">
    <h3>{degree}</h3>
    <h4>{institution}</h4>
    {period && (
        <span className="date-badge">
        <FaGraduationCap /> {period}
        </span>
    )}
    <p className="bio-text">{description}</p>
    </div>
);
};