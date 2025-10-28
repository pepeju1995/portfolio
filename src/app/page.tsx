import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* --- 1. SECCIÓN HERO (INTRODUCCIÓN) --- */}
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
            Me especializo en la construcción de **sistemas robustos, escalables
            y eficientes** usando [Tu Lenguaje Principal]. Mi experiencia me
            permite diseñar APIs RESTful, optimizar bases de datos y garantizar
            la integridad de los datos.
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

      {/* --- 2. SECCIÓN DE TECNOLOGÍAS CLAVE --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
            Tecnologías Clave y Stack Principal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Bloque 1: Back-End */}
            <div className="p-6 border-l-4 border-blue-600 shadow-md bg-white dark:bg-gray-800 rounded-lg transition-colors">
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Back-End & Lógica
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 font-medium space-y-2">
                <li>
                  <strong className="text-blue-600 dark:text-blue-400">
                    [Python/Node.js]
                  </strong>{' '}
                  & Frameworks
                </li>
                <li>
                  Diseño de{' '}
                  <strong className="text-blue-600 dark:text-blue-400">
                    APIs RESTful y GraphQL
                  </strong>
                </li>
                <li>Microservicios & Patrones de Arquitectura</li>
              </ul>
            </div>

            {/* Bloque 2: Bases de Datos & DevOps */}
            <div className="p-6 border-l-4 border-yellow-500 shadow-md bg-white dark:bg-gray-800 rounded-lg transition-colors">
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Datos & Infraestructura
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 font-medium space-y-2">
                <li>
                  <strong className="text-yellow-600 dark:text-yellow-400">
                    SQL/NoSQL
                  </strong>{' '}
                  (PostgreSQL, MongoDB)
                </li>
                <li>
                  Contenerización con{' '}
                  <strong className="text-yellow-600 dark:text-yellow-400">
                    Docker
                  </strong>{' '}
                  y Kubernetes
                </li>
                <li>Servicios Cloud (AWS, Azure o GCP)</li>
              </ul>
            </div>

            {/* Bloque 3: Front-End */}
            <div className="p-6 border-l-4 border-green-600 shadow-md bg-white dark:bg-gray-800 rounded-lg transition-colors">
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Front-End & UI
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 font-medium space-y-2">
                <li>
                  <strong className="text-green-600 dark:text-green-400">
                    React/Next.js
                  </strong>{' '}
                  (para proyectos Full-Stack)
                </li>
                <li>HTML5 & CSS3/Tailwind CSS</li>
                <li>Manejo de estados y consumo de APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SECCIÓN DESTACADA DE PROYECTOS --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">
            Mis Proyectos Más Recientes
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Échale un vistazo a las soluciones que he diseñado y construido.
          </p>

          {/* Placeholder de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <h4 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">
                Proyecto A
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                **Foco:** Java Spring Boot, Kafka.
              </p>
            </div>
            {/* ... más proyectos ... */}
          </div>

          <Link
            href="/projects"
            className="mt-12 inline-block bg-gray-800 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            Ver Todos los Proyectos &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
