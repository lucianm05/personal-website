import useTranslate from 'next-translate/useTranslation';
import Image from 'next/image';

import classes from '/styles/hero.module.css';
import IconStudent from '../../ui/icons/icon-student';
import IconVolunteer from '../../ui/icons/icon-volunteer';

const Hero = () => {
  const { t } = useTranslate();

  return (
    <section className={classes.HeroContainer}>
      <div className={classes.Hero}>
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
          <div className={classes.HeroPersonalTitlesContent1}>
            <IconStudent />
            <p>{t('common:heroPersonalTitle1')}</p>
          </div>
          <div className={classes.HeroPersonalTitlesContent2}>
            <IconVolunteer />
            <p>{t('common:heroPersonalTitle2')}</p>
          </div>
          <div className={classes.HeroPersonalTitlesBackground1}></div>
          <div className={classes.HeroPersonalTitlesBackground2}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
