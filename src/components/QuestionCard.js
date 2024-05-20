import React, { useState, useEffect } from 'react';
import AnswerButton from './AnswerButton';

const QuestionCard = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [validationMessage, setValidationMessage] = useState('');
  const [timer, setTimer] = useState(30);

  // Countdown timer effect
  useEffect(() => {
    let intervalId;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      setValidationMessage('TIME OUT');
    }

    // Clean up timer on unmount
    return () => clearInterval(intervalId);
  }, [timer]);

  const handleAnswerSelected = (answerId, isCorrect) => {
    if (timer === 0) {
      return;
    }
    setSelectedAnswer({ id: answerId, isCorrect });
  };

  const handleConfirmSelection = () => {
    if (!selectedAnswer) {
      setValidationMessage('Please select an answer');
      return;
    }

    if (selectedAnswer.isCorrect) {
      setValidationMessage('Correct!');
    } else {
      setValidationMessage('Not correct');
    }
  };

  return (
    <div className="question-card">
      <h3>{question.title}</h3>
      <div className="answers">
        {question.answers.map(answer => (
          <AnswerButton
            key={answer.id}
            answer={answer}
            isCorrectAnswer={answer.is_right}
            onAnswerSelected={handleAnswerSelected}
            disabled={timer === 0}
          />
        ))}
      </div>
      <button onClick={handleConfirmSelection} disabled={timer === 0}>
        Confirm Selection
      </button>
      <span className={`validation-message ${validationMessage ? 'show' : ''}`}>
        {validationMessage}
      </span>
      <div className="timer">Time remaining: {timer} seconds</div>
    </div>
  );
};

export default QuestionCard;