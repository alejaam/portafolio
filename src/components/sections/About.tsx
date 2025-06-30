import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../ui/Icons';

const About = () => {
  const skills = [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Golang', 'Python', 'RESTful APIs'] },
    { name: 'Bases de Datos', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { name: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git'] },
  ];

  const experience = [
    {
      role: 'Desarrollador Full Stack',
      company: 'Empresa Actual',
      period: '2022 - Presente',
      description: 'Desarrollo y mantenimiento de aplicaciones web con React y Node.js. Implementación de nuevas características y optimización del rendimiento.'
    },
    {
      role: 'Desarrollador Frontend',
      company: 'Empresa Anterior',
      period: '2020 - 2022',
      description: 'Creación de interfaces de usuario responsivas y accesibles. Colaboración con equipos de diseño para implementar diseños pixel-perfect.'
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sobre Mí</h1>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Desarrollador apasionado por crear soluciones tecnológicas innovadoras que impacten positivamente en la vida de las personas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mi Historia</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Hola, soy [Tu Nombre]. Comencé mi viaje en el desarrollo de software hace [X] años, y desde entonces he tenido el privilegio de trabajar en una variedad de proyectos desafiantes.
            </p>
            <p>
              Mi pasión por la tecnología me ha llevado a explorar diferentes áreas del desarrollo, desde el frontend hasta la infraestructura en la nube. Me encanta aprender nuevas tecnologías y compartir mi conocimiento con la comunidad.
            </p>
            <p>
              Cuando no estoy programando, disfruto [tus intereses/hobbies], lo que me ayuda a mantener un equilibrio saludable entre el trabajo y la vida personal.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experiencia</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company} • {exp.period}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Habilidades</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{skill.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Educación</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Ingeniería en Sistemas</h4>
                  <p className="text-gray-600 dark:text-gray-400">Universidad Ejemplo • 2016 - 2020</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Certificación en Desarrollo Web</h4>
                  <p className="text-gray-600 dark:text-gray-400">Plataforma de Cursos • 2021</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/proyectos"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
              >
                Ver mis proyectos
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
