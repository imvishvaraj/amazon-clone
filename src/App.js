import React from 'react';
import './App.css';
import Header from './Header';    // importing header from header.js file
import Home from './Home';

function App() {
  return (
    // BEM
    <div className="App">
      {/* <h1>Hello Clever Programmers, let's bulid the Amazon Store!</h1> */}

      {/* Header */}
      <Header />

      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
