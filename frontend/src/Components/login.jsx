import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import logo from '../assets/LOGO.png'; // Import the logo image
import sideImage from '../assets/side-image.png'; // Import the side image
import axios from 'axios';

function LoginSignup() {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login-signup', { StudentId: studentID, Password: password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate(`/portfolio/${studentID}`);
      } else {
        alert('Login failed: ' + response.data.message);
      }
    } catch (err) {
      console.error('Error during login:', err); // Log detailed error for debugging
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-signup-container">
      <div className="side-image-container">
        <img src={sideImage} alt="Side" className="side-image" />
      </div>
      <div className="form-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <form className="login-signup-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
            Student ID:
            <input 
              type="text" 
              name="student-id" 
              required 
              onChange={(e) => setStudentID(e.target.value)} 
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              name="password" 
              required 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </label>
          <button type="submit">Submit</button>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
