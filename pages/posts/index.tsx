import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>All blog</title>
            </Head>
            <div>
                <h2>All blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
                <Link href="/">
                    <button className="button">← Back home</button>
                </Link>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData(0);
    return {
        props: {
            allPostsData,
        },
    };
}
