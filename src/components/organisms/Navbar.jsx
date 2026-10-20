import React from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaEnvelope, FaTerminal } from 'react-icons/fa';

export const Navbar = () => {
return (
    <nav className="navbar">
    <div className="navbar-container">
        <div className="navbar-logo">
        <a href="#personal"><FaTerminal /> VICENTE <span>ZEPEDA</span></a>
        </div>
        <ul className="navbar-links">
        <li><a href="#personal"><FaUser /> INICIO</a></li>
        <li><a href="#experiencia"><FaBriefcase /> EXPERIENCIA</a></li>
        <li><a href="#estudios"><FaGraduationCap /> ESTUDIOS</a></li>
        <li><a href="#proyectos"><FaCode /> PROYECTOS</a></li>
        <li><a href="#contacto"><FaEnvelope /> CONTACTO</a></li>
        </ul>
    </div>
    </nav>
);
};