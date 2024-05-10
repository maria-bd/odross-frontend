import React, { useState, useEffect } from 'react';
import './CardList.css'; // Import CSS for styling
import Card from './Card'; // Import Card component
import API_URLS from './variables';

const CardList = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? domains.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === domains.length - 1 ? 0 : prevIndex + 1));
  };

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
      <button className="nav-btn" onClick={handlePrev}>{'<'}</button>
      <div className="card-list">
        {domains.map((domain, index) => (
          <Card key={domain.id} domain={domain} isVisible={index === currentIndex} />
        ))}
      </div>
      <button className="nav-btn" onClick={handleNext}>{'>'}</button>
    </div>
  );
};

export default CardList;