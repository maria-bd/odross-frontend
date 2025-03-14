import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import API_URLS from '../variables'; // Import API_URLS
import QuizCard from './QuizCard';
import Navbar1 from '../Navbar1';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(API_URLS.quizList); // Use API_URLS.quizList
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
    <Navbar1 />
    <br/>
    <center>
    <div className="quiz-list">
      {quizzes.map(quiz => (
        <QuizCard key={quiz.quiz_id} quiz={quiz} />
      ))}
    </div>
    </center>
    </div>
  );
};

export default QuizList;
