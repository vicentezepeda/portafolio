import React from 'react';
import { Title } from '../atoms/Title';

export const AboutMeSection = ({ personal }) => {
return (
    <section id="personal" className="personal-section">
    <Title level={2}>Sección Personal</Title>
    <div className="personal-container">
        <div className="avatar-wrapper">
        <img
            src={personal.avatar}
            alt={personal.name}
            className="profile-avatar"
        />
        </div>
        <div className="personal-info">
        <h1>{personal.name}</h1>
        <h4 className="role-title">{personal.role}</h4>
        <p className="bio-text">{personal.description}</p>
        </div>
    </div>
    </section>
);
};