import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_URLS from './variables';

const LessonPage = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    fetchLessonData();
  }, [lessonId]);

  const fetchLessonData = async () => {
    try {
      const response = await fetch(`${API_URLS.lessons}${lessonId}`);
      const lessonData = await response.json();
      // Prepend the base URL to the video links
      lessonData.videos = lessonData.videos.map(video => ({
        ...video,
        link_vid: `http://127.0.0.1:8000${video.link_vid}`
      }));
      setLesson(lessonData);
    } catch (error) {
      console.error('Error fetching lesson data:', error);
    }
  };

  if (!lesson) {
    return <div>Loading...</div>;
  }

  const { instructor, lesson_description, videos } = lesson;

  return (
    <div>
      <h2>{lesson_description}</h2>

      <h3>Videos</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.id_vid}>
            <strong>ID:</strong> {video.id_vid}<br/>
            <strong>Instructor:</strong> {instructor}<br/>
            <strong>Description:</strong> {lesson_description}<br/>
            <video controls>
              <source src={video.link_vid} type="video/mp4" /> {/* Use the full video URL */}
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonPage;
