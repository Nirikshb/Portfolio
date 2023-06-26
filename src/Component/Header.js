import React from 'react';
import { motion } from 'framer-motion';
import './Header.css'; // Create a CSS file to style the header

const Header = () => {
  return (
    <div>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
          whileHover={{ scale: 1.1, color: '#ff0000' }} // Change the hover color as per your preference
          className="navbar-button"
        >
          Me
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, color: '#ff0000' }} // Change the hover color as per your preference
          className="navbar-button"
        >
          Connect with me
        </motion.button>
      </motion.nav>
    </div>
  );
};

export default Header;
