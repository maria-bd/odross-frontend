import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URLS from '../variables'; // Import the API URLs

const DeleteUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    deleteUser();
  }, []);

  const deleteUser = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(API_URLS.adminLearnerEditDelete(userId));
        console.log('User deleted successfully');
        // Optionally, you can redirect to the user list page or do any other action
        navigate('/admin'); // Redirect to the user list page
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    } else {
      navigate('/admin'); // Redirect to the user list page if user cancels deletion
    }
  };

  return (
    <div>
      {/* You can show a loading spinner or any other message while the deletion is in progress */}
      <p>Deleting user...</p>
    </div>
  );
};

export default DeleteUser;
