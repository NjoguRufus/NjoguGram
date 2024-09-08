import React from 'react';

const Explore = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Explore</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Example Explore Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/200x200" alt="Explore" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg">Trending Post</h2>
          </div>
        </div>
        {/* Repeat the above block for more explore cards */}
      </div>
    </div>
  );
};

export default Explore;
