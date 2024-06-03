import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URLS from '../variables';
import './DomainTable.css'; // Reuse the CSS file from DomainTable

const TrainingTable = () => {
  const [trainings, setTrainings] = useState([]);
  const [newTraining, setNewTraining] = useState({ domain: '', training_name: '', training_description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get(API_URLS.training);
      setTrainings(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (training_id) => {
    if (window.confirm('Are you sure you want to delete this training?')) {
      try {
        await axios.delete(API_URLS.trainingDetail(training_id));
        setTrainings(trainings.filter(training => training.training_id !== training_id));
      } catch (error) {
        setError(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTraining({ ...newTraining, [name]: value });
  };

  const validateForm = () => {
    return newTraining.domain && newTraining.training_name && newTraining.training_description;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(API_URLS.training, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTraining),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Training added successfully');
          setTrainings([...trainings, data]);
          setNewTraining({ domain: '', training_name: '', training_description: '' });
        } else {
          console.error('Failed to add training:', data);
          if (data.domain && data.domain.length > 0) {
            setErrors({ domain: data.domain[0] });
          }
          if (data.training_name && data.training_name.length > 0) {
            setErrors({ training_name: data.training_name[0] });
          }
          if (data.training_description && data.training_description.length > 0) {
            setErrors({ training_description: data.training_description[0] });
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Form validation failed');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="domain-table-container">
      <div className="domain-table-wrapper">
        <h1>Training</h1>
        <table className="domain-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Domain</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map(training => (
              <tr key={training.training_id}>
                <td>{training.training_id}</td>
                <td>{training.domain}</td>
                <td>{training.training_name}</td>
                <td>{training.training_description}</td>
                <td>
                  <button onClick={() => handleDelete(training.training_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Add New Training</h2>
        <form className="domain-form" onSubmit={handleSubmit}>
          <label>
            Domain:
            <input
              type="text"
              name="domain"
              value={newTraining.domain}
              onChange={handleChange}
              required
            />
            {errors.domain && <p>{errors.domain}</p>}
          </label>
          <label>
            Name:
            <input
              type="text"
              name="training_name"
              value={newTraining.training_name}
              onChange={handleChange}
              required
            />
            {errors.training_name && <p>{errors.training_name}</p>}
          </label>
          <label>
            Description:
            <input
              type="text"
              name="training_description"
              value={newTraining.training_description}
              onChange={handleChange}
              required
            />
            {errors.training_description && <p>{errors.training_description}</p>}
          </label>
          <button type="submit">Add Training</button>
        </form>
      </div>
    </div>
  );
};

export default TrainingTable;
