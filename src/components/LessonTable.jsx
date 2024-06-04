import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URLS from '../variables';
import '../Admin/DomainTable.css'; // Reuse the CSS file from DomainTable
import NavbarInstructor from './NavbarInstructor';
import VideoTable from './VideoTable';


const LessonTable = () => {
  const [lessons, setLessons] = useState([]);
  const [newLesson, setNewLesson] = useState({ training: '', lesson_description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get(API_URLS.training);
      setTrainings(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await axios.get(API_URLS.lesson);
      setLessons(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (lesson_id) => {
    if (window.confirm('Are you sure you want to delete this lesson?')) {
      try {
        await axios.delete(API_URLS.lessonsDelete(lesson_id));
        setLessons(lessons.filter(lesson => lesson.lesson_id !== lesson_id));
      } catch (error) {
        setError(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLesson({ ...newLesson, [name]: value });
  };

  const validateForm = () => {
    return newLesson.training && newLesson.lesson_description;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const lessonData = { ...newLesson, instructor: 160 };
        const response = await fetch(API_URLS.lesson, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(lessonData),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Lesson added successfully');
          setLessons([...lessons, data]);
          setNewLesson({ training: '', lesson_description: '' });
        } else {
          console.error('Failed to add lesson:', data);
          if (data.training && data.training.length > 0) {
            setErrors({ training: data.training[0] });
          }
          if (data.lesson_description && data.lesson_description.length > 0) {
            setErrors({ lesson_description: data.lesson_description[0] });
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Form validation failed');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <NavbarInstructor />
    <div className="domain-table-container">
      <div className="domain-table-wrapper">
      <h1>Training</h1>
        <table className="domain-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map(training => (
              <tr key={training.training_id}>
                <td>{training.training_id}</td>
                <td>{training.training_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <h1>Lessons</h1>
        <table className="domain-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Training</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map(lesson => (
              <tr key={lesson.lesson_id}>
                <td>{lesson.lesson_id}</td>
                <td>{lesson.training}</td>
                <td>{lesson.lesson_description}</td>
                <td>
                  <button onClick={() => handleDelete(lesson.lesson_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Add New Lesson</h2>
        <form className="domain-form" onSubmit={handleSubmit}>
          <label>
            Training:
            <input
              type="text"
              name="training"
              value={newLesson.training}
              onChange={handleChange}
              required
            />
            {errors.training && <p>{errors.training}</p>}
          </label>
          <label>
            Lesson Name:
            <input
              type="text"
              name="lesson_description"
              value={newLesson.lesson_description}
              onChange={handleChange}
              required
            />
            {errors.lesson_description && <p>{errors.lesson_description}</p>}
          </label>
          <button type="submit">Add Lesson</button>
        </form>
      </div>
    </div>
    <br/>
    <VideoTable/>
    <br/>
    </div>
  );
};

export default LessonTable;
