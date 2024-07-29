// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TranslatePage from './components/TranslatePage';
import SignInPage from './components/SignInPage';
import './App.css';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/translate" component={TranslatePage} />
        <Route path="/sign-in" component={SignInPage} />
      </Routes>
    </Router>
  );
};

export default App;
