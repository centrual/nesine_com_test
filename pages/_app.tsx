import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Merhaba Nesine.com</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
export default MyApp
