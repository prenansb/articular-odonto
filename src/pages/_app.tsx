import type { AppProps } from 'next/app'
import 'swiper/css'
import 'swiper/css/navigation'
import { Footer, Navbar } from '../common'
import '../styles/global-style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
