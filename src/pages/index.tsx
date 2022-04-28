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
        <title>Articular Odonto</title>
      </Head>
      <Home />
      <Qualities />
      {/* <Treatments /> */}
      {/* <AboutUs /> */}
      {/* <Testimonials /> */}
      {/* <Gallery /> */}
      {/* <Localization /> */}
      {/* <LastCall /> */}
    </>
  )
}

export default Index
