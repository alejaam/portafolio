import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'loading', message: 'Enviando mensaje...' });

    try {
      // Aquí iría la lógica para enviar el formulario
      // Por ahora simulamos un envío exitoso
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setFormStatus({
        status: 'success',
        message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.',
      });
      
      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Resetear el mensaje después de 5 segundos
      setTimeout(() => {
        setFormStatus({ status: 'idle', message: '' });
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        status: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      title: 'Correo Electrónico',
      description: 'tu@email.com',
      href: 'mailto:tu@email.com',
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      title: 'Teléfono',
      description: '+1 234 567 890',
      href: 'tel:+1234567890',
    },
    {
      icon: <MapPinIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      title: 'Ubicación',
      description: 'Ciudad, País',
      href: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GithubIcon className="h-6 w-6" />,
      href: 'https://github.com/tu-usuario',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className="h-6 w-6" />,
      href: 'https://linkedin.com/in/tu-perfil',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon className="h-6 w-6" />,
      href: 'https://twitter.com/tu-usuario',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contáctame</h1>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          ¿Tienes un proyecto en mente o alguna pregunta? No dudes en contactarme.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Información de Contacto</h2>
          
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="flex-shrink-0 p-2 bg-primary-50 dark:bg-gray-700 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-gray-600 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíame un Mensaje</h2>
          
          {formStatus.status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
              {formStatus.message}
            </div>
          )}
          
          {formStatus.status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg">
              {formStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Correo Electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Cuéntame más sobre tu proyecto..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={formStatus.status === 'loading'}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors ${
                  formStatus.status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus.status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
