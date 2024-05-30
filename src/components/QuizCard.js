import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCard.css';  // We'll create this CSS file for styling

const QuizCard = ({ quiz }) => {
  return (
    <div className="quiz-card">
    <h2>{quiz.title}</h2>
    <p>XP Points: {quiz.XP_pts}</p>
    <Link to={`/quiz/${quiz.quiz_id}`} className="details-button">View Details</Link>
  </div>
);
};


export default QuizCard;