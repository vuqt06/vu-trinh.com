import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home"><img src={images.logo} alt="logo"/></a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'testimonials', 'contacts'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
          <li className="app__flex p-text">
            <div />
            <a href="../../assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </li>
      </ul>

      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (
            <motion.div 
              whileInView={{x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut'}}
            >

              <HiX onClick={() => setToggle(false)}/>
              <ul>
                {['home', 'about', 'contact', 'work', 'skills', 'testimonials', 'contacts'].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                </li>
              ))}
                <li>
                  <a href="../../assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                </li>
              </ul>
            </motion.div>
            )
          }
      </div>
    </nav>
  )
};

export default Navbar;