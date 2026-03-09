import { contactInfo } from '../data/personalData';

export default function ContactWindow() {
  return (
    <div className="space-y-5">
      <h1 className="text-accent font-bold">For custom websites or IT solutions</h1>
      <div>
        <h3 className="text-accent font-bold mb-2">Email</h3>
        <p className="text-text">{contactInfo.email}</p>
      </div>
      <div>
        <h3 className="text-accent font-bold mb-2">GitHub</h3>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {contactInfo.github}
        </a>
      </div>
      <div>
        <h3 className="text-accent font-bold mb-2">LinkedIn</h3>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {contactInfo.linkedin}
        </a>
      </div>
    </div>
  );
}