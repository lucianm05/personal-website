import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/hero-background.module.css';

const HeroBackground = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.HeroBackground}>
      <div className={classes.HeroBackgroundImage1}>
        <Image src={'/images/hero-waves.png'} alt={t('common:designImageAlt')} width={1920} height={597} />
      </div>
      <div className={classes.HeroBackgroundImage2}>
        <Image src={'/images/hero-waves.png'} alt={t('common:designImageAlt')} width={1920} height={597} />
      </div>
      <div className={classes.HeroBackgroundImage3}>
        <Image src={'/images/hero-waves.png'} alt={t('common:designImageAlt')} width={1920} height={597} />
      </div>
    </div>
  );
};

export default HeroBackground;