import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making API requests
import './ChatComponent.css'

const ChatbotComponent = () => {
  const [message, setMessage] = useState(''); // State for user's message
  const [conversation, setConversation] = useState([]); // State for chatbot conversation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!message) return; // Check if user entered a message

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/generate/', {
        message,
      });

      setConversation((prevConversation) => [
        ...prevConversation,
        { role: 'user', text: message }, // Add user's message
        { role: 'bot', text: response.data.response } // Add chatbot's response
      ]);

      setMessage(''); // Clear the message input
    } catch (error) {
      console.error(error); // Handle any errors during API call
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
      <h1>Chatbot</h1>
      <div className="conversation">
        {renderConversation()}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatbotComponent;
