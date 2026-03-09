'use client';

import { useState, useRef, useEffect } from 'react';
import { processCommand } from '../utils/commands';
import { applyTheme, getRandomTheme, resetTheme } from '../utils/theme';
import { WindowType } from '../types/types';


interface TerminalProps {
  onOpenWindow: (type: WindowType) => void;
}

export default function Terminal({ onOpenWindow }: TerminalProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const getResponseMessage = (command: string): string => {
    switch (command.toLowerCase()) {
      case 'about': return 'Displaying more information about me...';
      case 'projects': return 'Opening project archive...';
      case 'experience': return 'Loading experience and education...';
      case 'contact': return 'Displaying contact information...';
      case 'help': return 'Listing available commands...';
      case 'changecolors': return 'Switching terminal color palette...';
      case 'resetcolors': return 'Restoring default terminal palette...';
      default: return '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim();
    if (!command) return;

    setOutput(prev => [...prev, `$ ${command}`]);
    const result = processCommand(command);

    const message = getResponseMessage(command);
    if (message) {
      setOutput(prev => [...prev, message]);
    }

    switch (result.type) {
      case 'openWindow':
        onOpenWindow(result.windowType);
        break;
      case 'changeTheme':
        applyTheme(getRandomTheme());
        setOutput(prev => [...prev, 'Colors changed!']);
        break;
      case 'resetTheme':
        resetTheme();
        setOutput(prev => [...prev, 'Colors reset to default.']);
        break;
      case 'unknown':
        setOutput(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`]);
        break;
    }

    setInput('');
  };

  return (
    <div className="bg-primary border border-secondary rounded-lg p-4 font-mono text-text max-w-2xl mx-auto">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-accent mb-2">Isaac Netti</h1>
        <h2 className="font-bold text-accent mb-2">UX/UI Web developer and IT Professional</h2>
        <p className="text-text">Type 'help' and press enter to get started</p>
      </div>
      <div className="space-y-1 mb-4 max-h-64 overflow-y-auto" ref={outputRef}>
        {output.map((line, index) => (
          <div key={index} className="text-text">{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-accent mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-text"
          autoComplete="off"
        />
      </form>
    </div>
  );
}