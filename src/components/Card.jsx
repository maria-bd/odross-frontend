import React from 'react';

const Card = ({ domain, isVisible }) => {
  const { domain_name, domain_description } = domain;

  return (
    <div className={`card ${isVisible ? 'visible' : ''}`}>
      <h2>{domain_name}</h2>
      <p>{domain_description}</p>
    </div>
  );
};

export default Card;
