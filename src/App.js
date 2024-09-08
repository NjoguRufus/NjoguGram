import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home'; // Note the capital 'P'
import Explore from './Pages/Explore'; // Note the capital 'P'
import Reels from './Pages/Reels'; // Note the capital 'P'
import Profile from './Pages/Profile'; // Note the capital 'P'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
