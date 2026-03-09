import { experiences, educations } from '../data/personalData';

export default function ExperienceWindow() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-accent text-lg font-bold mb-4">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-secondary p-4 rounded border border-accent">
              <h3 className="text-accent font-bold">{exp.title}</h3>
              <p className="text-text">{exp.company} | {exp.period}</p>
              <p className="text-text text-sm mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-accent text-lg font-bold mb-4">Education</h2>
        <div className="space-y-4">
          {educations.map((edu) => (
            <div key={edu.id} className="bg-secondary p-4 rounded border border-accent">
              <h3 className="text-accent font-bold">{edu.degree}</h3>
              <p className="text-text">{edu.institution} | {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}