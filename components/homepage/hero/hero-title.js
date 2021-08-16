import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import classes from '/styles/hero-title.module.css';

const HeroTitle = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.HeroTitle}>
      <h1 itemProp='jobTitle'>
        <strong>{t('common:heroText')}</strong>
      </h1>
      <Image src={'/images/underline.svg'} width={170} height={8} alt={t('common:designImageAlt')} />
      <span className='ScreenReadersOnly' itemProp='nationality'>Romanian</span>
      <span className='ScreenReadersOnly' itemProp='telephone'>+40 726 627 973</span>
      <span className='ScreenReadersOnly' itemProp='gender'>{t('common:heroGender')}</span>
      <span className='ScreenReadersOnly' itemProp='knowsLanguage'>{t('common:heroKnowsLanguage1')}</span>
      <span className='ScreenReadersOnly' itemProp='knowsLanguage'>{t('common:heroKnowsLanguage2')}</span>
    </div>
  );
};

export default HeroTitle;
