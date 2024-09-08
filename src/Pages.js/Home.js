// src/pages/Home.js
import React from 'react';
import Reels from '../components/Reels';

const Home = () => {
  return (
    <div className="pt-20">
      <h2 className="text-center text-3xl font-bold mb-6">Welcome to Njogugram</h2>
      <Reels />
    </div>
  );
};

export default Home;
