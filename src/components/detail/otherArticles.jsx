// Styles
import styles from "../../styles/components/detail/otherArticles.module.css";

// Components
import OtherArticle from "./otherArticle";

export default function otherArticles({otherArticlesData}) {
    otherArticlesData = otherArticlesData.articles;

    return (
        <>
            <section className={styles.section}>
                <h1>Andere artikelen</h1>

                <div className={styles.otherArticlesWrapper}>
                    {otherArticlesData.map((article) => (
                        <OtherArticle key={article.id} title={article.title} image={article.image.url}
                                      authorImage={article.author.image.url} authorName={article.author.name}
                                      readTime={article.readTime}/>
                    ))}
                </div>
            </section>
        </>
    )
}