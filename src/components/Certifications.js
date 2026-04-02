import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Web Development',
    issuer: 'Pakistan Bureau of Statistics',
    date: 'Certificate',
    link: '#',
  },
  {
    id: 2,
    title: 'Generative AI Workshop',
    issuer: 'Workshop',
    date: 'Participation',
    link: '#',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Selected certificates and workshops.</p>
        </motion.div>

        <motion.div
          className="certifications-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {certifications.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              variants={item}
              whileHover={{ y: -6 }}
            >
              <div className="cert-badge">
                <span className="cert-icon">✓</span>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <span className="cert-link">Details →</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
