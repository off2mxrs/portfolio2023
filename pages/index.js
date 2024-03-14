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
      <header id='intro' className={`${utilStyles.intro}  ${styles.podHover} ${utilStyles.introPod}`}>
        <div className={`${utilStyles.introPodInner}`}>
            <p>Frontend development has become my channel for harmonizing all of my creative energy toward one refined objective: curating experiences through digital products.</p>
          <div className={`${utilStyles.introPodLower}`}>
            <div>
              <p>Theres no better joy than being part of a team that leaves a meaningful imprint on the greater community.</p>
              <p className={`${utilStyles.introPodLower_p}`}>I'm an artist thru & thru. Design thinking keeps me true! - Welcome ;)</p>
              <div>
                <ul className={`${utilStyles.roles}`}>
                  <li>dev</li>
                  <li>curator</li>
                  <li>dancer</li>
                  <li>multimedia</li>
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
                alt={title}
                title={title}
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

        <div className={utilStyles.resumeContainer}>
        <Link href={`https://docs.google.com/document/d/1U6mxP124SfAGQneyc8BB8VLh7jybvqnuVFP4H_hf7Ec/edit?usp=sharing`} target="_blank" rel="noopener noreferrer" className={`${utilStyles.resumeFlex}`}>
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
        </div>
        
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
            <li>node | express</li>
            <li></li>
          </ul>
          <ul className={`${utilStyles.skills}`}>
            <li><h3>systems</h3></li>
            <li>umbraco</li>
            <li>mailchimp</li>
            <li>blackbaud</li>
            <li>aws</li>
            <li>docker</li>
          </ul>
          <ul className={`${utilStyles.skills}`}>
            <li><h3>database</h3></li>
            <li>mangodb</li>
            <li>heroku</li>
            <li>mysql</li>
            <li></li>
          </ul>
          <ul className={`${utilStyles.skills}`}>
            <li><h3>seo & analytics</h3></li>
            <li>google analytics ga4 | ua</li>
            <li>google tag manager</li>
            <li>google ad manager</li>
            <li>cloudflare</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.pod} ${styles.podHover}`}>
        <div className={utilStyles.podTitle}>
          <h2 id='roses' className={utilStyles.headingLg}>roses</h2>
          <span className={utilStyles.orngRect}></span>

          <p className={utilStyles.roseP}><em>Rose, Bud, Thorns is a way to celebrate, look forward, and reflect.</em></p> 

          <div className={`${utilStyles.rosesImgCont}`}>
        <Image
                priority
                src={`/images/seo.png`}
                className={`${utilStyles.rosesImg}`}
                height={300}
                width={400}
                alt=""
              />
        <Image
                priority
                src={`/images/conversions.png`}
                className={`${utilStyles.rosesImg}`}
                height={300}
                width={400}
                alt=""
              />
        <Image
                priority
                src={`/images/ga.png`}
                className={`${utilStyles.rosesImg}`}
                height={300}
                width={400}
                alt=""
              />
          </div>
        </div>
        </section>

      <section className={`${styles.pod} ${styles.podHover}`}>
        <div className={utilStyles.podTitle}>
          <h2 id='inspo' className={utilStyles.headingLg}>inspo</h2>
          <span className={utilStyles.orngRect}></span>
        </div>

        <div className={utilStyles.inspoCont}>
          <div className={utilStyles.inspo}>
            <div className={utilStyles.inspoText}>
              <h3>Dance | Music</h3>
              <p>Ah, my first passions awakened. A minute hardly slips by without me "bustin' a move" or "hummin' a tune" (mentally counts too!). </p>
              <p>I am totally enamored with <em>movers</em> and <em>vocalists</em>. They are my superheroes.</p>
            </div>

            <div className={utilStyles.inspoImgCont}>
              <Image
                priority
                src={`/images/dance.jpg`}
                className={`${utilStyles.inspoImg}`}
                height={400}
                width={400}
                alt=""
              />
              <Image
                priority
                src={`/images/disco.jpg`}
                className={`${utilStyles.inspoImg}`}
                height={400}
                width={400}
                alt=""
              />
            </div>
          </div>
  
          <div className={`${utilStyles.inspo} ${utilStyles.inspoRev}`}>
            <div className={`${utilStyles.inspoText} ${utilStyles.inspoTextRev}`}>
              <h3>Engineer | Creative </h3>
              <p>I am a complete tinkerer. Iteration just comes naturally. I pride myself on being very thorough (<em>ok I guess a "perfectionist"</em>).</p>
              <p>I'm constantly inspired. Always bouncing between digital and physical projects. My list is ever-growing! Somehow, I even found my way into aquascaping.</p>
            </div>

            <div className={`${utilStyles.inspoImgCont} ${utilStyles.inspoImgContRev}`}>
              <Image
                priority
                src={`/images/workspace2.jpg`}
                className={`${utilStyles.inspoImg}`}
                height={400}
                width={400}
                alt=""
              />
              <Image
                priority
                src={`/images/sitl.jpg`}
                className={`${utilStyles.inspoImg}`}
                height={400}
                width={400}
                alt=""
              />
            </div>
          </div>

          <div className={`${utilStyles.inspo}`}>
            <div className={`${utilStyles.inspoText}`}>
              <h3>Travel | Fantasy</h3>
              <p>I can't help but view the world through my own special lens. I embrace the unique subtleties of man-made and natural environments everywhere I go. </p>
              <p>I want to say this comes from my admiration of fantasy worlds. I've racked up countless hours engaged in content with swords, greenery, magic, and whatnot.</p>
            </div>

            <div className={`${utilStyles.inspoImgCont}`}>
              <Image
                priority
                src={`/images/boat.jpg`}
                className={`${utilStyles.inspoImg}`}
                height={400}
                width={400}
                alt=""
              />
              <Image
                priority
                src={`/images/fantasy2.jpg`}
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
                <a href='https://www.linkedin.com/in/marshawndavidson' target="_blank" rel="noopener noreferrer">
                  <p>linkedin</p>
                </a> 
              </li>

              <li>
                <a href='https://github.com/off2mxrs' target="_blank" rel="noopener noreferrer">
                  <p>github</p>
                </a> 
              </li>

              <li>
                <a href='mailto:marshawndavidson@gmail.com?subject=[Portfolio] Hello Mars!'>
                  <p>email</p>
                </a> 
              </li>
            </ul>
          </div>      
      </section>
    </Layout>
  );
}