import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>lucianmg</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
