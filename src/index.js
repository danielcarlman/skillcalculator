import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import About from './Views/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={true}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
