import classes from '/styles/hero-image.module.css';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className={classes.HeroImage}>
      <Image src={'/images/profile-picture.jpg'} alt={'Imagine cu Manea Lucian George.'} width={400} height={400} quality={100} />
    </div>
  );
};

export default HeroImage;