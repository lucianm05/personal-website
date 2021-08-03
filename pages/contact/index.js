import Head from 'next/head';
import { Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>{t('contact:contactPageDocumentTitle')}</title>
      </Head>
    </Fragment>
  );
};

export default ContactPage;
