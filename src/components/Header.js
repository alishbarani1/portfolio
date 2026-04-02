import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Header.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        const top = rect.top + window.scrollY;
        if (scrollY >= top) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-inner">
        <div className="header-container container">
          <motion.a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="logo-icon" aria-hidden>{"</>"}</span>
            <span className="logo-text">Alishba Rani</span>
          </motion.a>

          <nav className="nav-desktop" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="nav-link-text">{link.label}</span>
                <span className="nav-link-line" />
              </motion.button>
            ))}
          </nav>

          <motion.button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            <span />
            <span />
            <span />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <React.Fragment>
            <motion.div
              key="nav-overlay"
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              key="nav-mobile"
              className="nav-mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 200 }}
              aria-label="Mobile menu"
            >
              <div className="nav-mobile-inner">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`nav-mobile-link ${activeSection === link.id ? 'active' : ''}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ delay: 0.03 * i, duration: 0.25 }}
                  >
                    <span className="nav-mobile-num">0{i + 1}</span>
                    <span className="nav-mobile-label">{link.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </React.Fragment>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
