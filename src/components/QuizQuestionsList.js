import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_URLS from '../variables';
import QuestionCard from './QuestionCard';

const QuizQuestionsList = () => {
  const { quiz_id } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(API_URLS.quizQuestions(quiz_id));
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [quiz_id]);

  return (
    <div className="quiz-questions-list">
      {questions.map(question => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuizQuestionsList;