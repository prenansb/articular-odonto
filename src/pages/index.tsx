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
        <meta property="og:site_name" content="Articular Odonto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Articular Odonto" />
        <meta name="twitter:description" content="Uma descrição aqui" />
        <meta
          name="twitter:image"
          content="https://articular-odonto.vercel.app/imgs/banner-share.png"
        />
        <meta
          name="twitter:image:src"
          content="https://articular-odonto.vercel.app/imgs/banner-share.png"
        />
        <meta name="twitter:site" content="@rocketseat" />
        <meta name="twitter:creator" content="@rocketseat" />
        <meta name="twitter:image:alt" content="Boost yourself" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
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
