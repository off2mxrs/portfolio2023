import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';
import pfp from '../public/images/profile.jpg';

const name = 'marshawn';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header id='intro' className={`${styles.pod} ${styles.noise} ${utilStyles.introPod}`}>
        <div className={`${utilStyles.introPodInner}`}>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className={`${utilStyles.introPodLower}`}>
            <div>
              <p>Ut enim ad minim ut labore et dolore.</p>
              <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className={`${utilStyles.roles}`}>
                <li>Frontend Dev</li>
                <li>Event Curator</li>
                <li>Dancer</li>
              </ul>
              <h1 className={`${utilStyles.name} ${utilStyles.deskName}`}>{name}</h1>
            </div>
            <div className={`${utilStyles.outerPfpSect}`}>
              <div className={`${utilStyles.pfpSect}`}>
                <Image
                      priority
                      src={pfp}
                      className={`${utilStyles.pfp}`}
                      placeholder='blur'
                      sizes="100vw"
                      alt={name}
                      title={name}
                      style={{
                        height: 'auto',
                        objectFit: 'cover',
                        aspectRatio: '0.8',
                        objectPosition: `55%`,
                        // borderRadius: 75,
                      }}
                    />
                  <h1 className={`${utilStyles.name} ${utilStyles.mobileName}`}>{name}</h1>
                </div>
              </div>
            </div>
        </div>
      </header>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.pod} ${styles.noise}`}>
        <h2 id='work' className={utilStyles.headingLg}>work</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, image }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <Link href={`/posts/${id}`}>
            <Image
                priority
                src={image}
                className={''}
                height={600}
                width={600}
                alt=""
              />
            </Link>
          </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.pod}`}>
        <h2 id='resume' className={utilStyles.headingLg}>dev skills</h2>
      </section>

      <section className={`${styles.pod}`}>
        <h2 id='inspo' className={utilStyles.headingLg}>inspo</h2>
      </section>

      <section className={`${styles.pod}`}>
        <h2 id='contact' className={utilStyles.headingLg}>contact</h2>
      </section>
    </Layout>
  );
}