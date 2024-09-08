import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Post */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Post" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg">Post Title</h2>
            <p className="text-gray-600">This is a short description of the post.</p>
          </div>
        </div>
        {/* Repeat the above block for more posts */}
      </div>
    </div>
  );
};

export default Home;
