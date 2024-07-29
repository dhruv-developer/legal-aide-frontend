// src/components/TranslatePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TranslatePage.css';

const TranslatePage = () => {
  return (
    <div className="translate-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/doc-ai">Doc.AI</Link>
        <Link to="/available-documents">Available Documents</Link>
        <button className="logout-button">Logout</button>
      </nav>
      <div className="translate-section">
        <div className="translate-controls">
          <button className="translate-button">Translate</button>
          <select className="language-select">
            <option>Select Language</option>
            <option>Marathi</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>Kannada</option>
          </select>
          <button className="summarize-button">Summarize</button>
          <button className="simplify-button">Simplify Language</button>
        </div>
        <div className="document-preview">
          {/* Document content goes here */}
        </div>
      </div>
    </div>
  );
};

export default TranslatePage;
