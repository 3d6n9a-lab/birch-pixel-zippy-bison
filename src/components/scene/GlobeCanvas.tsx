import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Earth() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const n = 900;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 1.62;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.58, 64, 64]} />
        <meshStandardMaterial
          color="#06324a"
          emissive="#00c8e0"
          emissiveIntensity={0.22}
          roughness={0.55}
          metalness={0.35}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.6, 48, 48]} />
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.66, 1]} />
        <meshBasicMaterial color="#9dff7a" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.82, 32, 32]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.07} />
      </mesh>
      <points geometry={points}>
        <pointsMaterial color="#b8fff8" size={0.018} sizeAttenuation />
      </points>
      <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[2.15, 0.012, 8, 80]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0.6, 0.4]}>
        <torusGeometry args={[2.35, 0.008, 8, 80]} />
        <meshBasicMaterial color="#9dff7a" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export function GlobeCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0.35, 6.2], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 3, 5]} intensity={18} color="#00e5ff" />
        <pointLight position={[-4, -2, 2]} intensity={8} color="#9dff7a" />
        <Earth />
      </Canvas>
      <div className="pointer-events-none absolute bottom-[18%] left-1/2 h-24 w-[min(420px,70vw)] -translate-x-1/2 rounded-full bg-cyan/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[16%] left-1/2 h-3 w-[min(280px,50vw)] -translate-x-1/2 rounded-full bg-cyan/40 blur-md" />
    </div>
  );
}
