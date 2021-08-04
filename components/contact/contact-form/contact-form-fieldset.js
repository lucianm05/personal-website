import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/contact-form-fieldset.module.css';

const ContactFormFieldset = ({ children, name }) => {
  const { t } = useTranslation();

  return (
    <fieldset className={classes.ContactFormFieldset}>
      <legend className='ScreenReadersOnly' aria-label={t(`contact:${name}Legend`)}>
        {t(`contact:${name}Legend`)}
      </legend>
      <label className={classes.ContactFormLabel}>
        <span aria-label={t(`contact:${name}Label`)}>{t(`contact:${name}Label`)}</span>
        <div>{children}</div>
      </label>
    </fieldset>
  );
};

export default ContactFormFieldset;
