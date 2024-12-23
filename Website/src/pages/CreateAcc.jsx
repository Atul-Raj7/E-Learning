import React from 'react';
import './CreateAcc.css';
import { Link } from 'react-router-dom';

const CreateAcc = () => {
  return (
    <div className="create-acc-container">
      <div className="create-acc-box">
        <h1 className="organization-title">Educational Organization</h1>
        <h2 className="create-acc-title">Create Your Account</h2>
        <p className="create-acc-subtitle">Fill in the details to create a new account</p>
        <form className="create-acc-form">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
          />
          <label className="form-label" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-input"
            placeholder="Choose a username"
          />
          <label className="form-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Create a password"
          />
          <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className="form-input"
            placeholder="Confirm your password"
          />
          <button type="submit" className="create-acc-button">Create Account</button>
        </form>
        <p className="info-text">
          Already have an account? <Link to="/login" className="login-link">Log in here</Link>.
        </p>
      </div>
    </div>
  );
};

export default CreateAcc;
