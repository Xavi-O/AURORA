import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>AURORA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
          First solve the problem, then write the code&nbsp;
            <code className={styles.code}>~John Johnson</code>
          </p>
          <div>
            <a
              href="https://oxavier.000webhostapp.com"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/xavi logo.png"
                alt="Xavi Logo"
                className={""}
                width={100}
                height={36}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/aurora logo black.png"
            alt="aurora Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/aurora logo.png"
              alt="aurora"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://oxavier.000webhostapp.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Services <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Request for developer services at affordable rates and&nbsp;pricing.
            </p>
          </a>

          <a
            href="https://oxavier.000webhostapp.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Blog <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get the latest tech articles from our blog
              with&nbsp;AURORA.
            </p>
          </a>

          <a
            href="https://oxavier.000webhostapp.com/?page_id=8"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover some of the best AURORA&nbsp;projects.
            </p>
          </a>

          <a
            onClick={() => router.push('/about')}
            className={styles.card}
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about AURORA and our vision in&nbsp;tech
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
//git push master HEAD --force
//git reset --hard HEAD~3