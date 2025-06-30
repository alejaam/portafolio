import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Contexto y rutas
import { ThemeProvider } from '@context/ThemeContext';
import { ROUTES } from '@config/routes';

// Componentes de diseño
import Navbar from '@layout/Navbar';
import Footer from '@layout/Footer';

// Secciones
import Home from '@sections/Home';
import About from '@sections/About';
import Projects from '@sections/Projects';
import Contact from '@sections/Contact';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse text-2xl font-semibold text-primary-600 dark:text-primary-400">
          Cargando...
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.PROJECTS} element={<Projects />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
