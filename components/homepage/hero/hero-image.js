import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/hero-image.module.css';

const HeroImage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Link href={t('common:linkedinButtonLink')}>
        <a className={classes.HeroImage} aria-label={t('common:linkedinButtonLabel')} target='_blank' rel='noreferref noopener'>
          <Image src={'/images/profile-picture.jpg'} alt={'Imagine cu Manea Lucian George.'} width={400} height={400} quality={100} />
        </a>
      </Link>
      <div className={classes.HeroName}>
        <p>Manea Lucian George</p>
      </div>
    </Fragment>
  );
};

export default HeroImage;
