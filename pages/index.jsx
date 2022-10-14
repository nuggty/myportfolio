import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <main className={styles.main}>
        <div>
          <p>
            Bem vindo, eu sou
          </p>
          <h1 className={styles.title}>Robert Pereira.</h1>
          <h1 className={styles.segundoTitle}>Faço aplicações web.</h1>
        </div>
      </main>

    </div>
  )
}
