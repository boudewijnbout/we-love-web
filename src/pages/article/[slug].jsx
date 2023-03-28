import {motion} from "framer-motion";

// Styles
import styles from "../../styles/pages/Detail.module.css";

// GraphQL Queries
import {articleIdQuery, otherArticlesQuery} from "../../lib/queries";
import {GraphQLClient} from "graphql-request";

// Components
import BackLink from "../../components/detail/backLink";
import ArticleThumbnail from "../../components/detail/articleThumbnail";
import ArticleInfoCard from "../../components/detail/articleInfoCard";
import OtherArticles from "../../components/detail/otherArticles";

// Fonts
import {Rubik} from "next/font/google";
import Head from "next/head";

const rubik = Rubik({subsets: ["latin"]});
const cx = (...classNames) => classNames.join(" ");

export default function ArticleDetail({articleData, otherArticlesData}) {

    articleData = articleData.article;

    return (
        <>
            {/* Head */}
            <Head>
                <title>We Love Web | Blog</title>
                <meta
                    name="description"
                    content="A blog website to view all previous we love web sessions"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Back to overview */}
            <BackLink/>

            <main className={styles.main}>

                {/* Article image & title */}
                <ArticleThumbnail articleData={articleData}/>

                {/* Article additional info*/}
                <section className={styles.aside}>
                    <ArticleInfoCard authorName={articleData.author.name} authorImage={articleData.author.image.url}
                                     articleDescription={articleData.shortDescription} createdAt={articleData.createdAt} updatedAt={articleData.updatedAt}/>

                    {/* Article body text */}
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}
                                className={cx(styles.articleBody, rubik.className)}
                                dangerouslySetInnerHTML={{__html: articleData.body.html}}/>
                </section>

                {/* Other articles */}
                <OtherArticles otherArticlesData={otherArticlesData}/>
            </main>
        </>
    );
}

export async function getServerSideProps({query}) {
    const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);

    const articleData = await hygraph.request(articleIdQuery, {
        slug: query.slug,
    });

    const otherArticlesData = await hygraph.request(otherArticlesQuery);

    return {
        props: {
            articleData,
            otherArticlesData,
        },
    };
}
