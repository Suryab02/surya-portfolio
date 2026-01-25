import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Globe() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.8}>
            <MeshDistortMaterial
                color="#818cf8"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
                metalness={1}
                wireframe
            />
        </Sphere>
    );
}

export default function Contact3D() {
    return (
        <div className="h-[300px] w-full lg:h-[400px]">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <pointLight position={[-10, -10, -10]} color="#c084fc" intensity={2} />
                <Globe />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
