import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import API_URLS from '../variables';
import './DomainTable.css'; // Import the CSS file

const DomainTable = () => {
  const [domains, setDomains] = useState([]);
  const [newDomain, setNewDomain] = useState({ domain_name: '', domain_description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Define navigate using useNavigate

  useEffect(() => {
    fetchDomains();
  }, []);

  const fetchDomains = async () => {
    try {
      const response = await axios.get(API_URLS.domain);
      setDomains(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (domain_id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
      await axios.delete(API_URLS.domainDetail(domain_id));
      setDomains(domains.filter(domain => domain.domain_id !== domain_id));
    } catch (error) {
      setError(error);
    }}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDomain({ ...newDomain, [name]: value });
  };

  const validateForm = () => {
    return newDomain.domain_name && newDomain.domain_description;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(API_URLS.domain, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newDomain),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Domain added successfully');
          setDomains([...domains, data]);
          setNewDomain({ domain_name: '', domain_description: '' });
          navigate('/admin'); // Adjust the navigation path as needed
        } else {
          console.error('Failed to add domain:', data);
          if (data.domain_name && data.domain_name.length > 0) {
            setErrors({ domain_name: data.domain_name[0] });
          }
          if (data.domain_description && data.domain_description.length > 0) {
            setErrors({ domain_description: data.domain_description[0] });
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
      <br />
      <div className="domain-table-wrapper">
        <h1>Domains</h1>
        <table className="domain-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {domains.map(domain => (
              <tr key={domain.domain_id}>
                <td>{domain.domain_id}</td>
                <td>{domain.domain_name}</td>
                <td>{domain.domain_description}</td>
                <td>
                  <button onClick={() => handleDelete(domain.domain_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Add New Domain</h2>
        <form className="domain-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              className="domain-name-input"
              value={newDomain.domain_name}
              onChange={handleChange}
              required
            />
            {errors.domain_name && <p>{errors.domain_name}</p>}
          </label>
          <label>
            Description:
            <input
              type="text"
              className="domain-description-input"
              value={newDomain.domain_description}
              onChange={handleChange}
              required
            />
            {errors.domain_description && <p>{errors.domain_description}</p>}
          </label>
          <button type="submit" className="add-domain-button">Add Domain</button>
        </form>
      </div>
    </div>
  );
};

export default DomainTable;
