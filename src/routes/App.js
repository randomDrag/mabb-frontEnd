import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Infinity from '../page/Infinty.home';
import Home from '../page/Home';
import Social from '../page/social';
import Sitemap from '../components/sitemap';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/infinity' component={Infinity} />
        <Route path='/social' component={Social} />
      </Switch>
      <footer>
        <Sitemap />
      </footer>
    </Router>
  );
}

export default App;
