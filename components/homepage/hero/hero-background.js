import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/hero-background.module.css';

const HeroBackground = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.HeroBackground}>
      <div className={classes.HeroBackgroundImageMobile}>
        <Image src={'/images/hero-waves-mobile.png'} alt={t('common:designImageAlt')} width={1920} height={597} />
      </div>
      <div className={classes.HeroBackgroundImageDesktop}>
        <Image src={'/images/hero-waves-desktop.png'} alt={t('common:designImageAlt')} width={1920} height={1080} />
      </div>
      <div className={classes.HeroBackgroundImage4k}>
        <Image src={'/images/hero-waves-desktop.png'} alt={t('common:designImageAlt')} width={3840} height={2160} />
      </div>
    </div>
  );
};

export default HeroBackground;
