'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';
import { ThemeSwitcher } from '../ThemeSwitch';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Habilidades', href: '/skills' },
    { name: 'Contacto', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
      <Link
        href="/"
        className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition z-20"
      >
        Jose Juan Pérez González
      </Link>

      <div className="flex items-center space-x-2 lg:hidden z-20">
        <ThemeSwitcher />
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          aria-label="Toggle Navigation"
        >
          {isOpen ? IoClose({ size: 28 }) : IoMenu({ size: 28 })}
        </button>
      </div>

      <div className="hidden lg:flex space-x-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <ThemeSwitcher />
      </div>

      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl 
          flex flex-col items-center justify-center space-y-8 
          transition-transform duration-300 ease-in-out z-10 
          ${
            isOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0 pointer-events-none lg:hidden'
          }
          lg:hidden
      `}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={toggleMenu}
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition w-full text-center py-4"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
