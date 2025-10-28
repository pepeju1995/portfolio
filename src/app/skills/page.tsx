import { SkillCategoryComponent } from './components/SkillCategory';

interface Skill {
  name: string;
  level: number; // Nivel de habilidad del 1 al 5
  category: string; // Categoría de la habilidad
}

const allSkills: Skill[] = [
  // Back-End
  { name: 'Node.js', level: 5, category: 'Back-End' },
  { name: 'Python (Django/Flask)', level: 4, category: 'Back-End' },
  // Front-End
  { name: 'React/Next.js', level: 5, category: 'Front-End' },
  { name: 'Tailwind CSS', level: 4, category: 'Front-End' },
  // Databases
  { name: 'PostgreSQL', level: 4, category: 'Databases' },
  { name: 'MongoDB', level: 3, category: 'Databases' },
];

const getGroupedSkills = (skills: Skill[]): Record<string, Skill[]> => {
  return skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};

export default function SkillsPage() {
  const groupedSkills = getGroupedSkills(allSkills);

  return (
    // Fondo y padding acorde al layout principal, con dark mode
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Título principal con estilos dark: */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-50">
          Mi Stack Tecnológico
        </h1>

        {/* Contenedor de categorías */}
        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <SkillCategoryComponent
              key={category}
              category={category}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
