import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Navbar } from '../common'
import { Hero, Qualities, LastCall } from '../layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Articular Odonto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Qualities />
      <LastCall />
      <Footer />
    </>
  )
}

export default Home
