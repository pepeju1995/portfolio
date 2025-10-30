import Link from 'next/link';

export default function Header() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-gray-800 shadow-xl transition-colors">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-gray-50">
          Hola, soy{' '}
          <span className="text-blue-700 dark:text-blue-400">Tu Nombre</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          Desarrollador Full-Stack |{' '}
          <span className="font-bold border-b-2 border-blue-500 dark:border-blue-400">
            Arquitectura de Back-End
          </span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Soy un Full-stack Software Engineer con 4 años de experiencia, cuya
          trayectoria se define por la versatilidad y una capacidad de
          adaptación acelerada. Mi mayor distintivo es haber desarrollado con
          éxito soluciones funcionales completas a través de stacks
          desconocidos, bajo deadlines exigentes y sin sacrificar la calidad. Mi
          base sólida en PHP me ha permitido una evolución profesional profunda
          en arquitecturas modernas como React, NextJs y NestJs, además de la
          implementación de OpenSearch para la gestión de documentos. Mi
          habilidad para dominar y aplicar nuevas tecnologías rápidamente me
          permite generar entregables de alto impacto y valor para el negocio.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
          >
            Ver Proyectos Backend
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 text-gray-800 py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition border border-gray-300 dark:border-gray-600"
          >
            Contáctame
          </Link>
        </div>
      </div>
    </section>
  );
}
