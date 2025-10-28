'use client';

import React, { useState } from 'react';

interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface IApiResponse {
  success: boolean;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<IContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string | null } = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido.';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'El email no es válido.';
    if (!formData.subject) newErrors.subject = 'El asunto es requerido.';
    if (formData.message.length < 10)
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: IApiResponse = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          disabled={status === 'loading'}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
          disabled={status === 'loading'}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={inputClass}
          disabled={status === 'loading'}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 px-4 rounded-lg text-lg font-medium transition duration-150 ease-in-out 
                   bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 
                   disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {status === 'success' && (
        <p className="text-center text-green-500">
          ¡Mensaje enviado con éxito! Te responderé pronto.
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-500">
          Hubo un error. Por favor, intenta enviando un correo directo.
        </p>
      )}
    </form>
  );
}
