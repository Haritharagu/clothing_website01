import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-32 px-8 md:px-24 min-h-screen bg-background text-white">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10vw] font-bold uppercase tracking-tighter"
            >
                Our Story
            </motion.h1>
            <div className="mt-12 max-w-2xl">
                <p className="text-xl text-silver leading-relaxed uppercase tracking-widest">
                    Aether was born from the void. A collection of digital materiality and physical craftsmanship.
                    We redefine the boundaries of modern fashion through architectural silhouettes and cinematic visuals.
                </p>
            </div>
        </div>
    );
};

export default About;
