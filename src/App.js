import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages.js/Home';
import Explore from './Pages.js/Explore';
import Reels from './components/Reels';
import Profile from './Pages.js/Profile';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/reels" component={Reels} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
