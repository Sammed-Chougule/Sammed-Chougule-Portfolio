import { Github, Linkedin, Mail, Twitter, Code2, Globe, Server, Database } from 'lucide-react';
import { NavItem, Experience, Project, SocialLink, EducationItem, SkillCategory } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  greeting: "Hi, I'm",
  name: "Sammed Chougule",
  role: "Software Engineer",
  description: "I am a Software Engineer based in Pune, India, specializing in frontend development and user experience. I build enterprise-grade applications using the React ecosystem.",
  resumeLink: "/sammed-dev-resume.pdf", 
};

export const ABOUT_CONTENT = {
  description: `I am a passionate Software Engineer with a strong focus on frontend development and user experience. I currently work at Semtech, where I've led UI simplification initiatives and contributed to server-driven web interfaces.

  My journey includes significant contributions at Josh Software, where I optimized state management and delivered end-to-end solutions for automotive clients. I enjoy solving challenging technical problems and have a strong background in competitive programming.
  
  When I'm not building scalable web apps, you can find me solving DSA problems or exploring new tech stacks.`,
  stats: [
    { label: "Years Experience", value: "3.5+" },
    { label: "DSA Problems Solved", value: "450+" },
    { label: "Awards Won", value: "2" },
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'semtech',
    role: 'Software Engineer',
    company: 'Semtech',
    period: '06/2023 – Present',
    description: [
      'Led UI Simplification Initiative: Designed and implemented Basic/Advanced mode interface, improving user experience by 40%.',
      'Contributed Server-Driven Web UI: Built enterprise-grade interface for routers and gateways serving 1000+ enterprise clients.',
      'Modernized Testing Infrastructure: Successfully migrated 50+ test cases from Enzyme to React Testing Library, improving test reliability.',
      'Enhanced Developer Experience: Collaborated with team to establish Developer Mode, reducing local development setup time by 60%.'
    ],
    technologies: ['React.js', 'Redux', 'Material-UI', 'TypeScript', 'RTL']
  },
  {
    id: 'josh',
    role: 'Software Engineer + Internship',
    company: 'Josh Software Private Limited',
    period: '01/2022 – 06/2023',
    description: [
      'Optessa: Delivered End-to-End Solution for car delivery estimation. Optimized State Management using Redux Toolkit, improving performance by 25%.',
      'Rebel Foods: Built Inventory Management System handling 500+ daily transactions. Implemented React Query reducing API calls by 30%.',
      'Received appreciation from client for exceptional code quality and timely delivery.'
    ],
    technologies: ['React.js', 'Redux Toolkit', 'React Query', 'Bootstrap', 'Material-UI']
  }
];

export const EDUCATION_CONTENT: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech - Electronics Engineering',
    school: 'Walchand College Of Engineering, Sangli',
    period: '2018 – 2022',
    score: '8.21 CGPA'
  },
  {
    id: 'hsc',
    degree: 'HSC',
    school: 'Balaji Jr. College, Ichalkaranji',
    period: '2016 – 2018',
    score: '92% (JEE-MAIN AIR 32240)'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'spot-round',
    title: 'Spot Round Admission Automation',
    description: 'A MERN stack web application solving the manual process of College Admission for Spot Rounds. Features student registration, vacant seat management, and automated student allotment administration.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    githubUrl: 'https://github.com/Sammed-Chougule',
    liveUrl: '#'
  },
  {
    id: 'optessa-platform',
    title: 'Car Delivery Estimation Platform',
    description: 'Built for Optessa at Josh Software. A real-time tracking platform for automotive dealerships. Implemented complex filtering logic with Redux Toolkit.',
    image: 'https://images.unsplash.com/photo-1553440683-1b9dc5ce7e8c?q=80&w=800&auto=format&fit=crop',
    technologies: ['React.js', 'Redux Toolkit', 'Bootstrap'],
    liveUrl: '#'
  },
  {
    id: 'inventory-system',
    title: 'Store Inventory Management',
    description: 'Built for Rebel Foods. A three-layer acceptance module for store inventory handling 500+ daily transactions with efficient server state management.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
    technologies: ['React.js', 'React Query', 'Material-UI'],
    liveUrl: '#'
  }
];

export const SKILLS: SkillCategory[] = [
  { 
    category: "Frontend", 
    items: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Material-UI", icon: "https://cdn.simpleicons.org/mui/007FFF" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" }
    ] 
  },
  { 
    category: "Backend", 
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/ffffff" },
      { name: "Bun", icon: "https://cdn.simpleicons.org/bun/ffffff" }
    ] 
  },
  {
    category: "Database",
    items: [
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" }
    ]
  },
  { 
    category: "Tools & DevOps", 
    items: [
      { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Webpack", icon: "https://cdn.simpleicons.org/webpack/8DD6F9" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" }
    ] 
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Sammed-Chougule', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sammed-chougule/', icon: Linkedin },
  { platform: 'Email', url: 'mailto:sammedsanjaychougule@gmail.com', icon: Mail },
];