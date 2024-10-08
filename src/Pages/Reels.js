import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reels = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // Fetch Reels data here
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Reels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reels.length > 0 ? (
          reels.map((reel, index) => (
            <div key={index} className="bg-black p-4 rounded-lg shadow-md">
              <video src={reel.videoUrl} controls className="w-full h-auto" />
            </div>
          ))
        ) : (
          <p>No reels available.</p>
        )}
      </div>
    </div>
  );
};

export default Reels;
