import classes from '/styles/homepage.module.css';
import Hero from './hero/hero';
import Chronology from './chronology/chronology';
import LatestProject from './latest-project/latest-project';

const Homepage = ({ chronologyData, latestProject }) => {
  
  return (
    <section className={classes.Homepage}>
      <Hero />
      <Chronology chronologyData={chronologyData} />
      <LatestProject latestProject={latestProject} />
    </section>
  );
};

export default Homepage;
