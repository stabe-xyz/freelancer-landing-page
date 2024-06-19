import Head from 'next/head';

export default function AppHead() {
  return <Head>
    <title>{{ stabe.title }} | {{ stabe.name }}</title>
    <meta name="title" property="og:title" content="{{ stabe.title }} | {{ stabe.name }}" />
    <meta name="description" property="og:description" content="{{ stabe.description }}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
  </Head>
}
