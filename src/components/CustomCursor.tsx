import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Smooth cursor movement with RAF
    const updatePosition = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Faster smooth interpolation
        setPosition((prev) => ({
          x: prev.x + (targetPosition.current.x - prev.x) * 0.25,
          y: prev.y + (targetPosition.current.y - prev.y) * 0.25,
        }));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Outer ring - follows cursor smoothly */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-150 ${
            isHovering
              ? 'w-12 h-12 border-secondary opacity-80'
              : isClicking
              ? 'w-6 h-6 border-primary opacity-100'
              : 'w-8 h-8 border-primary opacity-60'
          }`}
          style={{
            boxShadow: isHovering
              ? '0 0 20px rgba(0, 212, 255, 0.6)'
              : '0 0 15px rgba(0, 102, 255, 0.4)',
          }}
        />
      </div>

      {/* Inner dot - instant follow */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${targetPosition.current.x}px`,
          top: `${targetPosition.current.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 ${
            isHovering ? 'w-2 h-2 opacity-0' : isClicking ? 'w-1 h-1' : 'w-1.5 h-1.5'
          }`}
          style={{
            boxShadow: '0 0 10px rgba(0, 102, 255, 0.8)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
