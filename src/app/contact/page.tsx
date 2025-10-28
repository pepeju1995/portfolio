import ContactForm from './components/ContactForm';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import { GITHUB_URL, LINKEDIN_URL } from '../components/Footer';

const ContactInfo = () => (
  <div className="p-6 bg-blue-600 dark:bg-gray-900 text-white rounded-lg shadow-xl h-full flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
    <p className="mb-8 text-blue-100 dark:text-gray-300">
      ¿Tienes un proyecto en mente o una propuesta interesante? ¡Hablemos!
    </p>

    <div className="space-y-4 text-blue-100 dark:text-gray-300">
      <div className="flex items-center">
        {FaEnvelope({ className: 'mr-3 text-xl' })}
        <p>tu.correo.profesional@ejemplo.com</p>
      </div>
      <div className="flex items-center">
        {FaPhone({ className: 'mr-3 text-xl' })}
        <p>+34 123 45 67 89</p>
      </div>
      <div className="flex items-center">
        {FaMapMarkerAlt({ className: 'mr-3 text-xl' })}
        <p>Madrid, España (Disponible Remoto)</p>
      </div>
    </div>

    <div className="mt-8 flex space-x-6">
      <Link
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-white dark:hover:text-blue-400 transition"
      >
        {FaLinkedin({ size: 28 })}
      </Link>
      <Link
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-white dark:hover:text-blue-400 transition"
      >
        {FaGithub({ size: 28 })}
      </Link>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-50">
          Ponte en Contacto
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl transition-colors">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Envíame un mensaje
            </h2>
            <ContactForm />
          </div>

          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
