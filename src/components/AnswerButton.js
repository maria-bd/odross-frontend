import React, { useState } from 'react';

const AnswerButton = ({ answer, isCorrectAnswer, onAnswerSelected }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onAnswerSelected(answer.id, isCorrectAnswer);
  };

  return (
    <div className="answer-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>{answer.answer_text}</label>
    </div>
  );
};

export default AnswerButton;
