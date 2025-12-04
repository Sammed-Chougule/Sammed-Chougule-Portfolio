import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon: string; // URL to the icon
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
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

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  score: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}