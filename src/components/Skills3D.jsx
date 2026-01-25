import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const categories = [
    { name: "Frontend", color: "#60a5fa", radius: 10, speed: 0.2, skills: ["React", "HTML", "CSS", "Tailwind", "Next.js", "Framer", "Three.js", "Vite"] },
    { name: "Backend", color: "#a78bfa", radius: 15, speed: 0.15, skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Auth", "API"] },
    { name: "Tools", color: "#34d399", radius: 20, speed: 0.1, skills: ["Git", "Docker", "AWS", "Linux", "DevOps", "CI/CD"] }
];

function SkillAtom({ skill, angle, radius, color }) {
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    return (
        <group position={[x, 0, z]}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
                </mesh>
                <Text
                    position={[0, 0.8, 0]}
                    fontSize={0.6}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    {skill}
                </Text>
            </Float>
        </group>
    );
}

function ElectronRing({ radius, color, speed, skills, tiltX = 0, tiltZ = 0 }) {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += speed * 0.01;
        }
    });

    // Create ring geometry points
    const points = useMemo(() => {
        const pts = [];
        for (let i = 0; i <= 64; i++) {
            const angle = (i / 64) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
        }
        return pts;
    }, [radius]);

    return (
        <group ref={ref} rotation={[tiltX, 0, tiltZ]}>
            <Line points={points} color={color} opacity={0.3} transparent lineWidth={1} />
            {skills.map((skill, i) => (
                <SkillAtom
                    key={i}
                    skill={skill}
                    angle={(i / skills.length) * Math.PI * 2}
                    radius={radius}
                    color={color}
                />
            ))}
        </group>
    );
}

function Nucleus() {
    return (
        <Float speed={3} rotationIntensity={2} floatIntensity={1}>
            <mesh>
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial color="#ffffff" wireframe />
            </mesh>
            <pointLight distance={30} intensity={5} color="#ffffff" />
        </Float>
    )
}

export default function Skills3D() {
    return (
        <div className="h-[500px] w-full cursor-move">
            <Canvas camera={{ position: [0, 15, 30], fov: 50 }}>
                <fog attach="fog" args={['#050505', 0, 100]} />
                <ambientLight intensity={0.5} />

                <Nucleus />

                <ElectronRing
                    {...categories[0]}
                    tiltX={0.2}
                    tiltZ={0.1}
                />
                <ElectronRing
                    {...categories[1]}
                    tiltX={-0.2}
                    tiltZ={-0.1}
                />
                <ElectronRing
                    {...categories[2]}
                    tiltX={0.1}
                    tiltZ={0.3}
                />

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
