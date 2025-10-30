import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

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
