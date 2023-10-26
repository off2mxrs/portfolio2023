import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Your Name';
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
            <li><Link href="/">intro</Link></li>
            <li><Link href="/">work</Link></li>
            <li><Link href="/">resume</Link></li>
            <li><Link href="/">contact</Link></li> 
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}