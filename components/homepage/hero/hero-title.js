import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import classes from '/styles/hero-title.module.css';

const HeroTitle = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.HeroTitle}>
      <h1>
        <strong>{t('common:heroText')}</strong>
      </h1>
      <Image src={'/images/underline.svg'} width={170} height={8} />
    </div>
  );
};

export default HeroTitle;
