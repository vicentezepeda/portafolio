import React from 'react';

export const MainLayout = ({ children }) => {
return (
    <div className="layout-wrapper">
    <main className="main-container">
        {children}
    </main>
    </div>
);
};