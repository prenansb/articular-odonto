import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'swiper/css'
import 'swiper/css/navigation'
import { Footer, Navbar } from '../common'
import '../styles/global-style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/mulish-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
