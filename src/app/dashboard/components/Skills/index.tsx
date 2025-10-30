import { title } from 'process';
import SkillCard from './components/SkillCard';

const getSkills = () => {
  return [
    {
      title: 'Back-End & Lógica',
      skills: [
        '[Python/Node.js] & Frameworks',
        'Diseño de APIs RESTful y GraphQL',
        'Microservicios & Patrones de Arquitectura',
      ],
    },
    {
      title: 'Datos & Infraestructura',
      skills: [
        'SQL/NoSQL (PostgreSQL, MongoDB)',
        'Contenerización con Docker y Kubernetes',
        'Servicios Cloud (AWS, Azure o GCP)',
      ],
    },
    {
      title: 'Front-End & UI',
      skills: [
        'React/Next.js (para proyectos Full-Stack)',
        'HTML5 & CSS3/Tailwind CSS',
        'Manejo de estados y consumo de APIs',
      ],
    },
  ];
};

export default function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
          Tecnologías Clave y Stack Principal
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {getSkills().map(({ title, skills }) => (
            <div key={title}>
              <SkillCard title={title} skills={skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
