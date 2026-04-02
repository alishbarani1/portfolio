import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const currentYear = new Date().getFullYear();

const FOOTER_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-brand">
            <span className="footer-logo">{'<AR />'}</span>
            <p className="footer-tagline">
              Software developer building products with clean code and clear design.
            </p>
          </div>
          <nav className="footer-nav">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-social">
            <a href="https://github.com/alishbarani" target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
            <a href="https://linkedin.com/in/alishbarani" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
            <a href="https://twitter.com/alishbarani" target="_blank" rel="noopener noreferrer" className="footer-social-link">Twitter</a>
          </div>
        </motion.div>
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>&copy; {currentYear} Alishba Rani. Built with React & Framer Motion.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
