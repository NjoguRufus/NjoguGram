import React, { useState } from 'react';
import Header from './components/Header';
import Post from './components/Post';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([
    // Example posts
    { id: 1, title: 'Post 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/400x300' },
    { id: 2, title: 'Post 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/400x300' },
  ]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header onSearch={setSearchQuery} />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Feed</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map(post => (
            <Post
              key={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
