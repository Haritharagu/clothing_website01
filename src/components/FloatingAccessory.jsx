import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';

const FloatingAccessory = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef}>
                <octahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#FEFEFE"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    metalness={1}
                    roughness={0.1}
                />
            </mesh>
        </Float>
    );
};

export default FloatingAccessory;
