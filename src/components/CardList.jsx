import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import Card from './Card'; // Import Card component
import API_URLS from './variables';
import './CardList.css'; // Import custom CSS for styling

const CardList = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URLS.domain, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch domains');
        }

        const data = await response.json();
        setDomains(data);
      } catch (error) {
        console.error('Error fetching domains:', error);
        setError('Error fetching domains');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (domains.length === 0) {
    return <div>No domains available</div>;
  }

  return (
    <div className="card-list-container">
      <div className="card-list">
        {/* Render cards */}
        {domains.map((domain) => (
          <Link key={domain.id} to={`/domain/${domain.domain_name}`}>
            <Card domain={domain} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
