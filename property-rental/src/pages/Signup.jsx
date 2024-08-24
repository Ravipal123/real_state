// SignupPage.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import "./Signup.css";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();
    const { signup } = useContext(AuthContext);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        signup(username, password, avatar);
        navigate('/login'); // Redirect after signup
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Username:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Avatar:
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleAvatarChange} 
                    />
                </label>
                {avatar && <img src={avatar} alt="Avatar Preview" style={{ width: '100px', height: '100px' }} />}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
