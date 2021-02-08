import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Schaefer | Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://schaefkn.com">schaefkn.com!</a>
        </h1>

        <p className={styles.description}>
          This site is currently under construction
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️  in Stuttgart, Germany</p>
      </footer>
    </div>
  )
}
