import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RouterApp from './router';
import './assets/scss/stylesheet.scss';
// components
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <RouterApp />
      </Router>
    </div>
  );
}

export default App;

