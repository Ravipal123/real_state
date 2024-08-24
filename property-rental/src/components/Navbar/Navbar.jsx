// Navbar.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import './Navbar.css';

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to login page
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleLogoutClick = () => {
        logout(); // Call logout from AuthContext
        navigate('/');
    }    

    return (
        <nav className="navbar">
            <div className="navbar-brand">Property Rental</div>
            <div className='navbar-links'>
            {!user ? (
                <>
                    <button onClick={handleLoginClick}>Login</button>
                    <button onClick={handleSignupClick}>Sign Up</button>
                </>
            ) : (
                <>
                    <div className="user-info">
                            <span>{user.username}</span>
                            {user.avatar && (
                                <img
                                    src={user.avatar}
                                    alt="User Avatar"
                                    className="user-avatar"
                                />
                            )}
                        </div>
                    <button onClick={handleLogoutClick}>Logout</button>
                </>
            )}
            </div>
        </nav>
    );
}
