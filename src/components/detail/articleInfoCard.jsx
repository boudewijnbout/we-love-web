import Image from "next/image";

// Styles
import styles from "../../styles/components/detail/articleInfoCard.module.css";

// Fonts
import {Rubik} from "next/font/google";

const rubik = Rubik({subsets: ["latin"]});

export default function articleInfoCard({authorName, authorImage, articleDescription}) {
    return (
        <>
            <section className={styles.section}>

                <span className={rubik.className}>Auteur:</span>

                {/* Author info */}
                <div className={styles.authorInfo}>
                    {/* Author image */}
                    <picture>
                        <Image src={authorImage} width="250" height="250"/>
                    </picture>

                    {/* Author name */}
                    <p className={rubik.className}>{authorName}</p>
                </div>

                {/* Short description */}
                <div className={styles.shortDescription}>
                    <span className={rubik.className}>Introductie:</span>
                    <p className={rubik.className}>{articleDescription}</p>
                </div>

                {/* Create & Update date */}
                <div className={styles.articleDates}>
                    <div>
                        <span className={rubik.className}>Datum toegevoegd:</span>
                        <p className={rubik.className}>09-03-2023</p>
                    </div>
                    <div>
                        <span className={rubik.className}>Laatst gewijzigd:</span>
                        <p className={rubik.className}>15-03-2023</p>
                    </div>
                </div>
            </section>
        </>
    )
}