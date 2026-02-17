import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ClothModel = () => {
    const meshRef = useRef();

    // Create a custom shader material for a realistic cloth effect
    const material = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: '#1a1a1a',
        metalness: 0.1,
        roughness: 0.5,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
    }), []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.2;
            meshRef.current.rotation.x = Math.cos(time * 0.1) * 0.1;

            // Parallax effect based on mouse
            const mouseX = (state.mouse.x * Math.PI) / 8;
            const mouseY = (state.mouse.y * Math.PI) / 8;
            meshRef.current.rotation.y += mouseX * 0.5;
            meshRef.current.rotation.x -= mouseY * 0.5;
        }
    });

    return (
        <mesh ref={meshRef}>
            <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
            <primitive object={material} attach="material" />
        </mesh>
    );
};

export default ClothModel;
