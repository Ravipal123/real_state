// src/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap around parts of your app that need access to auth
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load user from localStorage when the component mounts
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    // Login function to set user in state and localStorage
    const login = (username, avatar) => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser); // Set user state only during login
        }
    };

    // Logout function to clear user from state and localStorage
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const signup = (username, password, avatar) => {
        const userData = { username, avatar };
        localStorage.setItem('user', JSON.stringify(userData)); // Save user data in localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
