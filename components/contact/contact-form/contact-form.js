import { useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch } from 'react-redux';
import { notificationActions } from '../../../store/notification';

import classes from '/styles/contact-form.module.css';
import ContactFormFieldset from './contact-form-fieldset';
import IconPerson from '../../ui/icons/icon-person';
import IconEmail from '../../ui/icons/icon-email';
import IconMessage from '../../ui/icons/icon-message';
import IconSend from '../../ui/icons/icon-send';

const ContactForm = () => {
  const { t } = useTranslation();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const honeyInputRef = useRef();
  const templateInputRef = useRef();
  const captchaInputRef = useRef();

  const dispatch = useDispatch();

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;
    const honey = honeyInputRef.current.value;
    const template = templateInputRef.current.value;
    const captcha = captchaInputRef.current.value;

    const formData = {
      name,
      email,
      message,
      _honey: honey,
      _template: template,
      _captcha: captcha,
    };

    let response;

    try {
      response = await fetch('https://formsubmit.co/lucianmg05@gmail.com', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response) {
        dispatch(
          notificationActions.toggle({
            showNotification: true,
            status: 'success',
            title: t('contact:notificationSuccessTitle'),
            message: t('contact:notificationSuccessMessage'),
          })
        );

        nameInputRef.current.value = '';
        emailInputRef.current.value = '';
        messageInputRef.current.value = '';
      }
    } catch (error) {
      if (error) {
        dispatch(
          notificationActions.toggle({
            showNotification: true,
            status: 'error',
            title: t('contact:notificationErrorTitle'),
            message: t('contact:notificationErrorMessage'),
          })
        );
      }
    }
  };

  return (
    <section className={classes.ContactFormContainer}>
      <h2>{t('contact:contactFormTitle')}</h2>
      <form className={classes.ContactForm} onSubmit={sendMessageHandler}>
        <ContactFormFieldset name='name'>
          <input aria-label={t('contact:nameLegend')} className={classes.ContactFormInput} type='text' placeholder={t('contact:namePlaceholder')} required ref={nameInputRef} />
          <IconPerson />
        </ContactFormFieldset>
        <ContactFormFieldset name='email'>
          <input aria-label={t('contact:emailLegend')} className={classes.ContactFormInput} type='email' placeholder={t('contact:emailPlaceholder')} required ref={emailInputRef} />
          <IconEmail />
        </ContactFormFieldset>
        <ContactFormFieldset name='message'>
          <textarea aria-label={t('contact:messageLegend')} rows={5} className={classes.ContactFormTextarea} placeholder={t('contact:messagePlaceholder')} required ref={messageInputRef}></textarea>
          <IconMessage />
        </ContactFormFieldset>
        <input type='text' name='_honey' style={{ display: 'none' }} ref={honeyInputRef} />
        <input type='hidden' name='_template' value='box' ref={templateInputRef} />
        <input type='hidden' name='_captcha' value='true' ref={captchaInputRef} />
        <button className={classes.ContactFormButton} aria-label={t('contact:contactFormButtonLabel')}>
          <IconSend />
          <span>{t('contact:contactFormButtonText')}</span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
