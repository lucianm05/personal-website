import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/contact-cv.module.css';
import ButtonCv from '../../ui/icons/icons-buttons/button-cv';

const ContactCv = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.ContactCvContainer}>
      <h2>{t('contact:contactCvTitle')}</h2>
      <div className={classes.ContactCv}>
        <div>
          <ButtonCv lang='RO' />
          <span>RO</span>
        </div>
        <div>
          <ButtonCv lang='EN' />
          <span>EN</span>
        </div>
      </div>
    </section>
  );
};

export default ContactCv;
