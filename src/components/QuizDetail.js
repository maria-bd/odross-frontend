import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_URLS from '../variables';
import QuestionCard from './QuestionCard';
import './QuizDetail.css';

const QuizDetail = () => {
  const { quiz_id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [quizTitle, setQuizTitle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        console.log(`Fetching details for quiz_id: ${quiz_id}`);

        const quizResponse = await axios.get(API_URLS.quizDetail(quiz_id));
        console.log('Quiz Response:', quizResponse.data);
        setQuizTitle(quizResponse.data.title);

        const questionsResponse = await axios.get(API_URLS.quizQuestions(quiz_id));
        console.log('Questions Response:', questionsResponse.data);
        setQuestions(questionsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quiz details:', error);
      }
    };

    fetchQuizDetails();
  }, [quiz_id]);

  console.log('Quiz Title:', quizTitle);
  console.log('Questions:', questions);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="quiz-detail">
      <h1>{quizTitle}</h1>
      {questions.length > 0 ? (
        questions.map(question => (
          <QuestionCard key={question.id} question={question} />
        ))
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default QuizDetail;
