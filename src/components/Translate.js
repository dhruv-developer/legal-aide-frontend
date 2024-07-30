import React from 'react';
import './Translate.css';

const Translate = () => {
  return (
    <div className="translate-container">
      <div className="translate-buttons">
        <button>Translate</button>
        <select>
          <option>Select Language</option>
          <option>Marathi</option>
          <option>Telugu</option>
          <option>Hindi</option>
          <option>Kannada</option>
        </select>
        <button>Summarize</button>
        <button>Simplify Language</button>
      </div>
      <div className="document-display">
        <p>Document content will be displayed here.</p>
      </div>
    </div>
  );
};

export default Translate;
