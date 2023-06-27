import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <div>
      <motion.nav
        className="navbar"
        transition={{ duration: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="navbar-button"
        >
          <span role="img" aria-label="Home" className="home-emoji">
            🏡
          </span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, color: '#ff0000' }}
          className="navbar-button"
        >
          Me
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, color: '#ff0000' }}
          className="navbar-button"
        >
          Connect with me
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, color: '#ff0000' }}
          className="navbar-button"
        >
          Connect with me
        </motion.button>
        
      </motion.nav>
      <div className="scrollbar"></div>
    </div>
  );
};

export default Header;
