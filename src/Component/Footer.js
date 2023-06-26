import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'; // Create a CSS file to style the footer

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-content">
        <motion.div
          className="smooth-effect"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <div className="footer-text">Made with ❤️</div>
      </div>
    </motion.footer>
  );
};

export default Footer;
