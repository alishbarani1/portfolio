import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const titleWords = ['Building', 'software', 'that'];
const ABOUT_TAGS = ['React', 'JavaScript', 'Node.js', 'Python', 'MongoDB', 'Git', 'REST APIs', 'Algorithms'];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title about-title-animated">
            {titleWords.map((w, i) => (
              <motion.span key={i} className="about-title-word" variants={item}>
                {w}{' '}
              </motion.span>
            ))}
            <motion.span className="gradient-text" variants={item}>
              matters
            </motion.span>
          </h2>
          <motion.p
            className="section-subtitle"
            variants={item}
          >
            From algorithms to APIs — I turn ideas into reliable, scalable solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className="about-text" variants={item}>
            <p>
              I'm <strong>Alishba Rani</strong>, a computer science–minded developer focused on full-stack
              applications and clean architecture. I care about performance, maintainable code, and
              great user experiences.
            </p>
            <p>
              My background spans frontend and backend: React, Node.js, databases, and system design.
              I enjoy solving hard problems, contributing to open source, and learning new tools.
            </p>
            <div className="about-tags">
              {ABOUT_TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="skill-tag"
                  variants={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-stats" variants={item}>
            {[
              { value: '20+', label: 'Projects' },
              { value: '30+', label: 'Clients' },
              { value: '5+', label: 'Years' },
              { value: '10+', label: 'Certifications' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
