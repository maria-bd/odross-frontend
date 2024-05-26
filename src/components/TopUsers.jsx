import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URLS from './variables';
import './TopUsers.css';
import Navbar1 from './Navbar1';

const TopUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(API_URLS.topUsers);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching top users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
         <Navbar1 />
        <div className="top-users-container">
            <h1>Top 10 Users</h1>
            <table className="top-users-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>XP Points</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name} {user.fam_name}</td>
                            <td className="xp-points">{user.total_XP}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default TopUsers;
