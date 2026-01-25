import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera, Torus, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Torus ref={meshRef} args={[3, 0.8, 16, 100]} position={[0, 0, -5]}>
                <meshStandardMaterial
                    color="#aa00ff"
                    roughness={0.1}
                    metalness={0.8}
                    emissive="#5500aa"
                    emissiveIntensity={0.2}
                    wireframe
                />
            </Torus>
        </Float>
    );
}

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <FloatingShape />
            <Environment preset="city" />
        </>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas>
                <Scene />
            </Canvas>
        </div>
    );
}
