import React from 'react';
import { motion } from 'framer-motion';

const products = [
    { id: 1, name: 'Obsidian Shell', category: 'Outerwear', price: '$1,200', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80' },
    { id: 2, name: 'Silver Tunic', category: 'Essentials', price: '$850', img: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80' },
    { id: 3, name: 'Graphite Trouser', category: 'Legwear', price: '$950', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80' },
    { id: 4, name: 'Aether Scarf', category: 'Accessories', price: '$450', img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80' },
];

const Products = () => {
    return (
        <section className="bg-white text-black py-32 px-8 md:px-24 w-full">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                <div>
                    <span className="text-xs uppercase tracking-[0.5em] mb-4 block">Essentials</span>
                    <h2 className="text-6xl font-bold uppercase tracking-tighter">Selected <br /> Pieces</h2>
                </div>
                <div className="max-w-xs text-right">
                    <p className="text-sm text-graphite uppercase tracking-widest">
                        A curated selection of our core silhouettes, redefined for the modern aesthetic.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="group"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden bg-silver/20 mb-6">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-bold tracking-widest">
                                New Arrival
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest">{product.name}</h3>
                                <p className="text-xs text-graphite uppercase mt-1">{product.category}</p>
                            </div>
                            <span className="text-sm font-mono">{product.price}</span>
                        </div>
                        <button className="mt-6 w-full py-3 border border-black/10 uppercase text-[10px] tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500">
                            Details
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Products;
