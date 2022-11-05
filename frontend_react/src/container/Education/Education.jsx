import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { MotionWrap, AppWrap } from '../../wrapper';
import { client } from '../../client';
import './Education.scss'

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
  const query = '*[_type == "education"]';

  client.fetch(query)
    .then((data) => {
      setEducation(data);
    });
}, []);
  return (
    <>
    <h2 className="head-text">Education</h2>

    <motion.div className="app__education-container">
        {education?.map((edu) => (
          <motion.div
            className="app__education-item"
            key={edu.year}
          >
            <div className="app__education-year">
              <p className="bold-text">{edu.year}</p>
            </div>
            <motion.div className="app__education-school">
              <>
                  <motion.div
                    whileInView={{opacity: [0, 1]}}
                    transition={{ duration: 0.5}}
                    className="app__education-school"
                    data-tip
                    data-for={edu.university}
                    key={edu.university}
                  >
                    <h4 className="bold-text">{edu.university}</h4>
                    <p className="bold-text">{edu.degree}</p>
                    <p className="p-text"><strong>GPA:</strong> {edu.gpa}</p>
                    <p className="p-text"><strong>Honors/Awards:</strong> {edu.awards}</p>
                    <p className="p-text"><strong>Coursework:</strong> {edu.courses}</p>
                  </motion.div>
                </>
            </motion.div>
          </motion.div>
        ))}
    </motion.div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Education, 'app__education'),
   'education',
   "app__secondarybg"
);