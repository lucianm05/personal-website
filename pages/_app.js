import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import '../styles/globals.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>lucianmg</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='robots' content='index, follow' />
        <meta name='description' content={t('common:websiteDescription')} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
