'use client'
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shadow-md text-white py-4">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Gestionnaire de Tâches</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
