export interface WindowData {
  id: string;
  type: WindowType;
  title: string;
  x: number;
  y: number;
  zIndex: number;
}

export type WindowType = 'about' | 'projects' | 'experience' | 'contact' | 'help';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}