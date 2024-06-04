import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URLS from '../variables';
import './AddQuiz.css';
import NavbarInstructor from './NavbarInstructor';

const AddQuiz = () => {
  const [title, setTitle] = useState('');
  const [lessonOptions, setLessonOptions] = useState([]);
  const [selectedLessonId, setSelectedLessonId] = useState('');
  const [XP_pts, setXP_pts] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [answers, setAnswers] = useState([]);
  const [answerText, setAnswerText] = useState('');
  const [isRight, setIsRight] = useState(false); // State for storing whether the answer is correct or not
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get(API_URLS.lesson);
        console.log('Lesson API response:', response.data);
        setLessonOptions(response.data);
      } catch (err) {
        console.error('An error occurred while fetching the lessons:', err);
      }
    };

    fetchLessons();
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${API_URLS.quizList}/${selectedLessonId}`);
        console.log('Questions API response:', response.data);
        setQuestions(response.data);
      } catch (err) {
        console.error('An error occurred while fetching the questions:', err);
      }
    };

    if (selectedLessonId) {
      fetchQuestions();
    }
  }, [selectedLessonId]);

  const addQuestion = () => {
    setQuestions([...questions, { question_text: questionText, answers: answers }]);
    setQuestionText('');
    setAnswers([]);
  };

  const addAnswer = () => {
    setAnswers([...answers, { answer_text: answerText, is_right: isRight }]);
    setAnswerText('');
    setIsRight(false); // Reset isRight after adding answer
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(API_URLS.create_quiz, { title, lesson_id: selectedLessonId, XP_pts });
      if (response.status === 201) {
        setSuccess('Quiz created successfully!');
        setTitle('');
        setSelectedLessonId('');
        setXP_pts(0);
      }
    } catch (err) {
      setError('An error occurred while creating the quiz.');
    }
  };

  return (
    <div>
      <NavbarInstructor />
      <br />
      <div className="add-quiz">
        <h2>Add New Test</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Lesson:</label>
            <select
              value={selectedLessonId}
              onChange={(e) => setSelectedLessonId(parseInt(e.target.value))}
              required
            >
              <option value="">Select a lesson</option>
              {lessonOptions.map((lesson) => (
                <option key={lesson.lesson_id} value={lesson.lesson_id}>
                  {lesson.lesson_description}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>XP Points:</label>
            <input
              type="number"
              value={XP_pts}
              onChange={(e) => setXP_pts(parseInt(e.target.value))}
              required
            />
          </div>
          <div>
            <label>Quiz Questions:</label>
            <ul>
              {questions.map((question, index) => (
                <li key={index}>
                  {question.question_text}
                  <ul>
                    {question.answers.map((answer, idx) => (
                      <li key={idx}>
                        {answer.answer_text} {answer.is_right && "(Correct)"}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label>Question:</label>
            <input
              type="text"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Answer:</label>
            <input
              type="text"
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              required
            />
            <label>
              <input
                type="checkbox"
                checked={isRight}
                onChange={(e) => setIsRight(e.target.checked)}
              />{" "}
              Correct Answer
            </label>
            <button type="button" onClick={addAnswer}>Add Answer</button>
          </div>
          <button type="button" onClick={addQuestion}>Add Question</button>
          <button type="submit">Create Quiz</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </div>
  );
};

export default AddQuiz;
