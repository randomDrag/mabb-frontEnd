import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar';

import Home from '../page/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
