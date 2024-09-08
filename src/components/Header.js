// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Njogugram</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link to="/explore" className="text-gray-700 hover:text-black">Explore</Link>
          <Link to="/profile" className="text-gray-700 hover:text-black">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
