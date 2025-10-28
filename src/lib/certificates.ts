export interface Certificate {
  id: string;
  title: string;
  institution: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  category: 'academic' | 'professional' | 'course' | 'certification';
  image?: string;
}

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Técnico Superior en Programación',
    institution: 'TECLAB',
    date: '2024-2025 - Presente',
    description: 'Formación integral en desarrollo de software, bases de datos, y metodologías ágiles.',
    category: 'academic',
    image: '/images/certificates/placeholder.txt'
  },
  {
    id: '2',
    title: 'Actualización Profesional en Inteligencia Artificial',
    institution: 'TECLAB',
    date: '2025',
    description: 'Formación en fundamentos de Inteligencia Artificial, aprendizaje automático y aplicaciones prácticas en diferentes IA.',
    category: 'professional',
    image: '/images/certificates/placeholder.txt'
  },
  {
    id: '3',
    title: 'Programa de Entrenamiento Laboral (PEL)',
    institution: 'TECLAB',
    date: '2025',
    description: 'Tuve la oportunidad de participar en este programa que me permitió ganar experiencia práctica en el mundo laboral. Allí pude fortalecer mis habilidades, aprender nuevas formas de trabajo y prepararme mejor para futuros desafíos profesionales.',
    category: 'professional',
    image: '/images/certificates/placeholder.txt'
  },
  {
    id: '4',
    title: 'Semana de Excel en la Práctica',
    institution: 'Daxus Latam',
    date: '2025',
    description: 'Certificado de participación en taller práctico de Excel (8 horas académicas) con enfoque en fórmulas, tablas dinámicas y herramientas de análisis para optimización de procesos.',
    category: 'course',
    image: '/images/certificates/placeholder.txt'
  },
  {
    id: '5',
    title: 'Fundamentos de Ethical Hacking',
    institution: 'Seguridad CERO',
    date: '2024',
    description: 'Formación introductoria en Ethical Hacking (4 horas académicas) con enfoque en principios de ciberseguridad, análisis de vulnerabilidades y buenas prácticas de seguridad informática.',
    category: 'course',
    image: '/images/certificates/placeholder.txt'
  },
  {
    id: '6',
    title: 'Asistente en Higiene y Seguridad',
    institution: 'Instituto NOVAEDU',
    date: '2020-2021',
    description: 'Asistente en Higiene y Seguridad Laboral',
    category: 'professional',
    image: '/images/certificates/placeholder.txt'
  },
  {
    id: '7',
    title: 'Gestor de Transporte',
    institution: 'C-TRANS',
    date: '2020-2021',
    description: 'Gestor de transporte: Transporte de carga general, internacional y peligrosa',
    category: 'professional',
    image: '/images/certificates/placeholder.txt'
  }
];
