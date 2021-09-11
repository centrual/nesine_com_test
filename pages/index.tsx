import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.scss'
// import { Grid } from 'react-virtualized'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Merhaba Nesine.com</title>
        <meta name="description" content="Nesine.com test" />
      </Head>

      {/*<Grid*/}
      {/*  cellRenderer={({ columnIndex, key, rowIndex, style }) => <div key={key} style={style}>...</div>}*/}
      {/*  columnCount={4}*/}
      {/*  columnWidth={({ index }) => 100}*/}
      {/*  height={600}*/}
      {/*  rowCount={4}*/}
      {/*  rowHeight={({ index }) => 50}*/}
      {/*  width={800}*/}
      {/*/>*/}
    </div>
  )
}

export default Home
