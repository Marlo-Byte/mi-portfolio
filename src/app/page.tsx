'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faDatabase, faMobile, faGlobe, faTools } from '@fortawesome/free-solid-svg-icons';
import { projects } from '@/lib/data';
import { certificates } from '@/lib/certificates';
import { StarsInteractive } from '@/components/animate-ui/components/backgrounds/stars';
import ErrorBoundary from '@/components/ErrorBoundary';

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  
  useEffect(() => {
    setMounted(true);
    
    // Forzar recarga cuando se navega de vuelta al home
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setRefreshKey(prev => prev + 1);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const featuredCertificates = certificates.slice(0, 3);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen" key="home-page">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 overflow-hidden">
        {/* Stars Background */}
        <div className="absolute inset-0 z-0">
          <StarsInteractive />
        </div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary-50/80 via-white/60 to-purple-50/80 dark:from-dark-900/80 dark:via-dark-800/60 dark:to-dark-900/80 pointer-events-none"></div>

        <div className="container-custom relative z-20 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
                >
                  Hola, soy{' '}
                  <span className="gradient-text">Mariano López</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
                >
                  Desarrollador Frontend
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
                >
                  Especializado en React, Next.js y TypeScript. Creo experiencias
                  digitales excepcionales que combinan diseño elegante con funcionalidad robusta.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
              >
                <Link
                  href="/projects"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Contactar
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center space-x-4 pointer-events-auto"
              >
                <a
                  href="https://github.com/marianolopez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="https://linkedin.com/in/mariano-lopez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="mailto:mariano.lopez@example.com"
                  className="p-3 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </a>
                <a
                  href="/documents/cv-mariano-lopez.pdf"
                  download
                  className="p-3 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="Descargar CV"
                >
                  <Download className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile/mariano-lopez.jpg"
                    alt="Mariano López - Desarrollador Frontend"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                    quality={90}
                    unoptimized={false}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faCode} className="text-white text-3xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Algunos de mis trabajos más recientes que demuestran mi experiencia
              en desarrollo frontend y diseño de interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={`projects-${refreshKey}`}>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`project-${project.id}-${index}-${refreshKey}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    quality={85}
                    unoptimized={false}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                      >
                        Ver Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium text-sm"
                      >
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center group"
            >
              Ver Todos los Proyectos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tecnologías que Manejo
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Herramientas y tecnologías que utilizo para crear aplicaciones modernas y escalables.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: faLaptopCode },
              { name: 'Next.js', icon: faGlobe },
              { name: 'TypeScript', icon: faCode },
              { name: 'Tailwind CSS', icon: faTools },
              { name: 'Node.js', icon: faDatabase },
              { name: 'MongoDB', icon: faDatabase }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-700 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center space-y-3">
                  <FontAwesomeIcon
                    icon={tech.icon}
                    className="text-3xl text-primary-600 dark:text-primary-400"
                  />
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/about"
              className="btn-secondary inline-flex items-center group"
            >
              Conocer Más Sobre Mí
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Certificates */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certificaciones y Títulos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mi formación académica y certificaciones profesionales que respaldan mi experiencia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={`certificates-${refreshKey}`}>
            {featuredCertificates.map((certificate, index) => (
              <motion.div
                key={`certificate-${certificate.id}-${index}-${refreshKey}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <FontAwesomeIcon
                        icon={certificate.category === 'academic' ? faLaptopCode : faCode}
                        className="w-6 h-6 text-primary-600 dark:text-primary-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {certificate.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {certificate.institution}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {certificate.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {certificate.date}
                    </span>
                    {certificate.credentialUrl && (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                      >
                        Verificar →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/certificates"
              className="btn-primary inline-flex items-center group"
            >
              Ver Todos los Certificados
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;
