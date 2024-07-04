import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2  bg-transparent border-white h-12 w-12  text-gray-800 dark:text-gray-200"
    >
      {isDarkMode ? <img src="sun.svg" alt="" /> : <img src="moon.svg" alt="" />}
    </button>
  );
};

export default DarkModeToggle;
