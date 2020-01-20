import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RouterApp from './router';
import './assets/scss/stylesheet.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <RouterApp />
      </Router>
    </div>
  );
}

export default App;
