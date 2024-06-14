import Head from 'next/head';

export default function AppHead() {
  return <Head>
    <title>{{ title }} | {{ name }}</title>
    <meta name="title" property="og:title" content="{{ title }} | {{ name }}" />
    <meta name="description" property="og:description" content="{{ description }}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
  </Head>
}