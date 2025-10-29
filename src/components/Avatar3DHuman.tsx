import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface HumanAvatarProps {
  imageUrl: string;
}

function HumanAvatar({ imageUrl }: HumanAvatarProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);

  // Load the avatar texture
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (groupRef.current) {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;

        groupRef.current.rotation.y = x * 0.5;
        groupRef.current.rotation.x = y * 0.3;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Idle breathing animation
  useFrame((state) => {
    if (headRef.current && groupRef.current) {
      // Subtle head movement
      headRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;

      // Slight rotation
      headRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Head with face texture */}
        <mesh ref={headRef} position={[0, 1.5, 0]} castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 1.1, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.15, 0.3, 16]} />
          <meshStandardMaterial color="#F4C2A4" roughness={0.6} />
        </mesh>

        {/* Torso - Red Polo Shirt */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[0.8, 1, 0.4]} />
          <meshStandardMaterial color="#B71C1C" roughness={0.7} />
        </mesh>

        {/* Collar */}
        <mesh position={[0, 0.95, 0.22]} castShadow>
          <boxGeometry args={[0.5, 0.15, 0.05]} />
          <meshStandardMaterial color="#8B0000" />
        </mesh>

        {/* White collar trim */}
        <mesh position={[0, 0.95, 0.23]}>
          <boxGeometry args={[0.52, 0.05, 0.02]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>

        {/* Arms */}
        {/* Left arm */}
        <group position={[-0.5, 0.6, 0]} rotation={[0, 0, 0.3]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.12, 0.1, 0.7, 16]} />
            <meshStandardMaterial color="#B71C1C" roughness={0.7} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, -0.45, 0]} castShadow>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#F4C2A4" />
          </mesh>
        </group>

        {/* Right arm - Crossed */}
        <group position={[0.4, 0.4, 0.3]} rotation={[0.5, -0.5, -0.5]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.12, 0.1, 0.7, 16]} />
            <meshStandardMaterial color="#000000" roughness={0.8} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, -0.45, 0]} castShadow>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#F4C2A4" />
          </mesh>
        </group>

        {/* Lower body - Not visible in photo but adding for completeness */}
        <mesh position={[0, -0.3, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.4, 0.8, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>

        {/* Speranza Logo Area */}
        <mesh position={[0.25, 0.5, 0.21]}>
          <circleGeometry args={[0.08, 32]} />
          <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.3} />
        </mesh>
      </Float>

      {/* Decorative elements */}
      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#0066FF"
          emissive="#0066FF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} position={[0, 0.5, 0]}>
        <torusGeometry args={[2.3, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Particle system */}
      {Array.from({ length: 30 }).map((_, i) => {
        const angle = (i / 30) * Math.PI * 2;
        const radius = 2.5 + Math.random() * 0.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 3;

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#0066FF' : '#00D4FF'}
              emissive={i % 2 === 0 ? '#0066FF' : '#00D4FF'}
              emissiveIntensity={1}
            />
          </mesh>
        );
      })}

      {/* Lighting */}
      <pointLight position={[2, 3, 2]} intensity={1} color="#ffffff" />
      <pointLight position={[-2, 1, -2]} intensity={0.5} color="#0066FF" />
      <pointLight position={[0, 3, 0]} intensity={0.3} color="#00D4FF" />
      <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.6} penumbra={0.5} castShadow />
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0066FF" wireframe />
    </mesh>
  );
}

interface Avatar3DHumanProps {
  imageUrl?: string;
}

const Avatar3DHuman = ({ imageUrl = '/images/avatar.jpg' }: Avatar3DHumanProps) => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 50 }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />

        <Suspense fallback={<LoadingFallback />}>
          <HumanAvatar imageUrl={imageUrl} />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.5}
        />

        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default Avatar3DHuman;
