export default function HelpWindow() {
  const commands = [
    { cmd: 'about', desc: 'Display information about me' },
    { cmd: 'projects', desc: 'Show my projects' },
    { cmd: 'experience', desc: 'View my work experience and education' },
    { cmd: 'contact', desc: 'Get my contact information' },
    { cmd: 'help', desc: 'Show this help menu' },
    { cmd: 'changecolors', desc: 'Randomize the color theme' },
    { cmd: 'resetcolors', desc: 'Reset to default colors' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-accent text-lg font-bold ">Available Commands</h2>
        <p className="mb-3">Type these commands into the terminal below (next to the '$') to learn more!</p>
        <div className="space-y-2">
          {commands.map((command) => (
            <div key={command.cmd} className="grid grid-cols-3 gap-4">
              <span className="text-accent font-bold">{command.cmd}</span>
              <span className="text-text col-span-2">{command.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-accent text-lg font-bold mb-3">Window Management</h2>
        <div className="space-y-2 text-text">
          <p>• Windows can be resized by dragging from the bottom right corner</p>
          <p>• Windows can be moved by dragging from the top bar</p>
          <p>• Windows can be closed with the × in the top right</p>
        </div>
      </div>
    </div>
  );
}