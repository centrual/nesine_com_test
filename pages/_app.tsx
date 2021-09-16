import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CouponSelectionProvider } from '@providers/couponSelectionProvider/couponSelectionProvider'

import '../styles/globals.css'
import 'react-virtualized/styles.css'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Merhaba Nesine.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <CouponSelectionProvider>
        <Component {...pageProps} />
      </CouponSelectionProvider>
    </>
  )
}
export default App
