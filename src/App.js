import React from 'react';
import Chat from './components/Chat';
import './App.css';  // Optional styling

function App() {
  return (
    <div className="App">
      <h1>Chat with Fee</h1>  {/* Let users know they're chatting with Fee */}
      <p>Welcome to the AI chat! You are chatting with Fee, your personal assistant.</p>
      <Chat />
    </div>
  );
}

export default App;
