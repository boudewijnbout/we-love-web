import Image from "next/image";

// Styles
import styles from "../../styles/components/detail/articleInfoCard.module.css";

export default function articleInfoCard({authorName, authorImage}) {
    return (
        <>
            <div className={styles.div}>
                <span>Auteur:</span>

                <picture className={styles.picture}>
                    <Image src={authorImage} width="250" height="250"/>
                </picture>
                <p>{authorName}</p>
            </div>
        </>
    )
}