import type { NextPage } from 'next'
import Head from 'next/head'
import { Home, LastCall, Location, Qualities } from '../layout'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Articular Odonto</title>
      </Head>
      <Home />
      <Qualities />
      <Location />
      <LastCall />
    </>
  )
}

export default Index
