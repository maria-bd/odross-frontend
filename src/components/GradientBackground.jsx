import React from 'react';

const GradientBackground = ({ children }) => {
    return (
        <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #00ffff, #0000ff)', 
            minHeight: '100vh',
            padding: '20px' // Adjust padding as needed
        }}>
            {children}
        </div>
    );
};

export default GradientBackground;
