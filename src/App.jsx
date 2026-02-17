import React, { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Contact from './components/Contact';

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
      <Hero />
      <BrandStatement />
      <Gallery />
      <Products />
      <Contact />
    </main>
  );
}

export default App;
