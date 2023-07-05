import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <div>
      <motion.nav className="navbar" transition={{ duration: 1 }}>
        <Link to="/" exact>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="navbar-button"
          >
            <span role="img" aria-label="Home" className="home-emoji">
              🏡
            </span>
          </motion.button>
        </Link>

        <Link to="/me">
          <motion.button
            whileHover={{ scale: 1.1, color: '#ff0000' }}
            className="navbar-button"
          >
            Me
          </motion.button>
        </Link>

      </motion.nav>
      <div className="scrollbar"></div>
    </div>
  );
};

export default Header;
