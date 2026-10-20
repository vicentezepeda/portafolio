import React from 'react';

export const Input = ({ type = 'text', name, value, onChange, placeholder, required = false, isTextArea = false }) => {
const baseClasses = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

if (isTextArea) {
    return (
    <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={4}
        className={baseClasses}
    />
    );
}

return (
    <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={baseClasses}
    />
);
};