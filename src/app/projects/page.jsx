// app/projects/page.tsx

import ProjectCard from './components/ProjectCard'; // Importar el componente creado
import { FaServer } from 'react-icons/fa'; // Para destacar el título

const getProjects = async () => {
  // Simulación con más datos para ver el layout
  const mockData = [
    {
      id: '1',
      title: 'E-Commerce API',
      shortDescription:
        'Diseño e implementación de una API RESTful escalable con autenticación basada en JWT.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      role: 'Back-End',
      imageCover: '/img/p1.jpg',
      linkLive: '#',
      linkRepo: '#',
    },
    {
      id: '2',
      title: 'Plataforma de Gestión',
      shortDescription:
        'Aplicación Full-Stack para el seguimiento de tareas con una UI moderna.',
      technologies: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS'],
      role: 'Full-Stack',
      imageCover: '/img/p2.jpg',
      linkLive: '#',
      linkRepo: '#',
    },
    {
      id: '3',
      title: 'Landing Page Animada',
      shortDescription:
        'Página de marketing con altas tasas de conversión y animaciones CSS optimizadas.',
      technologies: ['React', 'TypeScript', 'Framer Motion'],
      role: 'Front-End',
      imageCover: '/img/p3.jpg',
      linkLive: '#',
      linkRepo: '#',
    },
  ];
  return mockData;
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    // Estilos de fondo y padding consistentes con el layout principal y dark mode
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-50">
          <FaServer
            className="inline-block mr-3 text-blue-600 dark:text-blue-400"
            size={32}
          />
          Portafolio de Proyectos
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Destacando sistemas escalables y eficientes. Mira el detalle de mi rol
          en el **Back-End** de cada proyecto.
        </p>

        {/* Lista de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
