import { projects } from '../data/personalData';

export default function ProjectsWindow() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-secondary p-4 rounded border border-accent">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded mb-2 border border-accent"
            />
            <h3 className="text-accent font-bold">{project.title}</h3>
            <p className="text-text text-sm mb-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}