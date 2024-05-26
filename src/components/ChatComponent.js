import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatComponent.css';

const ChatbotComponent = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/generate/', {
        message,
      });

      setConversation((prevConversation) => [
        ...prevConversation,
        { role: 'user', text: message },
        { role: 'bot', text: response.data.response }
      ]);

      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    // Optional: Fetch initial conversation history from your backend (if applicable)
  }, []);

  const renderConversation = () => {
    return conversation.map((message, index) => (
      <div key={index} className={`message ${message.role}`}>
        {message.text}
      </div>
    ));
  };

  return (
    <div className="chatbot-container">
      <br />
      <h1>AI Chatbot Assistant</h1>
      <div className="conversation">
        {renderConversation()}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Do you have any questions?"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatbotComponent;
