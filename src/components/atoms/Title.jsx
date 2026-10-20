import React from 'react';

export const Title = ({ children, level = 2, className = '' }) => {
const Tag = `h${level}`;
const styles = {
    1: 'text-3xl font-bold mb-4',
    2: 'text-2xl font-semibold mb-3 border-b-2 border-blue-500 pb-1',
    3: 'text-xl font-medium mb-2',
};

return <Tag className={`${styles[level] || styles[2]} ${className}`}>{children}</Tag>;
};