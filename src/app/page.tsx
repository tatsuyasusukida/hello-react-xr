"use client";

import { Box, Cylinder, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="mt-4 mb-4 text-4xl">React Three XR</h1>
      <div className="mb-4">
        <VRButton
          style={{}}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        ></VRButton>
      </div>
      <Canvas className="aspect-video border border-gray-300">
        <XR>
          <Controllers />
          <Hands />
          <ambientLight intensity={0.1}></ambientLight>
          <pointLight intensity={0.8} position={[10, 10, 10]}></pointLight>
          <Box args={[1, 1, 1]} position={[-1.5, 0, -5]}>
            <meshStandardMaterial color="#fafafa"></meshStandardMaterial>
          </Box>
          <Sphere args={[0.5]} position={[0, 0, -5]}>
            <meshStandardMaterial color="#fafafa"></meshStandardMaterial>
          </Sphere>
          <Cylinder args={[0.5, 0.5, 1]} position={[1.5, 0, -5]}>
            <meshStandardMaterial color="#fafafa"></meshStandardMaterial>
          </Cylinder>
        </XR>
      </Canvas>
    </main>
  );
}
