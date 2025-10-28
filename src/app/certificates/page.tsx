'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Download, Filter, Search, Award, GraduationCap, BookOpen, Certificate } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate, faBookOpen, faAward } from '@fortawesome/free-solid-svg-icons';
import { certificates } from '@/lib/certificates';
import { Certificate as CertificateType } from '@/lib/certificates';

const CertificatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todos', icon: faAward },
    { id: 'academic', name: 'Académicos', icon: faGraduationCap },
    { id: 'professional', name: 'Profesionales', icon: faCertificate },
    { id: 'course', name: 'Cursos', icon: faBookOpen },
    { id: 'certification', name: 'Certificaciones', icon: faCertificate },
  ];

  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return faGraduationCap;
      case 'professional':
      case 'certification':
        return faCertificate;
      case 'course':
        return faBookOpen;
      default:
        return faAward;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
      case 'professional':
        return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'certification':
        return 'text-purple-600 bg-purple-100 dark:bg-purple-900/30';
      case 'course':
        return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic':
        return 'Académico';
      case 'professional':
        return 'Profesional';
      case 'certification':
        return 'Certificación';
      case 'course':
        return 'Curso';
      default:
        return 'Otro';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="gradient-text">Certificados</span> y Títulos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Mi formación académica, certificaciones profesionales y cursos especializados
              que respaldan mi experiencia en desarrollo frontend.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar certificados..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                  }`}
                >
                  <FontAwesomeIcon icon={category.icon} className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredCertificates.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No se encontraron certificados
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intenta ajustar los filtros o términos de búsqueda.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertificates.map((certificate, index) => (
                <CertificateCard key={certificate.id} certificate={certificate} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const CertificateCard = ({ certificate, index }: { certificate: CertificateType; index: number }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return faGraduationCap;
      case 'professional':
      case 'certification':
        return faCertificate;
      case 'course':
        return faBookOpen;
      default:
        return faAward;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
      case 'professional':
        return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'certification':
        return 'text-purple-600 bg-purple-100 dark:bg-purple-900/30';
      case 'course':
        return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic':
        return 'Académico';
      case 'professional':
        return 'Profesional';
      case 'certification':
        return 'Certificación';
      case 'course':
        return 'Curso';
      default:
        return 'Otro';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group cursor-pointer overflow-hidden"
    >
      {/* Certificate Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900">
        {certificate.image ? (
          <Image
            src={certificate.image}
            alt={certificate.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <FontAwesomeIcon
              icon={getCategoryIcon(certificate.category)}
              className="text-6xl text-primary-600 dark:text-primary-400 opacity-50"
            />
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(certificate.category)}`}>
            {getCategoryLabel(certificate.category)}
          </span>
        </div>

        {/* Institution Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-dark-800/90 text-gray-900 dark:text-white text-sm font-medium rounded-full">
            {certificate.institution}
          </span>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {certificate.title}
        </h3>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Institución:</strong> {certificate.institution}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Fecha:</strong> {certificate.date}
          </p>
          {certificate.credentialId && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>ID:</strong> {certificate.credentialId}
            </p>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {certificate.description}
        </p>

        {/* Action Links */}
        <div className="flex space-x-4">
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm flex items-center group/link"
            >
              Verificar
              <ExternalLink className="ml-1 w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-300" />
            </a>
          )}
          {certificate.image && (
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium text-sm flex items-center group/link"
            >
              Ver Certificado
              <Download className="ml-1 w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-300" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificatesPage;
