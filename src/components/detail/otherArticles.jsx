// Styles
import styles from "../../styles/components/detail/otherArticles.module.css";

// Fonts
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

// Components
import OtherArticle from "./otherArticle";

export default function otherArticles({otherArticlesData}) {
    otherArticlesData = otherArticlesData.articles;

    return (
        <>
            <section className={styles.section}>

                {/* Section title */}
                <h2 className={rubik.className}>Andere artikelen</h2>

                {/* Other articles wrapper */}
                <div className={styles.otherArticlesWrapper}>
                    {otherArticlesData.map((article) => (
                        <OtherArticle key={article.id} title={article.title} slug={article.slug} image={article.image.url}
                                      authorImage={article.author.image.url} authorName={article.author.name}
                                      readTime={article.readTime}/>
                    ))}
                </div>
            </section>
        </>
    )
}