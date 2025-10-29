import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AvatarSection = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const avatar = avatarRef.current;
    const container = containerRef.current;

    if (!avatar || !container) return;

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (y / rect.height) * 20;
      const rotateY = (x / rect.width) * 20;

      gsap.to(avatar, {
        rotationX: -rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(avatar, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Floating animation
    gsap.to(avatar, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Rotate rings animation
    gsap.to('.avatar-ring-1', {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: 'none',
    });

    gsap.to('.avatar-ring-2', {
      rotation: -360,
      duration: 15,
      repeat: -1,
      ease: 'none',
    });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <div ref={avatarRef} className="relative">
        {/* Rotating rings */}
        <div className="avatar-ring-1 absolute inset-0 -m-12">
          <div className="w-full h-full border-4 border-primary/30 rounded-full"></div>
        </div>

        <div className="avatar-ring-2 absolute inset-0 -m-16">
          <div className="w-full h-full border-2 border-secondary/20 rounded-full"></div>
        </div>

        {/* Avatar container with 3D effect */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>

          {/* Avatar image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-secondary shadow-2xl shadow-primary/50">
            <img
              src="/images/avatar.jpg"
              alt="Chuc Kim Thien"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback: Create a gradient avatar with initials
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                      <span class="text-8xl font-bold text-white">CT</span>
                    </div>
                  `;
                }
              }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent"></div>
          </div>

          {/* Decorative dots */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * 360;
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              ></div>
            );
          })}
        </div>

        {/* Status badge */}
        <div className="absolute bottom-8 right-8 bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-semibold">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarSection;
