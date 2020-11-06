import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/article/1" passHref>
            <a>
                article id: 1
            </a>
        </Link>
        <Link href="/article/2" passHref>
            <a>
                article id: 2
            </a>
        </Link>
      </main>
    </div>
  )
}
