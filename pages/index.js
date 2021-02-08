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
          Kevin Schaefer
        </h1>

        <p className={styles.description}>
          Founder, Apple Scholar, Software Engineer, Computer Science Student
        </p>

        <div className={styles.grid}>
           <a href="https://twitter.com/schaefkn" className={styles.card}>
             <h3>Twitter &rarr;</h3>
           </a>

           <a href="https://instagram.com/schaefkn" className={styles.card}>
             <h3>Instagram &rarr;</h3>
           </a>

           <a href="https://github.com/schaefkn" className={styles.card}>
             <h3>GitHub &rarr;</h3>
           </a>

           <a href="http://linkedin.com/in/schaefkn/" className={styles.card}>
             <h3>LinkedIn &rarr;</h3>
           </a>
         </div>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️  in Stuttgart, Germany</p>
      </footer>
    </div>
  )
}
