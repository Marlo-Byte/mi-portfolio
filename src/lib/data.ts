import { Project, Skill, Experience, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Royal Logistic S.R.L.',
    description: 'Sitio web corporativo para empresa de logística con sistema de gestión integrado.',
    longDescription: 'Desarrollo completo del sitio web corporativo para Royal Logistic S.R.L., incluyendo diseño responsivo, sistema de gestión de contenido y funcionalidades específicas para el sector logístico.',
    image: '/images/projects/ecommerce-platform.svg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    demoUrl: 'https://royallogistic.com.ar',
    repoUrl: '',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Adivina Número',
    description: 'Proyecto desafío desarrollado en equipo durante pasantía en TECLAB.',
    longDescription: 'Aplicación de juego de adivinanza de números desarrollada como proyecto de desafío junto al equipo de pasantía en TECLAB. Incluye lógica de juego, interfaz interactiva y sistema de puntuación.',
    image: '/images/projects/task-management-app.svg',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
    demoUrl: '',
    repoUrl: '',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'TicTacTareas',
    description: 'Proyecto desafío de gestión de tareas desarrollado en equipo para TECLAB.',
    longDescription: 'Aplicación de gestión de tareas desarrollada como proyecto de desafío junto al equipo de pasantía en TECLAB. Incluye funcionalidades de creación, edición, eliminación y seguimiento de tareas.',
    image: '/images/projects/weather-dashboard.svg',
    techStack: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
    demoUrl: '',
    repoUrl: '',
    featured: true,
    category: 'web'
  },
  {
    id: '4',
    title: 'BOT WhatsApp con IA',
    description: 'Bot de WhatsApp inteligente para automatización de atención al cliente.',
    longDescription: 'Bot de WhatsApp eficiente diseñado para automatizar la atención a clientes y proveedores. Su enfoque principal es guiar a los usuarios a través de un menú interactivo para resolver consultas comunes de forma automática.',
    image: '/images/projects/mobile-banking-app.svg',
    techStack: ['Node.js', 'WhatsApp API', 'IA', 'JavaScript'],
    demoUrl: '',
    repoUrl: '',
    featured: true,
    category: 'mobile'
  },
  {
    id: '5',
    title: 'Portfolio Personal de Mariano López',
    description: 'Portfolio personal con diseño moderno, modo oscuro/claro y ChatWidget interactivo.',
    longDescription: 'Portfolio personal completo que incluye secciones de presentación, habilidades, proyectos y contacto, con un ChatWidget interactivo responsive. Cuenta con diseño moderno, modo oscuro/claro, animaciones suaves y formulario de contacto funcional. Desplegado en GitHub Pages con automatización completa.',
    image: '/images/projects/ecommerce-platform.svg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
    demoUrl: '',
    repoUrl: '',
    featured: false,
    category: 'web'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'Vue.js', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 5, category: 'frontend' },
  { name: 'Material-UI', level: 4, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  { name: 'Python', level: 3, category: 'backend' },
  { name: 'PostgreSQL', level: 4, category: 'backend' },
  { name: 'MongoDB', level: 4, category: 'backend' },
  { name: 'Redis', level: 3, category: 'backend' },

  // Tools
  { name: 'Git', level: 5, category: 'tools' },
  { name: 'Docker', level: 3, category: 'tools' },
  { name: 'AWS', level: 3, category: 'tools' },
  { name: 'Figma', level: 4, category: 'tools' },

  // Languages
  { name: 'JavaScript', level: 5, category: 'languages' },
  { name: 'TypeScript', level: 4, category: 'languages' },
  { name: 'Python', level: 3, category: 'languages' },
  { name: 'Java', level: 3, category: 'languages' }
];

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Técnico Superior en Programación',
    company: 'TECLAB - Salta Capital',
    period: '2023 - Present',
    description: 'Estudiante de programación especializado en desarrollo full stack. Participación en proyectos de desafío en equipo, desarrollo de aplicaciones web y móviles, y aprendizaje de tecnologías modernas.',
    current: true
  },
  {
    id: '2',
    title: 'Proyectos de Desafío',
    company: 'TECLAB - Equipo de Pasantía',
    period: '2023 - Present',
    description: 'Desarrollo de proyectos desafío junto al equipo de pasantía, incluyendo aplicaciones de juegos, gestión de tareas y bots de WhatsApp con IA para automatización de procesos.',
    current: true
  },
  {
    id: '3',
    title: 'Desarrollador Freelance',
    company: 'Proyectos Independientes',
    period: '2022 - Present',
    description: 'Desarrollo de sitios web corporativos y aplicaciones personalizadas. Especialización en Royal Logistic S.R.L. y otros proyectos de desarrollo web responsivo.',
    current: true
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/marianolopez',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/mariano-lopez',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/marianolopez',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:mariano.lopez@example.com',
    icon: 'mail'
  }
];
