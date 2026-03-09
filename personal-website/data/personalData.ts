import { Project, Experience, Education, ContactInfo } from '../types/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'IT Toolkit',
    description: 'A collection of essential tools and resources for IT professionals. This project includes a variety of utilities for password generation, useful shortcuts, as well as a comprehensive place for call notes',
    image: 'IT_Toolkit.jpg',
    link: 'https://it-toolkit-kappa.vercel.app',
  },
  {
    id: '2',
    title: 'This Website',
    description: 'My personal website. Built with React and TypeScript.',
    image: 'Portfolio.jpg',
    link: '#',
  },
  {
    id: '3',
    title: 'More Coming Soon!',
    description: 'Follow me on github to see more projects as I continue to build and expand my portfolio.',
    image: 'Github.jpg',
    link: 'https://github.com/isaacnetti',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'IT Support Specialist',
    company: 'SCDEW',
    period: 'Mar 2025 - Present',
    description: 'Provided technical support and troubleshooting for end-users. Maintained and updated hardware and software systems.',
  },
  {
    id: '2',
    title: 'Help Desk Technician',
    company: 'Cross Link Consulting',
    period: 'Oct 2024 - Mar 2025',
    description: 'Assisted clients with technical issues, performed system maintenance, and provided training on software applications.',
  },
];

export const educations: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Information Systems',
    institution: 'University of South Carolina',
    year: '2024',
  },
];

export const contactInfo: ContactInfo = {
  email: 'isaacnetti@gmail.com',
  github: 'https://github.com/isaacnetti',
  linkedin: 'https://linkedin.com/in/inetti',
};
