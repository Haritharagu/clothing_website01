import React from 'react';
import { motion } from 'framer-motion';

const Archive = () => {
    return (
        <div className="pt-32 px-8 md:px-24 min-h-screen bg-background text-white">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10vw] font-bold uppercase tracking-tighter"
            >
                Archive
            </motion.h1>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-[3/4] bg-graphite/20 border border-white/5 flex items-center justify-center">
                        <span className="text-silver/20 uppercase tracking-[0.5em]">Season {item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Archive;
