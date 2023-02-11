import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>About AURORA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a className={styles.back} onClick={() => router.back()}>
              <h2>
                <span> &larr;</span>{' '}
              </h2>
              
              <Image
                src="/aurora logo black.png"
                alt="Aurora Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
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
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Who we are
            </h2>
            <p className={inter.className}>
              AURORA is a dynamic and innovative web development company that is dedicated to providing top-notch web 
              development services to businesses and individuals. With a team of highly skilled and experienced web 
              developers, we are committed to delivering exceptional solutions that are tailored to meet the unique 
              needs of our clients. Our passion for delivering cutting-edge technology and unparalleled customer 
              service has made us a leader in the web development industry. At Aurora, we believe in the power of 
              technology to transform and enhance the online presence of our clients, and we are dedicated to helping 
              them achieve their goals through innovative and impactful web development solutions.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Our company
            </h2>
            <p className={inter.className}>
              At AURORA, we understand the omprotance of having a strong presence in the digital world. That is why we 
              work closely with our clients to understand their needs and develop custom web development solutions 
              that are tailored to meet their unique requirements. Whether you are looking to build a new website from scratch, revamp an existing one, or simply need 
              help with web maintenance, our team is here to help.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              <blockquote>“Make it work, make it right, make it fast.”</blockquote>
            </h2>
            <p className={inter.className}>
              ~ Kent Beck
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Company Values
            </h2>
            <p className={inter.className}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum 
              qui dolorem eum fugiat quo voluptas nulla pariatur. Neque porro quisquam est, qui dolorem ipsum quia 
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
