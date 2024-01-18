import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingLg}>{postData.title}</h1>

        <div className={utilStyles.workDetails}>
          <small className={utilStyles.workLabels}>
                <p>{postData.category}</p>
                <p>{postData.date}</p>
              </small>
          <Image
                  priority
                  src={postData.image}
                  className={''}
                  height={400}
                  width={400}
                  alt=""
                />
        </div>
       
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}