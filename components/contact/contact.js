import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/contact.module.css';
import ContactForm from './contact-form/contact-form';
import ContactSocials from './contact-socials/contact-socials';
import ContactCv from './contact-cv/contact-cv';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.ContactContainer}>
      <h1>{t('contact:contactTitle')}</h1>
      <div className={classes.Contact}>
        <ContactForm />
        <div className={classes.ContactSocialsCv}>
          <ContactSocials />
          <ContactCv />
        </div>
      </div>
    </section>
  );
};

export default Contact;
