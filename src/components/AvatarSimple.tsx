import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AvatarSimple = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const avatar = avatarRef.current;
    const container = containerRef.current;

    if (!avatar || !container) return;

    // Floating animation
    gsap.to(avatar, {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Rotate rings
    gsap.to('.ring-1', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    gsap.to('.ring-2', {
      rotation: -360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });

    // Mouse parallax effect (lightweight)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      gsap.to(avatar, {
        x: x * 20,
        y: y * 20,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(avatar, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center min-h-[400px]"
    >
      <div ref={avatarRef} className="relative">
        {/* Decorative rings */}
        <div className="ring-1 absolute -inset-8 border-2 border-primary/30 rounded-full"></div>
        <div className="ring-2 absolute -inset-12 border border-secondary/20 rounded-full"></div>

        {/* Main avatar */}
        <div className="relative w-64 h-64 md:w-72 md:h-72">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse"></div>

          {/* Avatar container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-primary to-secondary p-1 shadow-2xl shadow-primary/50">
            <div className="w-full h-full rounded-full overflow-hidden bg-dark">
              <img
                src="/images/avatar.jpg"
                alt="Chuc Kim Thien"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                        <span class="text-6xl md:text-8xl font-bold text-white">CT</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>

          {/* Decorative corner dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Status badge */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-semibold">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarSimple;
