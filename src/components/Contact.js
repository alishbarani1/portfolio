import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackToTop from './BackToTop';
import '../styles/Contact.css';

const CONTACT_HEADLINE = "What would you do if a software expert was just a click away?";
const headlineWords = CONTACT_HEADLINE.split(' ');

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};
const wordItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
        >
          <h2 className="contact-headline">
            {headlineWords.map((w, i) => (
              <motion.span
                key={i}
                className="contact-headline-word"
                variants={wordItem}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}{' '}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="contact-tagline"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Whether you want to start a new project or just say hello, I'd love to hear from you.
          </motion.p>
          <motion.a
            href="mailto:alishba.rani@email.com"
            className="contact-email-main"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            alishba.rani@email.com
          </motion.a>
          <motion.p
            className="contact-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Contact
          </motion.p>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="info-item">
              <h3>Email</h3>
              <p><a href="mailto:alishba.rani@email.com">alishba.rani@email.com</a></p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p><a href="tel:+923001234567">+92 (300) 1234567</a></p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Pakistan</p>
            </div>
            <div className="social-links">
              <h3>Connect</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/in/alishbarani" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                <a href="https://github.com/alishbarani" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                <a href="https://twitter.com/alishbarani" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="contact-form-title">Or send a message</p>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project or role" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..." />
            </div>
            {submitted && (
              <motion.p
                className="contact-form-success"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Thanks! Your message has been sent.
              </motion.p>
            )}
            <motion.button type="submit" className="btn btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
      <BackToTop />
    </section>
  );
}

export default Contact;
