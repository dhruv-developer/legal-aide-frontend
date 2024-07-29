import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/translate">Doc.AI</a>
          <a href="/available-documents">Available Documents</a>
          <button className="logout-btn">Logout</button>
        </nav>
      </header>
      <main className="main-content">
        <h1>Welcome to LegalAide</h1>
        <p>Translate, summarize and simplify legal documents easily and securely</p>
        <div className="features">
          <div className="feature">
            <h2>1</h2>
            <p>Translate legal documents into any regional language</p>
          </div>
          <div className="feature">
            <h2>2</h2>
            <p>Get Simplified Versions of any legal document pertaining to your case</p>
          </div>
          <div className="feature">
            <h2>3</h2>
            <p>Find and view all case documents in a sorted manner</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
