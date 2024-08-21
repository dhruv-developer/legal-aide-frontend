import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/docai">Doc.AI</a>
        <a href="/available-documents">Available Documents</a>
        <a href="/query-page">Query Page</a> {/* Added link to QueryPage */}
      </nav>
      <button>Logout</button>
    </header>
  );
};

export default Header;
