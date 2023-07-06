import React from 'react';
import { motion } from 'framer-motion';
import './Me.css';

const Me = () => {
  return (
    <div className="me-container">
      <motion.div
        className="typewriter-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }} // Faster duration and delay
      >
        <h1>
          <span className="typewriter">Hi, I am a Frontend Developer</span>
        </h1>
      </motion.div>
      <motion.h2
        className="name-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        My name is Niriksh Bharti
      </motion.h2>
    </div>
  );
};

export default Me;
