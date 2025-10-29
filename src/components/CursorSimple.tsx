import { useEffect, useState, useRef } from 'react';

const CursorSimple = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth cursor movement
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="fixed w-1 h-1 rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          background: isPointer
            ? 'linear-gradient(135deg, #0066FF, #00D4FF)'
            : '#fff',
          boxShadow: isPointer
            ? '0 0 10px rgba(0, 212, 255, 0.8)'
            : '0 0 5px rgba(255, 255, 255, 0.5)',
        }}
      />

      {/* Cursor ring - delayed follow */}
      <div
        ref={ringRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.3 : 1})`,
          border: `2px solid ${isPointer ? '#00D4FF' : 'rgba(0, 102, 255, 0.5)'}`,
        }}
      />
    </>
  );
};

export default CursorSimple;
