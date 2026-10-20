import React, { useState, useEffect } from 'react';

export const Footer = ({ email }) => {
const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

useEffect(() => {
    setCurrentYear(new Date().getFullYear());
}, []);

return (
    <footer className="mt-12 py-6 border-t border-gray-200 text-center text-gray-600 text-sm">
    <p>© {currentYear} Vicente Zepeda Duarte. Todos los derechos reservados.</p>
    <p className="mt-1">Contacto directo: {email}</p>
    </footer>
);
};