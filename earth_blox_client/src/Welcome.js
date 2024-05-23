import React from 'react';
import { useNavigate } from 'react-router-dom';
import { } from 'react-router-dom';

const Welcome = () => {
    const history = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    return (
        <div>
            <h1>Welcome!</h1>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default Welcome;
