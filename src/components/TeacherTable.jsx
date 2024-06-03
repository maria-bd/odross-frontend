import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_URLS from '../variables'; // Import the API URLs
import './AdminTable.css'; // Import the CSS file


const AdminTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URLS.adminInstructorList);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(API_URLS.adminInstructorEditDelete(userId));
        console.log('User deleted successfully');
        // Refresh user list after deletion
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div>
      <div className="top-users-container">
        <h1>Odross Teachers List</h1>
        <table className="top-users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Bio</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {user.photo_url && <img src={user.photo_url} alt="User Photo" style={{ width: '100px', height: '100px' }} />}
                </td>
                <td>{user.name}</td>
                <td>{user.fam_name}</td>
                <td>{user.email}</td>
                <td>{user.password ? '*****' : 'N/A'}</td>
                <td>{user.bio}</td>
                <td>
                  <Link to={`/admin/edit-user/${user.id}`} className="edit-button">Edit</Link>
                  <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br/>
    </div>
  );
};

export default AdminTable;
