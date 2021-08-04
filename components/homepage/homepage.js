import { useState, useEffect } from 'react';

import classes from '/styles/homepage.module.css';
import Hero from './hero/hero';
import Chronology from './chronology/chronology';
import LatestProject from './latest-project/latest-project';

const Homepage = ({ chronologyData, latestProject }) => {
  const [animateChronology, setAnimateChronology] = useState(false);
  const [toggledAnimation, setToggledAnimation] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    setIsMobileDevice(window.innerWidth < 1200);
  }, []);

  const scrollHandler = () => {
    if (isMobileDevice && scrollY >= 350 && !toggledAnimation) {
      setAnimateChronology(true);
      setToggledAnimation(true);
    }

    if (!isMobileDevice && scrollY >= 400 && !toggledAnimation) {
      setAnimateChronology(true);
      setToggledAnimation(true);
    }
  };

  return (
    <section className={classes.Homepage}>
      <Hero />
      <Chronology chronologyData={chronologyData} isMobileDevice={isMobileDevice} animateChronology={animateChronology} />
      <LatestProject latestProject={latestProject} />
    </section>
  );
};

export default Homepage;
