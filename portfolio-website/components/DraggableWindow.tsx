'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface DraggableWindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
  initialX?: number;
  initialY?: number;
}

export default function DraggableWindow({
  title,
  children,
  onClose,
  onFocus,
  zIndex,
  initialX = 100,
  initialY = 100,
}: DraggableWindowProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ width: 400, height: 300 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    onFocus();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    dragStart.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
    onFocus();
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.current.x,
      y: touch.clientY - dragStart.current.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  useEffect(() => {
    const clampedX = Math.max(0, Math.min(position.x, window.innerWidth - size.width));
    const clampedY = Math.max(0, Math.min(position.y, window.innerHeight - size.height));
    setPosition({ x: clampedX, y: clampedY });
  }, []);

  return (
    <div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
        zIndex,
      }}
    >
      <ResizableBox
        width={size.width}
        height={size.height}
        onResize={(event: any, { size: newSize }: { size: { width: number; height: number } }) => {
          setSize(newSize);
        }}
        minConstraints={[300, 200]}
        maxConstraints={[800, 600]}
        resizeHandles={['se']}
        className="bg-primary border border-secondary rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-full flex flex-col">
          <div
            className="bg-secondary px-4 py-2 flex justify-between items-center cursor-move select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <span className="text-text font-mono text-sm">{title}</span>
            <button
              onClick={onClose}
              className="text-text hover:text-accent font-mono text-lg leading-none"
            >
              ×
            </button>
          </div>
          <div className="flex-1 p-4 text-text font-mono text-sm overflow-y-auto">
            {children}
          </div>
        </div>
      </ResizableBox>
    </div>
  );
}