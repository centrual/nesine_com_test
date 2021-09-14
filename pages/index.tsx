import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.scss'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Merhaba Nesine.com</title>
        <meta name="description" content="Nesine.com test" />
      </Head>

      <div className={styles.container}>Merhaba Nesine.com 🖐</div>
    </>
  )
}

export default Index
