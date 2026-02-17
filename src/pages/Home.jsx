import React from 'react';
import Hero from '../components/Hero';
import BrandStatement from '../components/BrandStatement';
import Gallery from '../components/Gallery';
import Products from '../components/Products';
import Reviews from '../components/Reviews';
import FloatingAccessory from '../components/FloatingAccessory';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const Home = () => {
    return (
        <>
            <section id="hero">
                <Hero />
            </section>

            <section id="manifesto">
                <BrandStatement />
            </section>

            {/* Transitional 3D Element */}
            <div className="h-64 w-full bg-background flex items-center justify-center pointer-events-none">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <Environment preset="studio" />
                    <FloatingAccessory />
                </Canvas>
            </div>

            <section id="collections">
                <Gallery />
                <Products />
            </section>

            <section id="reviews">
                <Reviews />
            </section>
        </>
    );
};

export default Home;
