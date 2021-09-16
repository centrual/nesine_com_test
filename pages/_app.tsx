import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CouponProvider } from '@providers/couponProvider'

import '../styles/globals.css'
import 'react-virtualized/styles.css'

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
