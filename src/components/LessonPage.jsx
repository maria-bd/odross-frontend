import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_URLS from './variables';
import './LessonPage.css';
import Chatbot from '../components/ChatBot/ChatComponent';

const LessonPage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    fetchLessonData();
  }, [lessonId]);

  const fetchLessonData = async () => {
    try {
      const response = await fetch(`${API_URLS.lessons}${lessonId}`);
      const lessonData = await response.json();
      lessonData.videos = lessonData.videos.map(video => ({
        ...video,
        link_vid: `http://127.0.0.1:8000${video.link_vid}`
      }));
      setLesson(lessonData);
    } catch (error) {
      console.error('Error fetching lesson data:', error);
    }
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex(prevIndex => prevIndex + 1);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex(prevIndex => prevIndex - 1);
  };

  if (!lesson) {
    return <div>Loading...</div>;
  }

  const { instructor, lesson_description, videos } = lesson;
  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="lesson-page">
      <div className="main-content">
        <h2>{lesson_description}</h2>
        <div className="button-group">
          <button
            disabled={currentVideoIndex === 0}
            onClick={handlePreviousVideo}
            className="nav-button"
          >
            Previous
          </button>
          <button
            disabled={currentVideoIndex === videos.length - 1}
            onClick={handleNextVideo}
            className="nav-button"
          >
            Next
          </button>
        </div>
        <div className="video-container">
          <video controls>
            <source src={currentVideo.link_vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-details">
          <strong>Description:</strong> {lesson_description}
        </div>
      </div>
      <div className="sidebar">
        <Chatbot />
      </div>
    </div>
  );
};

export default LessonPage;