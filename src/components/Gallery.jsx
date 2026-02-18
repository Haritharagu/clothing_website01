import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const sectionRef = useRef(null);
    const images = [
        { url: 'https://images.unsplash.com/photo-1539109132332-132d7593c6df?auto=format&fit=crop&q=80', size: 'aspect-[3/4]', speed: 0.2 },
        { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80', size: 'aspect-[2/3]', speed: 0.5 },
        { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80', size: 'aspect-[4/5]', speed: 0.3 },
        { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80', size: 'aspect-square', speed: 0.4 },
    ];

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={sectionRef} className="relative min-h-[150vh] w-full bg-background py-16 md:py-32 overflow-hidden">
            <div className="absolute top-20 left-8 md:left-24 z-10">
                <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white/10">Frames</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-24">
                {images.map((img, i) => (
                    <ParallaxImage key={i} img={img} index={i} />
                ))}
            </div>

            <div className="mt-32 px-8 md:px-24 flex justify-end">
                <div className="max-w-md text-right">
                    <p className="text-silver uppercase tracking-widest text-sm leading-relaxed">
                        Capturing the essence of movement through static imagery. Our collection
                        is a dialogue between the physical and the ethereal.
                    </p>
                </div>
            </div>
        </section>
    );
};

const ParallaxImage = ({ img, index }) => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(ref.current,
            { filter: 'grayscale(100%)', scale: 0.9, opacity: 0 },
            {
                filter: 'grayscale(0%)',
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top bottom-=100",
                    end: "bottom center",
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden ${img.size} bg-graphite group cursor-none`}
            style={{ marginTop: index * 40 }}
        >
            <img
                src={img.url}
                alt="Fashion Editorial"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-[10px] uppercase tracking-[0.4em]">View Detail</span>
            </div>
        </div>
    );
};

export default Gallery;
