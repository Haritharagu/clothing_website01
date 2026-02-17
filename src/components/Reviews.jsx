import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
    {
        author: "Dominique V.",
        role: "Editor, Vogue Noir",
        text: "Aether is not just a brand; it's a digital awakening. Their autumn collection redefines what it means to exist in the intersection of fashion and simulation.",
    },
    {
        author: "Julian K.",
        role: "Creative Director",
        text: "The architectural precision in every drape is staggering. It feels like wearing geometry. A true masterclass in minimal avant-garde.",
    },
];

const Reviews = () => {
    return (
        <section className="bg-graphite text-white py-32 px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
                <span className="text-xs uppercase tracking-[0.5em] mb-12 block text-silver/60">Voices</span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="flex flex-col justify-between p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                        >
                            <p className="text-xl md:text-2xl leading-relaxed italic font-serif mb-12">
                                "{review.text}"
                            </p>
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-sm">{review.author}</h4>
                                <p className="text-xs text-silver/60 uppercase mt-1">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
