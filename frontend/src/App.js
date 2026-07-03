import React, { useState, useEffect } from 'react';

function App() {
  // Set up a state variable to hold the message from Flask
  const [backendMessage, setBackendMessage] = useState("Waiting for Flask...");

  // useEffect runs automatically when the component loads
  useEffect(() => {
    // Fetch the JSON from your Flask API
    fetch('http://127.0.0.1:5000/api/test')
      .then(response => response.json())
      .then(data => {
        // Update our state with the exact message from your backend
        setBackendMessage(data.message);
      })
      .catch(error => console.error("Error connecting to backend:", error));
  }, []);

  return (
    <div style={{ backgroundColor: '#121214', color: '#e1e1e6', minHeight: '100vh', padding: '3rem', fontFamily: 'sans-serif' }}>
      <h1>React 🤝 Flask Connection</h1>
      <div style={{ background: '#202024', padding: '2rem', borderRadius: '8px', border: '1px solid #29292e', marginTop: '2rem' }}>
        <h2>Backend Status:</h2>
        <p style={{ color: '#00b37e', fontSize: '1.2rem', fontWeight: 'bold' }}>{backendMessage}</p>
      </div>
    </div>
  );
}

export default App;