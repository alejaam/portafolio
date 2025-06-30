import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../ui/Icons';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hola, soy <span className="text-primary-600 dark:text-primary-400">Tu Nombre</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales.
            Especializado en tecnologías modernas y soluciones escalables.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/proyectos"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Ver mis proyectos
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 dark:text-primary-100 dark:bg-primary-800 dark:hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Contáctame
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tecnologías con las que trabajo</p>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              {[
                'React', 'TypeScript', 'Node.js', 'Golang', 
                'MongoDB', 'Docker', 'AWS', 'GraphQL'
              ].map((tech, index) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
