import classes from '/styles/homepage.module.css';
import Hero from './hero/hero';
import Chronology from './chronology/chronology';

const Homepage = ({ chronologyData }) => {
  
  return (
    <section className={classes.Homepage}>
      <Hero />
      <Chronology chronologyData={chronologyData} />
    </section>
  );
};

export default Homepage;
