import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { Provider } from 'react-redux';

import '../styles/globals.css';
import Layout from '../components/layout/layout';
import store from '../store/index';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
