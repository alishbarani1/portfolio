import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    icon: '{}',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    category: 'Backend',
    icon: '[]',
    skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools & DevOps',
    icon: '&gt;',
    skills: ['Git', 'GitHub', 'Vite'],
  },
  {
    category: 'CS & Design',
    icon: '/*',
    skills: ['Algorithms', 'Data Structures', 'System Design', 'Figma', 'UI/UX', 'Accessibility'],
  },
];

const stats = [
  { number: '20+', label: 'Projects' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '30+', label: 'Happy Clients' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-description">
            A toolkit built through hands-on projects and continuous learning.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              className="skill-card"
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <h3 className="skill-category">
                <span className="skill-icon">{category.icon}</span>
                {category.category}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              variants={card}
              whileHover={{ y: -4 }}
            >
              <p className="stat-number">{stat.number}</p>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
