import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Victoria y las Maquinas</title>
        <meta name="description" content="sitio oficial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
            <h1 className={styles.headingOne}>Victoria<br></br> y las Máquinas</h1>
        </header>
        <nav className={styles.menu}>
            <ul>
              <li className={styles.menuItem}>About</li>
              <li className={styles.menuItem}>Music</li>
              <li className={styles.menuItem}>Video</li>
              <li className={styles.menuItem}>Tour Dates</li>
            </ul>
        </nav>
      </main>
    </div>
  )
}
