import React from 'react'
import styles from './AboutSubheading.module.css'

import PortfolioProjectDisplayCard from '../../atoms/PortfolioProjectDisplayCard/PortfolioProjectDisplayCard';
import { WorkCard } from '../../atoms/WorkCard/WorkCard';
import data from '../../../../public/work_data.js';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioPageContext } from '../../../../contexts/PortfolioPageContext';
import { useContext } from 'react';
const AboutSubheading = () => {
    const { workId, setWorkId } = useContext(PortfolioPageContext);
  return (
    <div className={styles.about_subheading_parent}>
      <div className={styles.about_subheading_cards_bg}>
        <AnimatePresence>
          <motion.div

          >



{data.projects.map((project, i) => (
              <WorkCard
                key={i}
                title={project.name}
                description={project.description}
                set_id={() => {
                  setProjectListId(i);
                  setDetailsIndex(0);
                  setSelected(i);

                  console.log(i);
                }}
                img_src = {project.image_source[0]}

               
                gradient_container_value ={
                  i === 0
                  ? 1
                  : 0
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AboutSubheading