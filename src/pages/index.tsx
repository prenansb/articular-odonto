import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer, Navbar } from '../common'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Articular Odonto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </>
  )
}

export default Home
