import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = async () => {
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: userInput,
        max_tokens: 100,
      }, {
        headers: {
          'Authorization': `Bearer YOUR_API_KEY`
        }
      });

      const botReply = response.data.choices[0].text.trim();
      setMessages([...newMessages, { sender: 'bot', text: botReply }]);
    } catch (error) {
      console.error('Error communicating with the chatbot:', error);
    }
  };

  const styles = {
    chatbot: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 10,
    },
    chatMessages: {
      height: '300px',
      overflowY: 'auto',
      padding: '10px',
      backgroundColor: '#f4f4f4',
    },
    userMessage: {
      textAlign: 'right',
      margin: '5px 0',
      color: '#000',
    },
    botMessage: {
      textAlign: 'left',
      margin: '5px 0',
      color: '#000',
    },
    input: {
      width: 'calc(100% - 20px)',
      margin: '10px',
      padding: '5px',
    },
    button: {
      width: '100%',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.chatbot}>
      <div style={styles.chatMessages}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type a message..."
        style={styles.input}
      />
      <button onClick={handleUserInput} style={styles.button}>Send</button>
    </div>
  );
};

export default Chatbot;
