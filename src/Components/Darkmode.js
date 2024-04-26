import React, { useState } from 'react';

const DarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return (
        <div style={{ backgroundColor: isDark ? '#222' : '#fff', minHeight: '100vh', color: isDark ? '#fff' : '#000' }}>
            <h1>This is dark mode demo page</h1>
            <button onClick={toggleDarkMode}>
                {isDark ? "Disable dark mode (black)" : "Enable dark mode (white)"}
            </button>
        </div>
    );
};

export default DarkMode;
