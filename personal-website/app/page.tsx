'use client';

import { useState } from 'react';
import Terminal from '../components/Terminal';
import DraggableWindow from '../components/DraggableWindow';
import AboutWindow from '../components/AboutWindow';
import ProjectsWindow from '../components/ProjectsWindow';
import ExperienceWindow from '../components/ExperienceWindow';
import ContactWindow from '../components/ContactWindow';
import HelpWindow from '../components/HelpWindow';
import { WindowData, WindowType } from '../types/types';

export default function Home() {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);

  const openWindow = (type: WindowType) => {
    const maxX = typeof window !== 'undefined' ? window.innerWidth - 450 : 500;
    const maxY = typeof window !== 'undefined' ? window.innerHeight - 350 : 400;
    const newWindow: WindowData = {
      id: `${type}-${Date.now()}`,
      type,
      title: getWindowTitle(type),
      x: Math.random() * Math.max(maxX - 100, 100) + 50,
      y: Math.random() * Math.max(maxY - 100, 100) + 50,
      zIndex: nextZIndex,
    };
    setWindows(prev => [...prev, newWindow]);
    setNextZIndex(prev => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const focusWindow = (id: string) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      )
    );
    setNextZIndex(prev => prev + 1);
  };

  const getWindowTitle = (type: WindowType): string => {
    switch (type) {
      case 'about': return 'About Me';
      case 'projects': return 'Projects';
      case 'experience': return 'Experience';
      case 'contact': return 'Contact Me';
      case 'help': return 'Help';
    }
  };

  const renderWindowContent = (type: WindowType) => {
    switch (type) {
      case 'about': return <AboutWindow />;
      case 'projects': return <ProjectsWindow />;
      case 'experience': return <ExperienceWindow />;
      case 'contact': return <ContactWindow />;
      case 'help': return <HelpWindow />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-8 relative overflow-hidden">
      <Terminal onOpenWindow={openWindow} />
      {windows.map(window => (
        <DraggableWindow
          key={window.id}
          title={window.title}
          zIndex={window.zIndex}
          initialX={window.x}
          initialY={window.y}
          onClose={() => closeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
        >
          {renderWindowContent(window.type)}
        </DraggableWindow>
      ))}
    </div>
  );
}
