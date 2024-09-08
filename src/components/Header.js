import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaVideo, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-orange-500">Njogugram</div>
        <div className="hidden md:block w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-orange-500">
            <FaHome size={24} />
          </Link>
          <Link to="/explore" className="text-gray-800 hover:text-orange-500">
            <FaSearch size={24} />
          </Link>
          <Link to="/reels" className="text-gray-800 hover:text-orange-500">
            <FaVideo size={24} />
          </Link>
          <Link to="/profile" className="text-gray-800 hover:text-orange-500">
            <FaUser size={24} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
