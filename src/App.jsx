import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';

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

    // Scroll to top on route change
    lenis.on('scroll', () => {
      // Handle scroll events if needed
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <main className="relative bg-background text-white selection:bg-white selection:text-black">
        <CustomCursor />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          {/* Default to Home for other links like Collections which might be sections */}
          <Route path="/collections" element={<Home />} />
        </Routes>

        <section id="footer">
          <Contact />
        </section>
      </main>
    </Router>
  );
}

export default App;
