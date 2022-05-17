import AOS from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Footer, Navbar } from '../common'
import '../styles/global-style.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      duration: 250,
      once: true,
      offset: 25,
    })
  }, [])

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
