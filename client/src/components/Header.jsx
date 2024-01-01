import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-white font-semibold text-lg">PropertyHub</span>
      </div>
      <div className="text-white text-xl">
        <FaUserCircle />
      </div>
    </header>
  );
};

export default Header;

