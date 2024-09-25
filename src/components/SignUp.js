import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate('/dashboard'); // Redirect to dashboard after signup
  };

  return (
    <div className="signup-container">
        <div className="signup-logo">
        {/* Add your logo image */}
        <img src="C:\Users\HP\Desktop\CodingStuff\test-website\public\Screenshot (327).png" alt="Logo" />
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;