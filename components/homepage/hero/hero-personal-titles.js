import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/hero-personal-titles.module.css';
import IconStudent from '../../ui/icons/icon-student';
import IconVolunteer from '../../ui/icons/icon-volunteer';

const HeroPersonalTitles = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default HeroPersonalTitles;
