import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_URLS from '../variables';
import QuizQuestionsList from './QuizQuestionsList';

const QuizDetail = () => {
  const { quiz_id } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(API_URLS.quizDetail(quiz_id));
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz details:', error);
      }
    };

    fetchQuiz();
  }, [quiz_id]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-detail">
      <h2>{quiz.title}</h2>
      <QuizQuestionsList />
    </div>
  );
};

export default QuizDetail;