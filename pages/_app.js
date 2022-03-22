import Head from 'next/head'
import '../styles/globals.css'

import Layout from '../components/layout/Layout.jsx'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import Hero from '../components/hero/Hero.jsx'
import Content from '../components/content/Content.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>

          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=5" />

          <title>web assesment</title>
          <meta name="description" content="web assesment Description" />
          <meta property="og:title" content="web assesment" />
          <meta property="og:description" content="web assesment Description" />
          <meta name="generator" content="Quest" />
      </Head>
      <Layout>
        <Header />
        <Hero />
        <Content />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
    ) 
}

export default MyApp
