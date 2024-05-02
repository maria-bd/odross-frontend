import React, { useState, useEffect } from 'react';
import API_URLS from './variables';

const Profile = ({ userEmail }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(API_URLS.profile); // Assuming this endpoint returns all users
                const userData = await response.json();
                if (response.ok) {
                    // Filter out the user with the matching email
                    const matchingUser = userData.find(u => u.email === userEmail);
                    if (matchingUser) {
                        setUser(matchingUser);
                    } else {
                        console.error('User not found');
                    }
                } else {
                    console.error('Failed to fetch users');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [userEmail]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : user ? (
                <div>
                    <h2>Welcome, {user.name}</h2>
                    {/* Display other user profile information */}
                </div>
            ) : (
                <p>User not found</p>
            )}
        </div>
    );
};

export default Profile;
