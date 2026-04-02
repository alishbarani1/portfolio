import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'My personal developer portfolio with unique animations and a modern UI/UX style.',
    technologies: ['React', 'Framer Motion', 'CSS'],
    link: '/',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
};

function Projects() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="projects" id="projects">
      <div className="container projects-container">
        {/* My work layout: left = title + desc + CTA, right = grid */}
        <div className="projects-intro">
          <motion.div
            className="projects-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">Portfolio</p>
            <h2 className="projects-title gradient-heading">My work</h2>
            <p className="projects-desc">
              A curated highlight of my portfolio. Click the project card to view it.
            </p>
            <motion.button
              className="btn-gradient"
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact me
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card-wrap"
              variants={card}
              onClick={() => {
                if (project.link && project.link !== '#') window.open(project.link, '_blank');
                else scrollToContact();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (project.link && project.link !== '#') window.open(project.link, '_blank'); else scrollToContact(); } }}
            >
              <motion.div
                className="project-card"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                <div className="project-card-border" />
                <div className="project-visual">
                  <span className="project-placeholder-icon">{"</>"}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <span className="project-link">Open portfolio →</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
