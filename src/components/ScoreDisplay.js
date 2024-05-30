import React from 'react';

const ScoreDisplay = ({ correctCount, totalQuestions }) => {
  const renderResultMessage = () => {
    if (correctCount === totalQuestions) {
      return <div className="success">Congratulations! You have finished the quiz.</div>;
    } else {
      return (
        <div className="failure">
          Your score: {correctCount} / {totalQuestions}
          <p>Retry another time!</p>
        </div>
      );
    }
  };

  return <div className="score-display">{renderResultMessage()}</div>;
};

export default ScoreDisplay;