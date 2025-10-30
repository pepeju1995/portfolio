'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? 'light' : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full transition-colors focus:outline-none"
      title={`Cambiar a modo ${currentTheme === 'dark' ? 'Claro' : 'Oscuro'}`}
    >
      {currentTheme === 'dark'
        ? IoSunnyOutline({
            size: 20,
            className: 'text-yellow-400 hover:text-yellow-500',
          })
        : IoMoonOutline({
            size: 20,
            className: 'text-gray-700 hover:text-gray-900',
          })}
    </button>
  );
}
