import type { NextPage } from 'next'
import Head from 'next/head'
import { PopUp } from '../common'
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
    <main>
      <Head>
        <meta name="theme-color" content="#F6F7F9" />
        <title>Articular Odonto | Sua clínica odontológica popular</title>
        <meta
          name="description"
          content="Obtenha os melhores serviços odontológicos pelo melhor preço. Cuide da sua saúde bocal."
        />
        <meta
          name="image"
          content="https://articularodonto.com.br/imgs/banner-share.png"
        />
        <meta property="og:url" content="https://articularodonto.com.br" />
        <meta
          property="og:title"
          content="Articular Odonto | Sua clínica odontológica popular"
        />
        <meta
          property="og:description"
          content="Obtenha os melhores serviços odontológicos pelo melhor preço. Cuide da sua saúde bocal."
        />
        <meta
          property="og:image"
          content="https://articularodonto.com.br/imgs/banner-share.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PopUp />

      <Home />
      <Qualities />
      <Treatments />
      <AboutUs />
      <Testimonials />
      <Gallery />
      <Localization />
      <LastCall />
    </main>
  )
}

export default Index
