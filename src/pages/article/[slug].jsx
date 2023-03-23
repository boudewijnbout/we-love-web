import {articleIdQuery} from "../../lib/queries";
import {GraphQLClient} from "graphql-request";

// Styles
import styles from "../../styles/pages/Detail.module.css";

// Components
import BackLink from "../../components/detail/backLink";
import ArticleThumbnail from "../../components/detail/articleThumbnail";
import ArticleInfoCard from "../../components/detail/articleInfoCard";

export default function ArticleDetail({articleData}) {

    articleData = articleData.article;

    return (
        <>
            {/* Back to overview */}
            <BackLink/>

            <main className={styles.main}>

                {/* Article image & title */}
                <ArticleThumbnail articleData={articleData}/>

                {/* Article additional info*/}
                <aside className={styles.aside}>
                    <ArticleInfoCard authorName={articleData.author.name} authorImage={articleData.author.image.url}/>
                </aside>
            </main>
        </>
    );
}

export async function getServerSideProps({query}) {
    const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);

    const articleData = await hygraph.request(articleIdQuery, {
        slug: query.slug,
    });

    return {
        props: {
            articleData,
        },
    };
}
