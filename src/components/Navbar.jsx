import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // install with: npm install react-scroll

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="p-6 bg-gray-800 text-center shadow-md flex flex-col sm:flex-row justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-white">Idrees M</h1>
        <p className="text-gray-300 mt-1">Final Year B.Tech CSBS | Web Developer</p>
      </div>

      <nav className="flex gap-4 mt-4 sm:mt-0">
        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-white transition duration-200 cursor-pointer text-sm sm:text-base"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700 mt-4 sm:mt-0 sm:ml-4"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}

export default Navbar;
