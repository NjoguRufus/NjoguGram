import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-32 h-32 rounded-full shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4">User Name</h2>
        <p className="text-gray-600">This is a short bio about the user.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example User Post */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Post" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg">Post Title</h2>
          </div>
        </div>
        {/* Repeat the above block for more posts */}
      </div>
    </div>
  );
};

export default Profile;
