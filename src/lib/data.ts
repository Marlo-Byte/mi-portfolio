import { Project, Skill, Experience, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with modern UI and payment integration.',
    longDescription: 'Built a complete e-commerce solution using Next.js, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, payment processing with Stripe, and admin dashboard.',
    image: '/images/projects/ecommerce-platform.svg',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    demoUrl: 'https://demo.example.com',
    repoUrl: 'https://github.com/username/ecommerce',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    longDescription: 'Developed a real-time task management app using React, Socket.io, and MongoDB. Includes drag-and-drop functionality, team collaboration features, and progress tracking.',
    image: '/images/projects/task-management-app.svg',
    techStack: ['React', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    demoUrl: 'https://tasks.example.com',
    repoUrl: 'https://github.com/username/taskapp',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts.',
    longDescription: 'Created a weather application using Vue.js and OpenWeather API. Features include current weather, 7-day forecast, location search, and weather maps.',
    image: '/images/projects/weather-dashboard.svg',
    techStack: ['Vue.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
    demoUrl: 'https://weather.example.com',
    repoUrl: 'https://github.com/username/weather',
    featured: false,
    category: 'web'
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication.',
    longDescription: 'Developed a cross-platform mobile banking app using React Native. Includes secure authentication, transaction history, bill payments, and account management.',
    image: '/images/projects/mobile-banking-app.svg',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth'],
    demoUrl: 'https://banking.example.com',
    repoUrl: 'https://github.com/username/banking',
    featured: true,
    category: 'mobile'
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
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development for multiple client projects, mentoring junior developers, and implementing best practices for scalable applications.',
    current: true
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Digital Agency Co.',
    period: '2020 - 2022',
    description: 'Developed full-stack web applications using React, Node.js, and various databases. Collaborated with design teams to create user-friendly interfaces.',
    current: false
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Built responsive web applications and mobile-first designs. Worked closely with product managers to implement new features and improve user experience.',
    current: false
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
