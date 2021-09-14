import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CouponProvider } from '@providers/couponProvider'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Merhaba Nesine.com</title>
      </Head>

      <CouponProvider>
        <Component {...pageProps} />
      </CouponProvider>
    </>
  )
}
export default App
