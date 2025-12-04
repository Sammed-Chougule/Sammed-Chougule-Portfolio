export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: string; // Optional icon class or url
  level?: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}