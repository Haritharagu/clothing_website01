import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Collections', href: '/collections' },
        { name: 'Archive', href: '/archive' },
        { name: 'About', href: '/about' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-8 md:px-24 py-6 flex items-center justify-between ${isScrolled ? 'bg-white/5 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent'
                    }`}
            >
                <div className="flex items-center gap-12">
                    <Link to="/" className="text-2xl font-bold uppercase tracking-tighter text-white">
                        AETHER
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-[10px] uppercase tracking-[0.3em] transition-colors ${location.pathname === link.href ? 'text-white font-bold' : 'text-silver hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-white">
                        <ShoppingBag size={18} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">(0)</span>
                    </button>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="fixed inset-0 z-[110] bg-black p-8 flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold tracking-tighter text-white">AETHER</span>
                            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <Link
                                        to={link.href}
                                        className="text-4xl font-bold uppercase tracking-tighter text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <span className="text-[10px] uppercase tracking-[0.5em] text-silver/30">© 2026 Aether Digital</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
