// components/projects/ProjectCard.tsx

import Link from 'next/link';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'; // Para iconos de enlace

export default function ProjectCard({ project }) {
  // Define el color de acento basado en el rol principal
  const accentClass =
    project.role === 'Back-End'
      ? 'border-blue-600 dark:border-blue-400'
      : 'border-green-600 dark:border-green-400';

  return (
    // Tarjeta con hover y transición
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-xl 
        hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 
        overflow-hidden border-t-4 ${accentClass}
      `}
    >
      {/* 🖼️ Imagen del Proyecto (Placeholder) */}
      <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {/* Usarías un componente <Image> de Next.js aquí para optimización */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          [Image Placeholder: {project.title}]
        </p>
      </div>

      <div className="p-6">
        {/* Título y Rol Principal */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">
          {project.title}
        </h3>
        <p
          className={`text-xs font-semibold uppercase mb-3 ${
            project.role === 'Back-End'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-green-600 dark:text-green-400'
          }`}
        >
          {project.role}
        </p>

        {/* Descripción */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
          {project.shortDescription}
        </p>

        {/* Stack Tecnológico */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces de Acción */}
        <div className="flex space-x-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          <Link
            href={project.linkLive}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition text-sm font-medium"
          >
            <FaExternalLinkAlt className="mr-1" /> En Vivo
          </Link>
          <Link
            href={project.linkRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition text-sm font-medium"
          >
            <FaCode className="mr-1" /> Código
          </Link>
        </div>
      </div>
    </div>
  );
}
