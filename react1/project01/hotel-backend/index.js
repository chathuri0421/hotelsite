import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure './App' points to the correct path of your App component.
import './index.css'; // Import your global styles if any (optional).

// Create the root element and render the App component inside it.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// server.js

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
