import { Github, Linkedin, Mail, Twitter, Code2, Globe, Server, Database } from 'lucide-react';
import { NavItem, Experience, Project, Skill, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  greeting: "Hi, I'm",
  name: "Sammed Chougule",
  role: "Full Stack Developer",
  description: "I build accessible, pixel-perfect, and performant web experiences. Passionate about turning complex problems into simple, beautiful, and intuitive designs.",
  resumeLink: "#", // Placeholder
};

export const ABOUT_CONTENT = {
  description: `I am a passionate software engineer with a strong focus on frontend development and user experience. 

  My journey in tech began with a curiosity about how things work on the web, which led me to dive deep into JavaScript, React, and the modern web ecosystem. I thrive in collaborative environments and enjoy solving challenging technical problems.
  
  When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.`,
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Cups of Coffee", value: "∞" },
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: [
      'Spearheaded the migration of legacy codebases to Next.js, improving performance by 40%.',
      'Mentored junior developers and established code quality standards across the team.',
      'Implemented a comprehensive design system using Tailwind CSS and Storybook.'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind']
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Creative Agency',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple client websites using the MERN stack.',
      'Collaborated closely with designers to ensure pixel-perfect implementation of UI/UX.',
      'Optimized backend API response times by implementing caching strategies.'
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'React']
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'Startup Hub',
    period: '2019 - 2020',
    description: [
      'Assisted in the development of the company’s main product dashboard.',
      'Fixed bugs and implemented new features based on user feedback.',
      'Participated in agile ceremonies and daily stand-ups.'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'Vue.js']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing products, orders, and analytics. Features real-time data visualization and a customizable widget layout.',
    image: 'https://picsum.photos/800/600?random=1',
    technologies: ['React', 'Recharts', 'Firebase', 'Tailwind'],
    githubUrl: 'https://github.com/sammed-chougule',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool inspired by Trello. Includes drag-and-drop functionality, team workspaces, and real-time updates.',
    image: 'https://picsum.photos/800/600?random=2',
    technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com/sammed-chougule',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'An application that leverages LLMs to help users generate blog posts and social media content. Integrated with OpenAI API.',
    image: 'https://picsum.photos/800/600?random=3',
    technologies: ['React', 'OpenAI API', 'Node.js', 'Stripe'],
    githubUrl: 'https://github.com/sammed-chougule',
    liveUrl: '#'
  }
];

export const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Firebase"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"] }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/sammed-chougule', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/sammed-chougule', icon: Linkedin },
  { platform: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { platform: 'Email', url: 'mailto:contact@sammed.dev', icon: Mail },
];