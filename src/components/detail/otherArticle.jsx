import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../../styles/components/detail/otherArticle.module.css";

export default function otherArticle({image, authorImage, authorName, readTime}) {
    return (
        <>
            <Link href="/">
                <article className={styles.otherArticle}>

                    {/* Article thumbnail image */}
                    <picture className={styles.otherArticleThumbnail}>
                        <img src={image} alt="" fill/>
                    </picture>
                </article>
            </Link>
        </>
    )
}