import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../styles/Hero.css';

const ROLES = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
const TYPING_SPEED = 70;
const PAUSE_MS = 2200;
const DELETING_SPEED = 45;

const BIG_TITLE_WORDS = ['Front-End', '·', 'Full-Stack', 'Developer'];
const nameLetters = "Alishba Rani".split('');

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};
const letter = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};
const nameContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.12 },
  },
};
const word = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhotoMouseMove = (event) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 14;
    const rotateX = (0.5 - y) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handlePhotoMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else setIsDeleting(true);
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? DELETING_SPEED : displayText.length === currentRole.length ? PAUSE_MS : TYPING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-orb hero-orb-1"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-orb hero-orb-2"
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-orb hero-orb-3"
        animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {/* DVLPR-style big title line */}
          <motion.div className="hero-big-title" variants={container}>
            {BIG_TITLE_WORDS.map((w, i) => (
              <motion.span
                key={i}
                className={`hero-big-word ${w === '·' ? 'hero-big-dot' : ''}`}
                variants={word}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </motion.div>

          <motion.p className="hero-greeting" variants={letter}>
            <span className="hero-bracket">{'//'}</span> Hi, I&apos;m
          </motion.p>
          <motion.h1
            className="hero-name"
            variants={nameContainer}
            initial="hidden"
            animate="visible"
          >
            {nameLetters.map((char, i) => (
              <motion.span
                key={i}
                className={char === ' ' ? 'hero-name-space' : 'hero-name-char'}
                variants={letter}
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <div className="hero-typing-wrap">
            <span className="hero-typing">{displayText}</span>
            <span className="hero-cursor">|</span>
          </div>
          <motion.p className="hero-desc" variants={letter}>
            Crafting modern, accessible web experiences. I build elegant interfaces, solve complex
            problems, and bring ideas to life through clean, scalable code.
          </motion.p>
          <motion.div className="hero-buttons" variants={letter}>
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(34, 211, 238, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span className="btn-shine" />
              See Projects
            </motion.button>
            <motion.button
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02, borderColor: 'var(--secondary)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.25 }}
        >
          <motion.div
            className="hero-photo-outer"
            onMouseMove={handlePhotoMouseMove}
            onMouseLeave={handlePhotoMouseLeave}
            style={{
              rotateX: reduceMotion ? 0 : tilt.x,
              rotateY: reduceMotion ? 0 : tilt.y,
              transformPerspective: 1200,
            }}
            animate={
              reduceMotion
                ? { y: 0, rotate: 0 }
                : {
                    y: [0, -12, 0],
                    rotate: [0, 1.5, -1.5, 0],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
            whileHover={
              reduceMotion
                ? { scale: 1 }
                : {
                    scale: 1.05,
                    rotate: 0,
                    transition: { type: 'spring', stiffness: 400, damping: 22 },
                  }
            }
            whileTap={{ scale: 0.98 }}
          >
            <div className="hero-photo-glow" aria-hidden="true" />
            <div className="hero-photo-ring" aria-hidden="true" />
            <motion.span
              className="hero-orbit hero-orbit-a"
              aria-hidden
              animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: 'linear' }}
            >
              <span className="hero-orbit-dot" />
            </motion.span>
            <motion.span
              className="hero-orbit hero-orbit-b"
              aria-hidden
              animate={reduceMotion ? { rotate: 0 } : { rotate: -360 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <span className="hero-orbit-dot" />
            </motion.span>
            <motion.span
              className="hero-orbit hero-orbit-c"
              aria-hidden
              animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 22, repeat: Infinity, ease: 'linear' }}
            >
              <span className="hero-orbit-dot" />
            </motion.span>
            <span className="hero-sparkle hero-sparkle-1" aria-hidden />
            <span className="hero-sparkle hero-sparkle-2" aria-hidden />
            <span className="hero-sparkle hero-sparkle-3" aria-hidden />
            <span className="hero-sparkle hero-sparkle-4" aria-hidden />
            <div className="hero-photo-inner">
              <motion.img
                className="hero-profile-img"
                src={`${process.env.PUBLIC_URL}/profile.png`}
                alt="Alishba Rani"
                loading="eager"
                decoding="async"
                whileHover={reduceMotion ? { scale: 1 } : { scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              />
            </div>
            <motion.span
              className="hero-photo-badge"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, type: 'spring', stiffness: 200, damping: 18 }}
            >
              <motion.span
                className="hero-photo-badge-dot"
                animate={
                  reduceMotion
                    ? { scale: 1, opacity: 1 }
                    : { scale: [1, 1.2, 1], opacity: [1, 0.75, 1] }
                }
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                }
                aria-hidden
              />
              Available
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator - DVLPR style */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.button
          className="hero-scroll-btn"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll down"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="hero-scroll-line" />
          <span className="hero-scroll-text">Scroll Down</span>
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
