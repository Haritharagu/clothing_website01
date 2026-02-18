import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import ClothModel from './ClothModel';

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-background overflow-hidden flex items-center justify-center">
            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
                    <ambientLight intensity={0.2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <Environment preset="studio" />

                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                        <ClothModel />
                    </Float>

                    <ContactShadows
                        position={[0, -2.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2}
                        far={4.5}
                    />
                </Canvas>
            </div>

            {/* Hero Text Content */}
            <div className="relative z-10 w-full px-8 md:px-24 flex flex-col md:flex-row items-center justify-between pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    className="text-left w-full md:w-auto"
                >
                    <h1 className="text-[14vw] md:text-[8vw] font-bold leading-none tracking-tighter text-white uppercase break-words">
                        AETHER <br /> RUNWAY
                    </h1>
                    <p className="mt-4 text-silver text-base md:text-lg uppercase tracking-[0.5em] font-light">
                        FW 2026 Collection
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="hidden md:block text-right max-w-xs"
                >
                    <p className="text-silver text-sm leading-relaxed uppercase tracking-widest">
                        A cinematic exploration of digital materiality and fashion installation.
                        Redefining the boundaries of the digital runway.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-silver text-[10px] uppercase tracking-[0.3em] mb-4">Explore</span>
                <div className="w-[1px] h-12 bg-silver/30 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-4 bg-white absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
