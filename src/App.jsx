import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FloatingAccessory from './components/FloatingAccessory';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-background text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <Navbar />

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

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
