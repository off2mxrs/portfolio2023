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
      <header id='intro' className={`${styles.pod} ${styles.podHover} ${styles.noise} ${utilStyles.introPod}`}>
        <div className={`${utilStyles.introPodInner}`}>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className={`${utilStyles.introPodLower}`}>
            <div>
              <p>Ut enim ad minim ut labore et dolore.</p>
              <p className={`${utilStyles.introPodLower_p}`}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <ul className={`${utilStyles.roles}`}>
                  <li>Frontend Dev</li>
                  <li>Event Curator</li>
                  <li>Dancer</li>
                </ul>
                <h1 className={`${utilStyles.name} ${utilStyles.deskName}`}>{name}</h1>
              </div>
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
                        // objectPosition: `55%`,
                        // borderRadius: 75,
                      }}
                    />
                  <h1 className={`${utilStyles.name} ${utilStyles.mobileName}`}>{name}</h1>
                </div>
              </div>
            </div>
        </div>
      </header>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.pod} ${styles.podHover} ${styles.noise}`}>
        <div className={utilStyles.podTitle}>
          <h2 id='work' className={utilStyles.headingLg}>capradio | npr</h2>
          <span className={utilStyles.orngRect}></span>
        </div>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, category, homeImg }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}><h3>{title}</h3></Link>
            <Link href={`/posts/${id}`}>
            <Image
                priority
                src={homeImg}
                className={`${utilStyles.workImg}`}
                height={1800}
                width={1500}
                alt=""
              />
            </Link>
          </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.pod} ${styles.podHover}`}>
        <div className={utilStyles.podTitle}>
          <h2 id='resume' className={utilStyles.headingLg}>dev skills</h2>
          <span className={utilStyles.orngRect}></span>
        </div>
        <Link href={`/posts/`} className={`${utilStyles.resumeContainer}`}>
          <Image
                priority
                src={`/images/resume icon.png`}
                className={`${utilStyles.resumeIcon}`}
                height={400}
                width={400}
                alt=""
              />
          <h3 className={`${utilStyles.resumeLink}`}>resume</h3>
        </Link>

        <div className={`${utilStyles.skillsContainer}`}>
          <ul className={`${utilStyles.skills}`}>
            <li><h3>languages</h3></li>
            <li>html</li>
            <li>css | scss | less</li>
            <li>javascript | typescript</li>
            <li>python</li>
            <li>jsx</li>
          </ul>
          <ul className={`${utilStyles.skills}`}>
            <li><h3>frameworks</h3></li>
            <li>react</li>
            <li>angular</li>
            <li>docker</li>
            <li>node | express</li>
            <li></li>
          </ul>
          <ul className={`${utilStyles.skills}`}>
            <li><h3>systems</h3></li>
            <li>umbraco</li>
            <li>mailchimp</li>
            <li>blackbaud</li>
            <li>aws</li>
          </ul>
          <ul className={`${utilStyles.skills}`}>
            <li><h3>database</h3></li>
            <li>mangodb</li>
            <li>sql</li>
            <li></li>
          </ul>
          <ul className={`${utilStyles.skills}`}>
            <li><h3>seo & analytics</h3></li>
            <li>google analytics ga4 | ua</li>
            <li>google tag manager</li>
            <li>google ad manager</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.pod} ${styles.podHover}`}>
        <div className={utilStyles.podTitle}>
          <h2 id='inspo' className={utilStyles.headingLg}>inspo</h2>
          <span className={utilStyles.orngRect}></span>
        </div>

        <div>
          <div className={utilStyles.inspo}>
            <div className={utilStyles.inspoText}>
              <h3>music</h3>
              <p>public radio   sed do eiusmod tempor incididunt ut labore et dolore</p>
              <p>magna aliqua. Ut enim ad minim ut labore et dolore</p>
            </div>

            <div className={utilStyles.inspoImgCont}>
              <Image
                priority
                src={`/images/building.jpg`}
                className={`${utilStyles.inspoImg}`}
                height={400}
                width={400}
                alt=""
              />
              <Image
                priority
                src={`/images/sh.jpg`}
                className={`${utilStyles.inspoImg}`}
                height={400}
                width={400}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.pod} ${utilStyles.contactPod}`}>
          <div className={utilStyles.podTitle}>
            <h2 id='contact' className={utilStyles.headingLg}>contact</h2>
            <span className={utilStyles.orngRect}></span>
          </div>

          <div className={utilStyles.contactItems}>
            <ul className={utilStyles.contactLink}>
              <li>
                <Link href={`/#contact`}>
                  <p>linkedin</p>
                  <Image
                    priority
                    src={`/images/white linkedin logo.png`}
                    className={`${utilStyles.contactImg}`}
                    height={400}
                    width={400}
                    alt=""
                  />
                </Link> 
              </li>

              <li>
                <Link href={`/#contact`}>
                  <p>instagram</p>
                  <Image
                    priority
                    src={`/images/white linkedin logo.png`}
                    className={`${utilStyles.contactImg}`}
                    height={400}
                    width={400}
                    alt=""
                  />
                </Link> 
              </li>

              <li>
                <Link href={`/#contact`}>
                  <p>email</p>
                  <Image
                    priority
                    src={`/images/white linkedin logo.png`}
                    className={`${utilStyles.contactImg}`}
                    height={400}
                    width={400}
                    alt=""
                  />
                </Link> 
              </li>
            </ul>
          </div>      
      </section>
    </Layout>
  );
}