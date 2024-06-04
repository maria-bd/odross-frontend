import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URLS from '../variables';
import '../Admin/DomainTable.css'; // Reuse the CSS file from DomainTable

const VideoTable = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newVideo, setNewVideo] = useState({
    lesson: '',
    link_vid: null,
    video_description: '',
    video_title: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(API_URLS.videos);
      setVideos(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id_vid) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        await axios.delete(API_URLS.videoDelete(id_vid));
        setVideos(videos.filter((video) => video.id_vid !== id_vid));
      } catch (error) {
        setError(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setNewVideo({ ...newVideo, [name]: files[0] });
    } else {
      setNewVideo({ ...newVideo, [name]: value });
    }
  };

  const validateForm = () => {
    return (
      newVideo.lesson &&
      newVideo.link_vid &&
      newVideo.video_description &&
      newVideo.video_title
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('lesson', newVideo.lesson);
        formData.append('link_vid', newVideo.link_vid);
        formData.append('video_description', newVideo.video_description);
        formData.append('video_title', newVideo.video_title);

        const response = await axios.post(API_URLS.videoUpload, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 201) {
          console.log('Video added successfully');
          setVideos([...videos, response.data]);
          setNewVideo({
            lesson: '',
            link_vid: null,
            video_description: '',
            video_title: '',
          });
        } else {
          console.error('Failed to add video:', response.data);
          setErrors(response.data);
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
    <div className="domain-table-container">
      <div className="domain-table-wrapper">
        <h1>Videos</h1>
        <table className="domain-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Lesson</th>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video) => (
              <tr key={video.id_vid}>
                <td>{video.id_vid}</td>
                <td>{video.lesson.lesson_description}</td> 
                <td>{video.video_title}</td>
                <td>{video.video_description}</td>
                <td>
                  <a
                    href={'http://localhost:8000' + video.link_vid}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Video
                  </a>
                </td>
                <td>
                  <button onClick={() => handleDelete(video.id_vid)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Add New Video</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Lesson:
            <input
              type="text"
              name="lesson"
              value={newVideo.lesson}
              onChange={handleChange}
              required
            />
            {errors.lesson && <p>{errors.lesson}</p>}
          </label>
          <label>
            Title:
            <input
              type="text"
              name="video_title"
              value={newVideo.video_title}
              onChange={handleChange}
              required
            />
            {errors.video_title && <p>{errors.video_title}</p>}
          </label>
          <label>
            Description:
            <input
              type="text"
              name="video_description"
              value={newVideo.video_description}
              onChange={handleChange}
              required
            />
            {errors.video_description && <p>{errors.video_description}</p>}
          </label>
          <label>
            Video File:
            <input
              type="file"
              name="link_vid"
              onChange={handleChange}
              required
            />
            {errors.link_vid && <p>{errors.link_vid}</p>}
          </label>
          <button type="submit">Add Video</button>
        </form>
      </div>
    </div>
  );
};

export default VideoTable;