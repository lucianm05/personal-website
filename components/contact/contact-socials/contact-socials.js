import useTranslation from 'next-translate/useTranslation';

import classes from '/styles/contact-socials.module.css';
import ButtonGithub from '../../ui/icons/icons-buttons/button-github';
import ButtonLinkedin from '../../ui/icons/icons-buttons/button-linkedin';
import ButtonEmail from '../../ui/icons/icons-buttons/button-email';

const ContactSocials = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.ContactSocialsContainer}>
      <h2>{t('contact:contactSocialsTitle')}</h2>
      <div className={classes.ContactSocials}>
        <ButtonGithub />
        <ButtonLinkedin />
        <ButtonEmail />
      </div>
    </section>
  );
};

export default ContactSocials;
