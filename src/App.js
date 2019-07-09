import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <object
          type="text/html"
          data="/.netlify/functions/server"
          style={ { 'width': '100%', 'height': '100%' } }
        >  
        </object>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
