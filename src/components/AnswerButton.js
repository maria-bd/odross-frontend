import React, { useState } from 'react';
import './AnswerButton.css';

const AnswerButton = ({ answer, isCorrectAnswer, onAnswerSelected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAnswerClick = () => {
    setIsSelected(!isSelected);
    onAnswerSelected(answer.id, isCorrectAnswer);
  };

  return (
    <div
      className={`answer-container ${isHovered ? 'hovered' : ''} ${isSelected ? 'selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleAnswerClick}
    >
      <label className="answer-label">
        {answer.answer_text}
      </label>
    </div>
  );
};

export default AnswerButton;
