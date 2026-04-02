import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/SideNav.css';

const LINKS = [
  { id: 'home', label: 'Home', icon: 'person' },
  { id: 'about', label: 'About', icon: 'list' },
  { id: 'projects', label: 'Work', icon: 'work' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

const Icon = ({ name }) => {
  if (name === 'person')
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  if (name === 'list')
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    );
  if (name === 'work')
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    );
  if (name === 'mail')
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  return null;
};

function SideNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
      const scrollY = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        const top = rect.top + window.scrollY;
        if (scrollY >= top) {
          setActiveSection(LINKS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="side-nav" aria-label="Section navigation">
      {LINKS.map((link) => (
        <motion.button
          key={link.id}
          className={`side-nav-item ${activeSection === link.id ? 'active' : ''}`}
          onClick={() => scrollTo(link.id)}
          aria-label={link.label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="side-nav-icon">
            <Icon name={link.icon} />
          </span>
        </motion.button>
      ))}
    </nav>
  );
}

export default SideNav;
