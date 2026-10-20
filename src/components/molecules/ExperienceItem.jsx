import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export const ExperienceItem = ({ role, company, period, description }) => {
return (
    <div className="item-card">
    <h3>{role}</h3>
    <h4>{company}</h4>
    {period && (
        <span className="date-badge">
        <FaCalendarAlt /> {period}
        </span>
    )}
    <p className="bio-text">{description}</p>
    </div>
);
};