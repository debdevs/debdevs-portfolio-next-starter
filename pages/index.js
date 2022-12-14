import Head from 'next/head';
import Image from 'next/image';

import NavBar from '../components/UI/templates/NavBar/NavBar';
import HomeHero from '../components/UI/templates/HomeHero/HomeHero';
import HomeSubheading from '../components/UI/templates/HomeSubheading/HomeSubheading';
import Link from 'next/link';
import { useState } from 'react';
import { HomeProjectDetailsContext } from '../contexts/HomeProjectDetailsContext';
import { motion } from 'framer-motion';
import data from '../public/project_data'

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
    duration: { opacity: 0, x: 0, y: 0 },
    transition: { ease: 'easeInOut', duration: 120 },
  };
  const [projectId, setProjectId] = useState(0);
  const [detailsIndex, setDetailsIndex] = useState(0);
  const [projectListId, setProjectListId] = useState(0);
  const [heroProjectId, setHeroProjectId] = useState(0);
  const [clickedItemId, setClickedItemId] = useState(0);
  return (
    <HomeProjectDetailsContext.Provider
      value={{
        projectId,
        setProjectId,
        detailsIndex,
        setDetailsIndex,
        projectListId,
        setProjectListId,
        heroProjectId,
        setHeroProjectId,
        clickedItemId,
        setClickedItemId,
      }}
    >
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
        className=""
      >
        <div className="container">
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar />
          <HomeHero />
          <HomeSubheading />
        </div>
      </motion.main>
    </HomeProjectDetailsContext.Provider>
  );
}
