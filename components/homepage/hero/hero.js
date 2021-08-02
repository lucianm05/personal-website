import classes from '/styles/hero.module.css';
import HeroImage from './hero-image';
import HeroTitle from './hero-title';
import HeroDescription from './hero-description';
import HeroPersonalTitles from './hero-personal-titles';

const Hero = () => {
  return (
    <section className={classes.HeroContainer}>
      <div className={classes.Hero}>
        <HeroImage />
        <HeroTitle />
        <HeroDescription />
        <HeroPersonalTitles />
      </div>
    </section>
  );
};

export default Hero;
