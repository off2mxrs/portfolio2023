import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navigation from './nav';


export const siteTitle = 'Portfolio Mars';

export default function Layout({ children, home }) {
  if (home) {
    return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/images/mars.jpg" />
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
        <footer className={styles.footer}>
          <p><em>marshawndavidson.dev est 2023</em></p>
        </footer>
      </div>
    );
  } else {
    // showPage layout
    return (
     <div>
        <Head>
          <link rel="icon" href="/images/mars.jpg" />
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
      <header className={styles.showPageHead}>
          <Navigation />
        </header>

      <div className={`${styles.container} ${styles.showPage}`}>

        <main className={styles.showPageContainer}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p><em>marshawndavidson.dev est 2023</em></p>
        </footer>
      </div>
     </div>
    );
  }
}
