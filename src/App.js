import React from 'react';
import logo from './logo.svg';
import './App.css';

import Question from './components/Question.js';


function App() {
  return (
    <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React Quiz</h2>
    </div>
    <Question content="What is your favourite food?" />
  </div>
  );
}

export default App;
