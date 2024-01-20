import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navigation from './nav';


export const siteTitle = 'Portfolio';

export default function Layout({ children, home }) {
  if (home) {
    return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content=""
          />
          <meta
            property="og:image"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        
        <header>
          <Navigation />
        </header>

        <main>
          {children}
        </main>
        <footer>est 2023</footer>
      </div>
    );
  } else {
    // showPage layout
    return (
     <div>
      <header className={styles.showPageHead}>
          <Navigation />
        </header>

      <div className={`${styles.container} ${styles.showPage}`}>

        <main className={styles.showPageContainer}>
          {children}
        </main>
      </div>
      <footer className={styles.footer}>Custom footer for non-home page</footer>
     </div>
    );
  }
}
