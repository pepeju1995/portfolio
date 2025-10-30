interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
}

export function SkillCard({ category, skills }: SkillCardProps) {
  let accentColor = 'border-blue-600 dark:border-blue-400';
  if (category === 'Front-End') {
    accentColor = 'border-green-600 dark:border-green-400';
  } else if (category === 'Databases') {
    accentColor = 'border-yellow-500 dark:border-yellow-300';
  }

  return (
    <div
      className={`p-6 border-l-4 ${accentColor} shadow-md bg-white dark:bg-gray-800 rounded-lg transition-colors`}
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        {category}
      </h2>

      <ul className="space-y-4">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2"
          >
            <span className="w-full sm:w-1/2 font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>

            <span className="text-lg mt-1 sm:mt-0">
              <span className="text-yellow-500 dark:text-yellow-400">
                {'★'.repeat(skill.level)}
              </span>
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
