import { Github, Linkedin, Mail } from 'lucide-react';

export const NAV_ITEMS = [
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
  description: [
    { text: "I am a ", highlight: false },
    { text: "Full-Stack Software Engineer", highlight: true },
    { text: " from ", highlight: false },
    { text: "India", highlight: true },
    { text: " with ", highlight: false },
    { text: "4+ years", highlight: true },
    { text: " of experience building end-to-end, enterprise-grade applications. While I specialize in crafting high-performance user experiences within the React ecosystem, I design and implement the complete stack to ensure scalable, reliable software.", highlight: false },
  ],
  resumeLink: "/sammed-dev-resume.pdf",
};

export const TECH_ICONS = {
  'React.js': 'https://cdn.simpleicons.org/react/61DAFB',
  'Redux': 'https://cdn.simpleicons.org/redux/764ABC',
  'Material-UI': 'https://cdn.simpleicons.org/mui/007FFF',
  'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'RTL': 'https://cdn.simpleicons.org/testinglibrary/E33332',
  'Redux Toolkit': 'https://cdn.simpleicons.org/redux/764ABC',
  'React Query': 'https://cdn.simpleicons.org/reactquery/FF4154',
  'Bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',
  'React Testing Library': 'https://cdn.simpleicons.org/testinglibrary/E33332',
  'C++': 'https://cdn.simpleicons.org/cplusplus/00599C',
  'React Router': 'https://cdn.simpleicons.org/reactrouter/CA4245',
  'NodeJS': 'https://cdn.simpleicons.org/nodedotjs/339933',
  'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Shadcn UI': 'https://cdn.simpleicons.org/shadcnui/111827',
  'ReactJs': 'https://cdn.simpleicons.org/react/61DAFB',
  'Typescript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'TailwindCss': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  'Express.js': 'https://cdn.simpleicons.org/express/111827'
};

export const EXPERIENCES = [
  {
    id: 'semtech',
    role: 'Software Engineer',
    company: 'Semtech',
    period: '06/2023 – Present',
    location: 'Pune, India',
    description: [
      'Led UI Simplification Initiative: Designed and implemented a Basic/Advanced mode interface, resulting in a 40% improvement in user workflow efficiency as measured by internal usage analytics and user surveys. Conducted usability testing sessions and iterated based on user feedback.',
      'Contributed to Server-Driven Web UI: Collaborated with cross-functional teams to build an enterprise-grade, highly customizable UI for router and gateway management, serving 1,000+ global enterprise clients. Integrated React front-end with C++ backend components, ensuring seamless configuration management, accessibility, and localization support.',
      'Modernized Testing Infrastructure: Headed the migration from Enzyme to React Testing Library for front-end test cases, boosting test reliability and maintainability across React and C++ integrated modules.',
      'Enhanced Developer Experience: Co-developed a "Developer Mode" for the front-end stack, streamlining local development setup and reducing onboarding time for new engineers by 60%. Authored onboarding documentation and mentored junior developers.'
    ],
    technologies: ['React.js', 'C++', 'Redux', 'React Testing Library']
  },
  {
    id: 'josh',
    role: 'Software Engineer + Internship',
    company: 'Josh Software Private Limited',
    period: '01/2022 – 06/2023',
    location: 'Pune, India',
    projects: [
      {
        name: 'Optessa',
        description: [
          'Delivered End-to-End Solution: Built car delivery estimation platform serving automotive dealerships with real-time tracking capabilities.',
          'Optimized State Management: Implemented Redux Toolkit architecture for complex filtering logic, improving application performance by 25%.',
          'Client Recognition: Received appreciation from client for exceptional code quality and timely delivery.'
        ],
        technologies: ['React.js', 'Redux Toolkit', 'React Router', 'Bootstrap', 'NodeJS', 'MongoDB']
      },
      {
        name: 'Rebel Foods',
        description: [
          'Built Inventory Management System: Developed three-layer acceptance module for store inventory, handling 500+ daily transactions.',
          'Improved Data Fetching: Implemented React Query for efficient server state management, reducing API calls by 30%.'
        ],
        technologies: ['React.js', 'React Query', 'Material-UI', 'Bootstrap', 'React Router', 'NodeJS', 'MongoDB']
      }
    ]
  }
];

export const EDUCATION_CONTENT = [
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

export const PROJECTS = [
  {
    id: 'shadcn-loaders',
    title: 'Shadcn Loaders',
    description: 'An open-source library of 20+ React loader components using TypeScript and Tailwind CSS',
    image: '/shadcn_loaders.png',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    // githubUrl: 'https://github.com/Sammed-Chougule/shadcn-loaders',
    liveUrl: 'https://www.shadcnloaders.com/'
  },
  {
    id: 'guess-my-number',
    title: 'Guess My Number',
    description: 'A simple Guess My Number game with a 1v1 guessing mode. Create a private room or join a public server to play with others.',
    image: '/guessmynumber.png',
    technologies: ['ReactJs', 'Typescript', 'TailwindCss'],
    // githubUrl: 'https://github.com/Sammed-Chougule/guess-my-number',
    liveUrl: 'https://guessmynumber.fun/'
  },
  {
    id:"14-0",
    title: "14.0 - IPL Draft Game ",
    description: "A web-based IPL Draft Game where users can create their own IPL team by selecting players within a budget.",
    image: "/14-0.png",
    technologies: ["React.js", "Redux Toolkit", "Material-UI", "Node.js", "Express.js", "MongoDB"],
    // githubUrl: ",
    liveUrl: "https://14-0.fun/"
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/111827" },
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Material-UI", icon: "https://cdn.simpleicons.org/mui/007FFF" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/111827" },
      { name: "Bun", icon: "https://cdn.simpleicons.org/bun/111827" }
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

export const SOCIAL_LINKS = [
  { platform: 'GitHub', url: 'https://github.com/Sammed-Chougule', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sammed-16/', icon: Linkedin },
  { platform: 'Email', url: 'mailto:sammedsanjaychougule@gmail.com', icon: Mail },
];