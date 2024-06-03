import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_URLS from '../variables'; // Import the API URLs

const EditUser = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({}); // Stores fetched user data
  const [formData, setFormData] = useState({
    name: '',
    fam_name: '',
    email: '',
    bio: '', // Consider removing password from form (security implications)
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Track API errors

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URLS.adminLearnerOne(userId));
      setUserData(response.data);
      setFormData(response.data); // Pre-populate form with user data
    } catch (error) {
      setError(error);
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Build updated data object based on form data
      const updatedData = {
        name: formData.name,
        fam_name: formData.fam_name,
        email: formData.email,
        bio: formData.bio,
      };

      console.log('Data to be sent:', updatedData); // Log for debugging

      const response = await axios.put(
        API_URLS.adminLearnerEditDelete(userId),
        updatedData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        console.log('User profile updated successfully');
        // Optionally, display a success message or redirect the user
      } else {
        console.error('Error updating user profile. Status:', response.status);
        // Check response.data for detailed error messages (if provided by the server)
        const errorMessage = response.data?.message || 'An error occurred.';
        setError(errorMessage); // Set user-friendly error message
      }
    } catch (error) {
      setError(error);
      console.error('Error updating user profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Family Name:
          <input type="text" name="fam_name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
        </label>
        {/* Consider removing password editing field */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;