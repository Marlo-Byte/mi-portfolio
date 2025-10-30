'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Download, MapPin, Calendar, Code, Palette, Database, Wrench } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faDatabase, faTools, faPalette, faServer, faCog } from '@fortawesome/free-solid-svg-icons';
import { skills, experience } from '@/lib/data';
import { Skill, Experience } from '@/types';
import { usePageAnimation } from '@/hooks/usePageAnimation';
import { AnimatedSection, AnimatedCard } from '@/components/AnimatedSection';

const AboutPage = () => {
  const { isVisible, mounted, animationKey } = usePageAnimation();

  const skillCategories = {
    frontend: { icon: faPalette, color: 'text-blue-500' },
    backend: { icon: faServer, color: 'text-green-500' },
    tools: { icon: faCog, color: 'text-purple-500' },
    languages: { icon: faCode, color: 'text-orange-500' },
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={`about-page-${animationKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header Section */}
            <section className="section-padding bg-gradient-to-r from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Sobre <span className="gradient-text">Mí</span>
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Conoce más sobre mi trayectoria y pasión por la programación
                  </p>
                </motion.div>
              </div>
            </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-96 h-96 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile/mariano-lopez-about.jpg"
                    alt="Mariano López - Desarrollador Frontend"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    loading="eager"
                    priority
                    quality={90}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faLaptopCode} className="text-white text-5xl" />
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Hola, soy Mariano López
                </h2>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>Salta Capital, Argentina</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Estudiante TECLAB</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Soy un estudiante apasionado de Técnico Superior en Programación en TECLAB,
                  ubicado en la hermosa ciudad de Salta Capital. Mi viaje en el mundo de la
                  programación comenzó con curiosidad y se ha convertido en una verdadera pasión.
                </p>
                <p>
                  Me especializo en el desarrollo full stack, combinando creatividad con
                  funcionalidad para crear experiencias web excepcionales. Disfruto enfrentando
                  nuevos desafíos y aprendiendo tecnologías emergentes que me permitan crear
                  soluciones innovadoras.
                </p>
                <p>
                  En mi tiempo libre me gusta jugar al pádel con amigos, ir al gimnasio y
                  practicar con proyectos personales para seguir aprendiendo y mejorando mis
                  habilidades. Creo firmemente en el aprendizaje continuo y en compartir
                  conocimiento con la comunidad.
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="/documents/cv-mariano-lopez.pdf"
                  download
                  className="btn-primary inline-flex items-center group"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Descargar CV
                </a>
                <a
                  href="/contact"
                  className="btn-secondary inline-flex items-center"
                >
                  Contactar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <AnimatedSection isVisible={isVisible} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades y Tecnologías
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Herramientas y tecnologías que utilizo para crear aplicaciones modernas y escalables.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillCategories).map(([category, config], categoryIndex) => {
              const categorySkills = getSkillsByCategory(category);
              const IconComponent = config.icon;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                  className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <FontAwesomeIcon icon={config.icon} className={`w-6 h-6 ${config.color}`} />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                      {category === 'languages' ? 'Lenguajes' :
                       category === 'frontend' ? 'Frontend' :
                       category === 'backend' ? 'Backend' : 'Herramientas'}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}/5
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection isVisible={isVisible} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experiencia Profesional
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mi trayectoria profesional y los roles que he desempeñado a lo largo de los años.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} index={index} isVisible={isVisible} totalItems={experience.length} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="container-custom text-center">
          <AnimatedSection isVisible={isVisible} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Trabajamos Juntos?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes.
              ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tus ideas!
            </p>
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
            >
              Contactar Ahora
            </a>
          </AnimatedSection>
        </div>
      </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExperienceCard = ({ experience, index, isVisible, totalItems }: { experience: Experience; index: number; isVisible: boolean; totalItems: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      {index < totalItems - 1 && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300 dark:bg-dark-600"></div>
      )}

      <div className="flex items-start space-x-6">
        {/* Timeline Dot */}
        <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">
            {(() => {
              const startYear = experience.period.split(' - ')[0];
              // Extraer el año (últimos 4 dígitos encontrados)
              const yearMatch = startYear.match(/\d{4}/);
              return yearMatch ? yearMatch[0].slice(-2) : startYear.slice(-2);
            })()}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-primary-600 dark:text-primary-400 font-medium">
                {experience.company}
              </span>
              {experience.current && (
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                  Actual
                </span>
              )}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            {experience.period}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
