import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/language-picker.module.css';
import IconEN from '../../ui/icons/icon-en';
import IconRO from '../../ui/icons/icon-ro';
import IconArrowLeft from '../../ui/icons/icon-arrow-left';
import { Fragment } from 'react';

const LanguagePicker = () => {
  const { t } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const router = useRouter();

  const setShowLanguagesHandler = () => {
    setShowLanguages((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={classes.LanguagePicker + ' ' + (showLanguages ? classes.LanguagePickerActive : '')}>
        <button onClick={setShowLanguagesHandler} className={classes.LanguagePickerButton + ' ' + (showLanguages ? classes.LanguagePickerButtonRotated : '')} type='button' aria-label={t('common:languageButtonLabel')}>
          <IconArrowLeft />
        </button>
        <div className={classes.Languages} onClick={setShowLanguagesHandler}>
          <Link href={`${router.asPath}`} locale={'en'}>
            <a className={classes.Language} aria-label='Press to switch to English.'>
              <IconEN />
            </a>
          </Link>
          <Link href={`${router.asPath}`} locale={'ro'}>
            <a className={classes.Language} aria-label='Press to switch to Romanian.'>
              <IconRO />
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LanguagePicker;
