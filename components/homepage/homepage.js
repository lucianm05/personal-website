import classes from '/styles/homepage.module.css';
import Hero from './hero/hero';

const Homepage = () => {
  return (
    <section className={classes.Homepage}>
      <Hero />
    </section>
  );
};

export default Homepage;
