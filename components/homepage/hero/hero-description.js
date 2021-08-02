import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/hero-description.module.css';

const HeroDescription = () => {
  const { t } = useTranslation();

  return <em className={classes.HeroDescription}>{t('common:heroDescription')}</em>;
};

export default HeroDescription;
