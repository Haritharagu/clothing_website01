import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <footer className="bg-background text-white pt-32 pb-12 px-8 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                <div>
                    <h2 className="text-[10vw] md:text-[6vw] font-bold uppercase leading-none tracking-tighter mb-12">
                        JOIN THE <br /> <span className="text-silver/30">CIRCUIT</span>
                    </h2>
                    <p className="text-silver uppercase tracking-widest text-sm max-w-sm mb-12">
                        Subscribe to receive exclusive access to our upcoming digital installations and runway reveals.
                    </p>

                    <div className="relative max-w-md">
                        <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            className="w-full bg-transparent border-b border-silver/30 py-4 text-sm tracking-widest focus:outline-none focus:border-white transition-colors uppercase"
                        />
                        <button className="absolute right-0 bottom-4">
                            <ArrowRight size={20} className="text-silver hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-silver/50 mb-6 block">Navigation</span>
                            <ul className="space-y-4">
                                {['Collections', 'About', 'Archive', 'Contact'].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-xs uppercase tracking-widest hover:text-silver transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-silver/50 mb-6 block">Social</span>
                            <ul className="space-y-4">
                                {['Instagram', 'Twitter', 'Vimeo', 'LinkedIn'].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-xs uppercase tracking-widest hover:text-silver transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="pt-24 md:text-right">
                        <span className="text-[8vw] md:text-[4vw] font-bold uppercase tracking-tighter opacity-10">AETHER</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-silver/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.5em] text-silver/30">© 2026 Aether Digital</span>
                <div className="flex gap-8">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-silver/30 cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-silver/30 cursor-pointer hover:text-white transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
