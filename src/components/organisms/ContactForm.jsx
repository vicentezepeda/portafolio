import React, { useState } from 'react';
import { Title } from '../atoms/Title';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export const ContactForm = ({ contact }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    }
};

return (
    <section id="contacto" className="contact-section">
    <Title level={2}><FaEnvelope /> Contacto</Title>
    
    <div className="social-links">
        <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
        <FaEnvelope /> {contact.email}
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer">
        <FaGithub /> GitHub
        </a>
        {contact.linkedin && (
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
        </a>
        )}
    </div>

    {submitted && (
        <div className="success-msg">
        ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
        </div>
    )}

    <form onSubmit={handleSubmit}>
        <FormField
        label="Nombre"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <FormField
        label="Correo Electrónico"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <div className="form-group">
        <label>Mensaje</label>
        <textarea
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
        />
        </div>
        <Button type="submit"><FaPaperPlane /> Enviar Mensaje</Button>
    </form>
    </section>
);
};