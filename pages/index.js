import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

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
      <header id='intro' className={`${utilStyles.headingMd} ${utilStyles.portContainer}`}>
        <div>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p>Ut enim ad minim ut labore et dolore.</p>
          <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <Image
                priority
                src={'/images/profile.jpg'}
                className={''}
                height={140}
                width={115}
                alt=""
              />
          </div>
          <h1>mosaicmars</h1>
      </header>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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

      <section>
        <h2 id='resume' className={utilStyles.headingLg}>dev skills</h2>
      </section>

      <section>
        <h2 id='inspo' className={utilStyles.headingLg}>inspo</h2>
      </section>

      <section>
        <h2 id='contact' className={utilStyles.headingLg}>contact</h2>
      </section>
    </Layout>
  );
}