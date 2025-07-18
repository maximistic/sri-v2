'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Group } from 'three';

function FullBodyAvatar({ url }: { url: string }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(url);

  return (
    <group ref={group}>
      {/* Tweak scale and position for ReadyPlayerMe models */}
      <primitive object={scene} scale={[1.2, 1.2, 1.2]} position={[0, -1.55, 0]} />
    </group>
  );
}

// Preload the model for faster display
useGLTF.preload('https://models.readyplayer.me/687a09a9f98a173fe0e1fe34.glb');

export default function Avatar3D() {
  return (
    <div className="w-full h-[500px] bg-white">
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 4, 5]} intensity={1.2} />
        <Suspense fallback={<Html>Loading...</Html>}>
          <FullBodyAvatar url="https://models.readyplayer.me/687a09a9f98a173fe0e1fe34.glb" />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
