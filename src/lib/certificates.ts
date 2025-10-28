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
    title: 'Ingeniería en Sistemas de Información',
    institution: 'Universidad Tecnológica Nacional',
    date: '2018 - 2022',
    description: 'Carrera universitaria enfocada en desarrollo de software, bases de datos y arquitectura de sistemas.',
    category: 'academic',
    image: '/images/certificates/ingenieria-sistemas.jpg'
  },
  {
    id: '2',
    title: 'Certificación AWS Cloud Practitioner',
    institution: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CLF-123456',
    credentialUrl: 'https://aws.amazon.com/verification/',
    description: 'Certificación fundamental en servicios de computación en la nube de AWS.',
    category: 'certification',
    image: '/images/certificates/aws-cloud-practitioner.jpg'
  },
  {
    id: '3',
    title: 'React Developer Certification',
    institution: 'Meta (Facebook)',
    date: '2023',
    credentialId: 'META-REACT-789012',
    credentialUrl: 'https://coursera.org/verify/',
    description: 'Certificación profesional en desarrollo de aplicaciones con React y ecosistema JavaScript moderno.',
    category: 'certification',
    image: '/images/certificates/react-developer.jpg'
  },
  {
    id: '4',
    title: 'TypeScript Fundamentals',
    institution: 'Microsoft Learn',
    date: '2022',
    description: 'Curso especializado en TypeScript, tipado estático y mejores prácticas de desarrollo.',
    category: 'course',
    image: '/images/certificates/typescript-fundamentals.jpg'
  },
  {
    id: '5',
    title: 'Diseño UX/UI Avanzado',
    institution: 'Google Career Certificates',
    date: '2022',
    credentialId: 'GOOGLE-UX-345678',
    credentialUrl: 'https://grow.google/certificates/',
    description: 'Especialización en diseño de experiencia de usuario e interfaces digitales.',
    category: 'professional',
    image: '/images/certificates/ux-ui-design.jpg'
  },
  {
    id: '6',
    title: 'Node.js Backend Development',
    institution: 'FreeCodeCamp',
    date: '2021',
    description: 'Desarrollo de APIs y aplicaciones backend con Node.js, Express y MongoDB.',
    category: 'course',
    image: '/images/certificates/nodejs-backend.jpg'
  },
  {
    id: '7',
    title: 'Agile Project Management',
    institution: 'Scrum Alliance',
    date: '2023',
    credentialId: 'CSM-901234',
    credentialUrl: 'https://scrumalliance.org/verify/',
    description: 'Certificación Scrum Master para gestión ágil de proyectos de desarrollo.',
    category: 'certification',
    image: '/images/certificates/scrum-master.jpg'
  },
  {
    id: '8',
    title: 'Git y Control de Versiones',
    institution: 'GitHub Education',
    date: '2021',
    description: 'Especialización en control de versiones, flujos de trabajo colaborativo y DevOps.',
    category: 'course',
    image: '/images/certificates/git-github.jpg'
  }
];
