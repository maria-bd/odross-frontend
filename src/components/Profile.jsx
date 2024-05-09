// Profile.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API_URLS from './variables';
import './Profile.css';

const Profile = () => {
    const location = useLocation();
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userEmail = location.state?.userEmail;
                if (!userEmail) {
                    console.error('User email not provided');
                    return;
                }

                const response = await fetch(`${API_URLS.profile}?email=${userEmail}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user profile');
                }

                const data = await response.json();
                setUserProfile(data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError('Error fetching user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [location.state?.userEmail]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userProfile) {
        return <div>No profile data available</div>;
    }

    return (
        <div className="profile-card">
            <div className="profile-photo">
                <img src={userProfile.photo} alt="User" />
            </div>
            <div className="profile-info">
                <h3>Name: {userProfile.name}</h3>
                <h3>Family Name: {userProfile.fam_name}</h3>
                <p>Bio: {userProfile.bio}</p>
                <p>Total XP: {userProfile.total_XP}</p>
                <Link to="/EditProfile" className="edit-profile-button">Edit Profile</Link>
            </div>
        </div>
    );
};

export default Profile;
