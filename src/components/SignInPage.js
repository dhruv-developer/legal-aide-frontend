// src/components/SignInPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
  return (
    <div className="signin-page">
      <div className="signin-section">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
          <Link to="/forgot-password">Forgot password?</Link>
        </form>
        <Link to="/sign-up">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInPage;
