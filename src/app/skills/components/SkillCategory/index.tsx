// components/skills/SkillCategoryComponent.tsx
// Puedes separar esto en un archivo propio o mantenerlo dentro de SkillsPage

interface Skill {
  name: string;
  level: number; // Nivel de habilidad del 1 al 5
  category: string; // Categoría de la habilidad
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

export function SkillCategoryComponent({
  category,
  skills,
}: SkillCategoryProps) {
  // Define un color de acento basado en la categoría
  let accentColor = 'border-blue-600 dark:border-blue-400';
  if (category === 'Front-End') {
    accentColor = 'border-green-600 dark:border-green-400';
  } else if (category === 'Databases') {
    accentColor = 'border-yellow-500 dark:border-yellow-300';
  }

  return (
    // Tarjeta con sombra y borde lateral para imitar el diseño de la home
    <div
      className={`p-6 border-l-4 ${accentColor} shadow-md bg-white dark:bg-gray-800 rounded-lg transition-colors`}
    >
      {/* Título de la Categoría */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        {category}
      </h2>

      <ul className="space-y-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2"
          >
            {/* Nombre de la Habilidad */}
            <span className="w-full sm:w-1/2 font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>

            {/* Indicador de Nivel (Estrellas) */}
            <span className="text-lg mt-1 sm:mt-0">
              {/* Estrellas rellenas (Color de acento) */}
              <span className="text-yellow-500 dark:text-yellow-400">
                {'★'.repeat(skill.level)}
              </span>
              {/* Estrellas vacías (Color neutro) */}
              <span className="text-gray-300 dark:text-gray-600">
                {'☆'.repeat(5 - skill.level)}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
