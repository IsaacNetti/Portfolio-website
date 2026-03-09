import { WindowType } from '../types/types';

export type CommandResult = {
  type: 'openWindow';
  windowType: WindowType;
} | {
  type: 'changeTheme';
} | {
  type: 'resetTheme';
} | {
  type: 'unknown';
};

export function processCommand(command: string): CommandResult {
  const cmd = command.toLowerCase().trim();

  switch (cmd) {
    case 'about':
      return { type: 'openWindow', windowType: 'about' };
    case 'projects':
      return { type: 'openWindow', windowType: 'projects' };
    case 'experience':
      return { type: 'openWindow', windowType: 'experience' };
    case 'contact':
      return { type: 'openWindow', windowType: 'contact' };
    case 'help':
      return { type: 'openWindow', windowType: 'help' };
    case 'changecolors':
      return { type: 'changeTheme' };
    case 'resetcolors':
      return { type: 'resetTheme' };
    default:
      return { type: 'unknown' };
  }
}