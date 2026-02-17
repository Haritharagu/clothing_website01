import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';

// ScrollToTop component to reset scroll position on route changes
const ScrollToTop = ({ lenisInstance }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisInstance]);

  return null;
};

function App() {
  const [lenis, setLenis] = React.useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
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

    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop lenisInstance={lenis} />
      <main className="relative bg-background text-white selection:bg-white selection:text-black min-h-screen">
        <CustomCursor />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
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
