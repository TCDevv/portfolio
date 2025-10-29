import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface AvatarModelProps {
  imageUrl: string;
}

function AvatarModel({ imageUrl }: AvatarModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Load texture
  const texture = useTexture(imageUrl);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (groupRef.current) {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;

        groupRef.current.rotation.y = x * 0.3;
        groupRef.current.rotation.x = y * 0.2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Idle animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        {/* Main avatar sphere with image texture */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>

        {/* Glowing ring around avatar */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[2, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#0066FF"
            emissive="#0066FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Additional decorative ring */}
        <mesh rotation={[Math.PI / 2, 0, Math.PI / 4]} position={[0, 0, 0]}>
          <torusGeometry args={[2.3, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Ambient particles */}
        {Array.from({ length: 50 }).map((_, i) => {
          const angle = (i / 50) * Math.PI * 2;
          const radius = 3 + Math.random() * 1;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (Math.random() - 0.5) * 4;

          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? '#0066FF' : '#00D4FF'}
                emissive={i % 2 === 0 ? '#0066FF' : '#00D4FF'}
                emissiveIntensity={1}
              />
            </mesh>
          );
        })}
      </Float>

      {/* Lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066FF" />
      <ambientLight intensity={0.5} />
    </group>
  );
}

interface Avatar3DProps {
  imageUrl?: string;
}

const Avatar3D = ({ imageUrl = '/images/avatar.jpg' }: Avatar3DProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <AvatarModel imageUrl={imageUrl} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Avatar3D;
