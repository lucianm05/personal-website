import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import classes from '/styles/navigation.module.css';
import Logo from '../../ui/logo/logo';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <header className={classes.Header}>
      <nav className={classes.Navigation}>
        <Link href='/projects'>
          <a className={classes.NavigationLink} aria-label={t('common:navLink1Label')}>
            {t('common:navLink1')}
          </a>
        </Link>
        <Link href='/'>
          <a className={classes.NavigationLogo} aria-label={t('common:navLogoLabel')}>
            <Logo />
          </a>
        </Link>
        <Link href='/contact'>
          <a className={classes.NavigationLink} aria-label={t('common:navLink2Label')}>
            {t('common:navLink2')}
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
