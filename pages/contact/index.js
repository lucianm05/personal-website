import Head from 'next/head';
import { Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Contact from '../../components/contact/contact';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>{t('contact:contactPageDocumentTitle')}</title>
      </Head>
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
