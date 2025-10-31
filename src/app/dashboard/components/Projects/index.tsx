import Link from 'next/link';
import ProjectCard from './components/ProjectCard';

const getProjects = () => {
  return [
    {
      name: 'Proyecto A',
      description:
        'Una plataforma de gestión de inventarios para pequeñas y medianas empresas.',
      stack: 'React, Node.js, PostgreSQL.',
    },
    {
      name: 'Proyecto B',
      description:
        'Una aplicación de comercio electrónico con un enfoque en la experiencia del usuario.',
      stack: 'Java Spring Boot, Kafka.',
    },
    {
      name: 'Proyecto C',
      description:
        'Una red social para profesionales con características de gamificación.',
      stack: 'Node.js, Express, MongoDB.',
    },
    {
      name: 'Proyecto D',
      description:
        'Una aplicación de gestión de tareas con colaboración en tiempo real.',
      stack: 'React, Redux, Tailwind CSS.',
    },
  ];
};

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">
          Mis Proyectos Más Recientes
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          Échale un vistazo a las soluciones que he diseñado y construido.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {getProjects().map(({ name, description, stack }) => (
            <ProjectCard
              key={name}
              name={name}
              description={description}
              stack={stack}
            />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-12 inline-block bg-gray-800 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
          Ver Todos los Proyectos &rarr;
        </Link>
      </div>
    </section>
  );
}
