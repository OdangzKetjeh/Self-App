import React, { useState } from 'react';
import { getFeeResponse } from '../services/huggingFaceService';  // Use Fee's response

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Function to send the user's message and receive Fee's response
  const sendMessage = async (message) => {
    // Add the user's message to the chat
    const newMessages = [...messages, { text: message, isUser: true }];
    setMessages(newMessages);

    // Get Fee's response from the Hugging Face API
    const aiResponse = await getFeeResponse(message);

    // Add Fee's response to the chat
    setMessages((prevMessages) => [...prevMessages, { text: aiResponse, isUser: false }]);
  };

  const handleSendClick = () => {
    if (userInput.trim() !== '') {
      sendMessage(userInput);
      setUserInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
