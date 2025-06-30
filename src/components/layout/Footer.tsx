import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from '../ui/Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/tu-usuario',
      icon: <GithubIcon className="h-5 w-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/tu-perfil',
      icon: <LinkedinIcon className="h-5 w-5" />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/tu-usuario',
      icon: <TwitterIcon className="h-5 w-5" />,
    },
    {
      name: 'Email',
      href: 'mailto:tu@email.com',
      icon: <MailIcon className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Sobre mí
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Desarrollador apasionado por crear soluciones digitales innovadoras y de alto impacto.
              Especializado en desarrollo web y móvil con enfoque en la experiencia del usuario.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre-mi" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link 
                  to="/proyectos" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Conéctate
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ¿Tienes un proyecto en mente? Hablemos.
              </p>
              <a
                href="mailto:tu@email.com"
                className="inline-block mt-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                tu@email.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Mi Portafolio. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link 
              to="/privacidad" 
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              Política de privacidad
            </Link>
            <Link 
              to="/terminos" 
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              Términos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
