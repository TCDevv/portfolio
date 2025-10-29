import { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-2 h-2 bg-white rounded-full transition-transform duration-150 ${
            isPointer ? 'scale-0' : 'scale-100'
          }`}
        />
      </div>

      {/* Outer cursor ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-10 h-10 border-2 border-primary rounded-full transition-all duration-300 ${
            isPointer ? 'scale-150 border-secondary' : 'scale-100'
          }`}
          style={{
            background: isPointer
              ? 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)'
              : 'transparent',
          }}
        />
      </div>

      {/* Trailing particles */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50 animate-ping"
            style={{
              top: `${Math.sin(Date.now() * 0.001 + i) * 20}px`,
              left: `${Math.cos(Date.now() * 0.001 + i) * 20}px`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CursorEffect;
