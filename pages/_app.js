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
          <meta name='description' content={t('common:websiteDescription')} />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='robots' content='index, follow' />
          <meta property='og:title' content='lucianmg' />
          <meta property='og:description' content={t('common:websiteDescription')} />
          <meta property='og:site_name' content='lucianmg' />
          <meta property='og:type' content='profile' />
          <meta property='profile:first_name' content='Lucian George' />
          <meta property='profile:last_name' content='Manea' />
          <meta property='profile:username' content='lucianmg' />
          <meta property='profile:gender' content='male' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:locale:alternate' content='ro_RO' />
          <meta property='og:url' content='https://lucianmg.ro' />
          <meta property='og:image' content='/og-image.png' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:image:alt' content='Manea Lucian George.' />
          <meta name='twitter:site' content='@zvenko' />
          <meta name='twitter:creator' content='@zvenko' />
          <meta name='twitter:card' content='summary_large_image' />

          <meta name='application-name' content='lucianmg' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-TileColor' content='#2e4750' />
          <meta name='apple-mobile-web-app-title' content='lucianmg' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-styles' content='black-translucent' />
          <meta name='apple-touch-fullscreen' content='yes' />
          <meta name='theme-color' content='#2e4750' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='mask-icon' href='/maskable-favicon.png' color='#2e4750' />
          <link rel='icon' type='image/svg+xml' href='/safari-pinned-tab.svg' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
