import styles from "../styles/components/mainInfoArticle.module.css";

interface mainInfoArticleProps {
    title: string,
    image: string,
    authorImage: string,
    authorName: string,
}

export default function mainInfoArticle({title, image, authorImage, authorName}: mainInfoArticleProps) {
    return (
        <>
            <article className={styles.article}>
                <div className={styles.authorInfo}>
                    <picture>
                        <img src={authorImage} alt="" />
                    </picture>
                    <p>{authorName}</p>
                </div>

                <picture className={styles.articleThumbnail}>
                    <img src={image} />
                </picture>
            </article>
        </>
    )
}