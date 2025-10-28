'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/marianolopez',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mariano-lopez',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/marianolopez',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:mariano.lopez@example.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Certificados', href: '/certificates' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold gradient-text">Mariano</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Desarrollador frontend apasionado por crear experiencias digitales
              excepcionales y soluciones innovadoras.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-dark-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contacto
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4 inline mr-2" />
                mariano.lopez@example.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Disponible para proyectos freelance
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Mariano López. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 text-sm">
              <span>Hecho con</span>
              <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-red-500" />
              <span>y Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
