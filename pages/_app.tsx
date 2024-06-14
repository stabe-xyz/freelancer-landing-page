import { AppProps } from 'next/app';
import Layout from '../components/layout';
import Head from 'next/head';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
