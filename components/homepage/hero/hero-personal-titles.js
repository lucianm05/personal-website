import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import classes from '/styles/hero-personal-titles.module.css';
import IconStudent from '../../ui/icons/icon-student';
import IconVolunteer from '../../ui/icons/icon-volunteer';
import IconJob from '../../ui/icons/icon-job';

const HeroPersonalTitles = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.HeroPersonalTitles}>
      <div className={classes.HeroPersonalTitlesJob}>
        <IconJob />
        <p itemProp='jobTitle'>
          Frontend Developer @
          <Link href='https://webamboos.com'>
            <a aria-label={t('common:detailsButtonLabel')} title={t('common:detailsButtonLabel')} target='_blank' rel='noreferrer noopener'>
              webamboos
            </a>
          </Link>
        </p>
      </div>
      <div className={classes.HeroPersonalTitlesContent1}>
        <IconStudent />
        <p itemProp='jobTitle'>{t('common:heroPersonalTitle1')}</p>
      </div>
      <div className={classes.HeroPersonalTitlesContent2}>
        <IconVolunteer />
        <p itemProp='jobTitle'>{t('common:heroPersonalTitle2')}</p>
      </div>
    </div>
  );
};

export default HeroPersonalTitles;
