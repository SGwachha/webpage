import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/pages/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component=
          {home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
