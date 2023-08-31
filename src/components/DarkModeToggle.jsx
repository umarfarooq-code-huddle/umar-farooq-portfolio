import React from 'react';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      className="absolute top-4 right-4 px-4 py-2 text-white rounded-lg bg-gray-800"
      onClick={onToggle}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
