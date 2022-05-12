import type { NextPage } from 'next'
import Head from 'next/head'
import {
  AboutUs,
  Gallery,
  Home,
  LastCall,
  Localization,
  Qualities,
  Testimonials,
  Treatments,
} from '../layout'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#F6F7F9" />
        <title>Articular Odonto</title>
        <meta name="description" content="Descrição aqui" />
        <meta name="image" content="/imgs/banner-share.png" />
        <meta property="og:url" content="https://articular-odonto.vercel.app/" />
        <meta property="og:title" content="Articular Odonto" />
        <meta property="og:description" content="Uma descrição aqui" />
        <meta property="og:image" content="/imgs/banner-share.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Articular Odonto" />
        <meta name="twitter:description" content="Uma descrição aqui" />
        <meta name="twitter:image" content="/imgs/banner-share.png" />
      </Head>
      <Home />
      <Qualities />
      <Treatments />
      <AboutUs />
      <Testimonials />
      <Gallery />
      <Localization />
      <LastCall />
    </>
  )
}

export default Index
