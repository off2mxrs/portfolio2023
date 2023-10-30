import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


export const siteTitle = 'Portfolio';

export default function Layout({ children, home }) {
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
      <nav>
        <ul>
            <li><Link href="/#intro">intro</Link></li>
            <li><Link href="/#work">work</Link></li>
            <li><Link href="/#resume">resume</Link></li>
            <li><Link href="/#inspo">inspo</Link></li>
            <li><Link href="/#contact">contact</Link></li> 
        </ul>
      </nav>
      <main>{children}</main>
      <footer>est 2023</footer>
    </div>
  );
}