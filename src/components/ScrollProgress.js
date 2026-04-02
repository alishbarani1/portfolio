import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ScrollProgress.css';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height > 0 ? winScroll / height : 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <motion.div
        className="scroll-progress-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}

export default ScrollProgress;
