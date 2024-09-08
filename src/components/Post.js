import React, { useState } from 'react';

const Post = ({ imageUrl, title, description }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <button className="mt-2 text-orange-500" onClick={handleLike}>
          Like {likes}
        </button>
      </div>
    </div>
  );
};

export default Post;
