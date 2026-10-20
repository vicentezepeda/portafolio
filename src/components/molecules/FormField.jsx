import React from 'react';
import { Input } from '../atoms/Input';

export const FormField = ({ label, name, value, onChange, type = 'text', placeholder, error, isTextArea = false }) => {
return (
    <div className="mb-4 text-left">
    <label className="block text-gray-700 font-medium mb-1" htmlFor={name}>
        {label}
    </label>
    <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isTextArea={isTextArea}
    />
    {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </div>
);
};