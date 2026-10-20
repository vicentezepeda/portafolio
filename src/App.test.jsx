import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import { AboutMeSection } from './components/organisms/AboutMeSection';
import { ContactForm } from './components/organisms/ContactForm';
import { portfolioData } from './portfolioData';

describe('Pruebas del Portafolio (Atomic Design)', () => {
    it('Debe renderizar correctamente la sección personal (Organismo)', () => {
    render(<AboutMeSection personal={portfolioData.personal} />);
    expect(screen.getByText(/Vicente Ignacio Zepeda Duarte/i)).toBeInTheDocument();
});

    it('Debe renderizar correctamente el formulario de contacto y sus campos', () => {
    render(<ContactForm contact={portfolioData.contact} />);
    expect(screen.getByText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByText(/Correo Electrónico/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeInTheDocument();
});
});