import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_URLS from '../variables';
import QuestionCard from './QuestionCard';
import './QuizDetail.css';
import './AnswerButton.css';
import Navbar1 from '../Navbar1';


const QuizDetail = () => {
  const { quiz_id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [quizTitle, setQuizTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctCount, setCorrectCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(300); // 5 minutes (in seconds)

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

  const handleAnswerSelected = (questionId, answerId) => {
    setSelectedAnswers(prevSelectedAnswers => ({
      ...prevSelectedAnswers,
      [questionId]: answerId,
    }));
  };

  const handleValidateAllQuizzes = () => {
    if (timer > 0) {
      let count = 0;
      questions.forEach(question => {
        const selectedAnswerId = selectedAnswers[question.id];
        if (selectedAnswerId && question.answers.find(answer => answer.id === selectedAnswerId)?.is_right) {
          count++;
        }
      });

      setCorrectCount(count);
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      setQuizCompleted(true);
    }
  }, [timer]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <Navbar1 />
    <br/>
    <div className="quiz-detail">
      <h1>{quizTitle}</h1>
      <div className="timer">Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</div>
      {questions.length > 0 ? (
        questions.map(question => (
          <QuestionCard
            key={question.id}
            question={question}
            selectedAnswer={selectedAnswers[question.id]}
            onAnswerSelected={handleAnswerSelected}
          />
        ))
      ) : (
        <p>No questions available.</p>
      )}
      <button className="validate-button" onClick={handleValidateAllQuizzes} disabled={timer <= 0}>
        Validate The All Answers
        <br />
      </button>
      {quizCompleted && (
        <div className="score-message">
          Your score: {correctCount} / {questions.length}
          <p>Retry another time!</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default QuizDetail;