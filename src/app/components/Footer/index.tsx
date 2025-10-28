import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 py-8 mt-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="[Tu GitHub]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            {FaGithub({ size: 24 })}
          </a>
          <a
            href="[Tu LinkedIn]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-700 transition"
          >
            {FaLinkedin({ size: 24 })}
          </a>
          <a
            href="mailto:[Tu Email]"
            aria-label="Correo Electrónico"
            className="text-gray-500 dark:text-gray-400 hover:text-red-600 transition"
          >
            {FaEnvelope({ size: 24 })}
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Desarrollado con Next.js y amor | &copy; {currentYear} Jose Juan Pérez
          González.
        </p>
      </div>
    </div>
  );
};
