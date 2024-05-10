import React, { useEffect, useState } from 'react';
import API_URLS from './variables';
import 'bootstrap/dist/css/bootstrap.css';
import './CardContainer.css';

const CardContainer = () => {
    const [domains, setDomains] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const domainsResponse = await fetch(API_URLS.domain);
        const domainsData = await domainsResponse.json();
  
        const trainingsResponse = await fetch(API_URLS.training);
        const trainingsData = await trainingsResponse.json();
  
        const lessonsResponse = await fetch(API_URLS.lesson);
        const lessonsData = await lessonsResponse.json();
  
  

      // Merge the data to form the complete hierarchy
      const mergedData = domainsData.map(domain => {
        const domainTrainings = trainingsData.filter(training => training.domain === domain.domain_id);
        const domainTrainingsWithLessons = domainTrainings.map(training => {
          const trainingLessons = lessonsData.filter(lesson => lesson.training === training.training_id);
          return { ...training, lessons: trainingLessons };
        });
        return { ...domain, trainings: domainTrainingsWithLessons };
      });

      setDomains(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {domains.map(domain => (
          <div className="col-md-4 mb-4" key={domain.domain_id}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{domain.domain_name}</h2>
                {domain.trainings.map(training => (
                  <div className="mb-3" key={training.training_id}>
                    <h3>
                      <button className="btn btn-primary btn-block">{training.training_name}</button>
                    </h3>
                    {training.lessons.map(lesson => (
                      <div key={lesson.lesson_id}>
                        <h4>
                          <button className="btn btn-secondary btn-block">{lesson.lesson_description}</button>
                        </h4>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;