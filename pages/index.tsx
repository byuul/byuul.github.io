import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/home.module.scss";
import Date from "../components/date";

export default function Home({ latestPosts }) {
    return (
        <Layout>
            <Head>
                <title>kimbyulyi</title>
            </Head>
            <div>
                <div className={styles.heading}>
                    <h2 className={styles.headingTitle}>Other logs</h2>
                </div>
                <ul className={utilStyles.list}>
                    {latestPosts.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
                <Link href="/posts">
                    <button className="button">View all</button>
                </Link>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const latestPosts = getSortedPostsData(10);

    return {
        props: {
            latestPosts,
        },
    };
}
