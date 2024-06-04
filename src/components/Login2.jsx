import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_URLS from './variables';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Login2 = () => { // Changed the component name to Login2
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear errors when the user starts typing
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch(API_URLS.login2, { // Updated the API_URLS to teacherLogin
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const data = await response.json();
                if (response.ok) {
                    console.log('Teacher login successful');
                    navigate('/addQuiz'); // Redirect to Dashboard upon successful login
                } else {
                    // Handle server-side errors
                    console.error('Teacher login failed:', data.detail);
                    if (data.non_field_errors) {
                        setErrors({ response: data.non_field_errors[0] }); // Set error for response from server
                    } else {
                        setErrors({ response: data.detail });
                    }
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <h2>Teacher Login</h2> {/* Updated the title */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <div className="password-input">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span className="toggle-password" onClick={toggleShowPassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors.password && <span className="error">{errors.password}</span>}
                    {errors.response && <span className="error">{errors.response}</span>}
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="login-links">
                <Link to="/Register">Register</Link>
                <Link to="/Login1">Login as Student</Link> {/* Updated link text */}
            </div>
        </div>
    );
};

export default Login2; // Exported the component as Login2
