import React from 'react';
import { motion } from 'framer-motion';

const BrandStatement = () => {
    return (
        <section className="min-h-[60vh] md:min-h-[80vh] w-full bg-white text-black flex items-center justify-center py-16 md:py-24 px-8 md:px-24">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                >
                    <span className="text-xs uppercase tracking-[0.5em] mb-4 md:mb-8 block text-graphite">Manifesto</span>
                    <h2 className="text-2xl md:text-7xl font-bold uppercase leading-[1.1] tracking-tight">
                        We don't just create clothing; we engineer <span className="text-silver/60">visual landscapes</span>. Every thread is a pixel in the story of modern <span className="italic font-serif">avant-garde</span> excellence.
                    </h2>

                    <div className="mt-16 flex flex-col md:flex-row items-start justify-between gap-12">
                        <div className="max-w-md">
                            <p className="text-lg leading-relaxed text-graphite">
                                Designed for the future, inspired by the void. Aether represents the pinnacle of digital fashion, merging technical precision with raw emotional resonance.
                            </p>
                        </div>
                        <button className="px-12 py-5 border border-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-500">
                            View Collection
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandStatement;
