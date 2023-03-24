import Image from "next/image";

// Styles
import styles from "../../styles/components/detail/articleInfoCard.module.css";

export default function articleInfoCard({authorName, authorImage}) {
    return (
        <>
            <section className={styles.section}>

                <span>Auteur:</span>

                <div className={styles.div}>
                    {/* Author image */}
                    <picture className={styles.picture}>
                        <Image src={authorImage} width="250" height="250"/>
                    </picture>

                    <p>{authorName}</p>
                </div>


            </section>
        </>
    )
}