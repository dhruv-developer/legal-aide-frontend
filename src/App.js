import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import QueryPage from './components/QueryPage';
import Translate from './components/Translate';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
            <div>
              <Welcome />
              <Translate />
            </div>
        } />
        <Route path="/query-page" element={<QueryPage />} /> {/* Route for QueryPage */}
      </Routes>
    </Router>
  );
};

export default App;
