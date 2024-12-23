import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming your CSS file is named Login.css

const Login = () => {
  const [loginType, setLoginType] = useState('student'); // default login type
  const navigate = useNavigate();

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  const handleLogin = () => {
    // Add login functionality here
    console.log(`Logging in as ${loginType}`);
    navigate(`/dashboard/${loginType}`); // Assuming each user type goes to a different dashboard
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="organization-title">Educational Organization</h1>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please log in to continue</p>

        <div className="login-type-buttons">
          <button
            className={`login-type-button ${loginType === 'student' ? 'active' : ''}`}
            onClick={() => handleLoginTypeChange('student')}
          >
            Student Login
          </button>
          <button
            className={`login-type-button ${loginType === 'admin' ? 'active' : ''}`}
            onClick={() => handleLoginTypeChange('admin')}
          >
            Admin Login
          </button>
          <button
            className={`login-type-button ${loginType === 'teacher' ? 'active' : ''}`}
            onClick={() => handleLoginTypeChange('teacher')}
          >
            Teacher Login
          </button>
        </div>

        <form className="login-form">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-input" placeholder="Enter your Email" type="email" id="email" name="email" required />

          <label className="form-label" htmlFor="password">Password</label>
          <input className="form-input" placeholder="Enter your Password" type="password" id="password" name="password" required />

          <button type="button" className="login-button" onClick={handleLogin}>
            Log In
          </button>
        </form>

        <p className="info-text">
          Don't have an account? <a href="/create-account" className="create-account-link">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
