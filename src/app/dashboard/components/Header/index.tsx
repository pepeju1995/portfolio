import Link from 'next/link';

export default function Header() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-gray-800 shadow-xl transition-colors">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 text-gray-900 dark:text-gray-50">
        Hola, soy{' '}
        <span className="text-blue-700 dark:text-blue-400">Jose Juan</span>
      </h1>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
        Desarrollador Full-Stack |{' '}
        <span className="font-bold border-b-2 border-blue-500 dark:border-blue-400">
          Arquitectura de Back-End
        </span>
      </h2>

      <div className="max-w-3xl mx-auto text-left space-y-4">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Soy un{' '}
          <strong>
            Full-stack Software Engineer con 4 años de experiencia
          </strong>
          , cuya trayectoria se define por la <strong>versatilidad</strong> y
          una capacidad de <strong>adaptación acelerada</strong>. Mi mayor
          distintivo es haber desarrollado con éxito{' '}
          <strong>soluciones funcionales completas</strong> a través de stacks
          desconocidos, bajo *deadlines* exigentes y sin sacrificar la calidad.
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Mi base sólida en <strong>PHP</strong> me ha permitido una{' '}
          <strong>evolución profesional profunda</strong> en arquitecturas
          modernas como <strong>React, NextJs y NestJs</strong>, además de la
          implementación de <strong>OpenSearch</strong> para la gestión de
          documentos.
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Mi habilidad para dominar y aplicar{' '}
          <strong>nuevas tecnologías rápidamente</strong> me permite generar
          entregables de <strong>alto impacto y valor para el negocio</strong>.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
        <Link
          href="/projects"
          className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition transform hover:scale-105 shadow-lg w-full sm:w-auto"
        >
          Ver Proyectos Backend
        </Link>
        <Link
          href="/contact"
          className="bg-gray-200 text-gray-800 py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition border border-gray-300 dark:border-gray-600 w-full sm:w-auto"
        >
          Contáctame
        </Link>
      </div>
    </section>
  );
}
