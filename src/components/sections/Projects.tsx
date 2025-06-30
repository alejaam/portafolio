import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from '../ui/Icons';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  featured?: boolean;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  // Datos de ejemplo - reemplaza con tus proyectos reales
  const projects: Project[] = [
    {
      id: 1,
      title: 'Plataforma de E-learning',
      description: 'Una plataforma de aprendizaje en línea con cursos interactivos, seguimiento de progreso y sistema de certificados.',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=E-learning',
      demoUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Sistema de Gestión de Tareas',
      description: 'Aplicación para gestionar tareas personales con recordatorios, categorías y colaboración en equipo.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Task+Manager',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Marketplace Local',
      description: 'Plataforma para que pequeños comerciantes puedan vender sus productos en línea con sistema de pagos integrado.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Marketplace',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Aplicación de Notas',
      description: 'Aplicación para tomar notas con soporte markdown, etiquetas y búsqueda avanzada.',
      tags: ['React', 'TypeScript', 'IndexedDB'],
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Notes+App',
      demoUrl: '#',
      codeUrl: '#'
    },
  ];

  // Obtener todas las etiquetas únicas
  const allTags = ['Todos', ...new Set(projects.flatMap(project => project.tags))];

  // Filtrar proyectos según la etiqueta seleccionada
  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mis Proyectos</h1>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Una selección de mis proyectos más recientes y destacados.
        </p>
      </motion.div>

      {/* Filtros */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === tag
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Proyectos destacados */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Destacados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter(project => project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
        </div>
      </div>

      {/* Todos los proyectos */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          {activeFilter === 'Todos' ? 'Todos los Proyectos' : `Filtrado por: ${activeFilter}`}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter(project => !project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-xl shadow-lg ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary-600/80 text-white text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Ver Demo
            <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            <GithubIcon className="h-5 w-5 mr-2" />
            Código
          </a>
        </div>
      </div>
      
      <div className="p-6 bg-white dark:bg-gray-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
