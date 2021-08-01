import useTranslate from 'next-translate/useTranslation';
import Image from 'next/image';

import classes from '/styles/hero.module.css';

const Hero = () => {
  const { t } = useTranslate();

  return (
    <section className={classes.Hero}>
      <div className={classes.HeroImage}>
        <Image src={'/images/profile-picture.jpg'} alt={'Imagine cu Manea Lucian George.'} width={400} height={400} quality={100} />
      </div>
      <div className={classes.HeroTitle}>
        <h1>
          <strong>{t('common:heroText')}</strong>
        </h1>
        <Image src={'/images/underline.svg'} width={170} height={8} />
      </div>
      <em className={classes.HeroDescription}>{t('common:heroDescription')}</em>
      <div className={classes.HeroPersonalTitles}>
        <div>
          <p>{t('common:heroPersonalTitle1')}</p>
        </div>
        <div>
          <p>{t('common:heroPersonalTitle2')}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
