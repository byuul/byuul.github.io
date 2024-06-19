import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/post.module.scss";

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta property="og:url" content="" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={postData.title} />
                <meta property="og:description" content={postData.description} />
                <meta property="og:image" content={postData.thumbnail} />
                <meta property="og:site_name" content="blog" />
            </Head>
            <article>
                <img src={postData.thumbnail} />
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
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
