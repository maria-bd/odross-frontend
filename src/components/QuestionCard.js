import React from 'react';
import AnswerButton from './AnswerButton';
import './QuizDetail.css';
import './AnswerButton.css';

const QuestionCard = ({ question, selectedAnswer, onAnswerSelected }) => {
  const handleAnswerSelected = (answerId) => {
    onAnswerSelected(question.id, answerId);
  };

  return (
    <div className="question-card">
      <h3>{question.title}</h3>
      <div className="answers">
        {question.answers.map(answer => (
          <AnswerButton
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswer === answer.id}
            onAnswerSelected={handleAnswerSelected}
            disabled={Boolean(selectedAnswer)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;