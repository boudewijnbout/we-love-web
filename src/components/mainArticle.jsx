import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

// Styles
import styles from "../styles/components/mainArticle.module.css";

// Fonts
import {Rubik} from "next/font/google";
const dDicapslock = localFont({ src: "../../public/fonts/dDicapslock.ttf" });
const rubik = Rubik({subsets: ["latin"]});
const cx = (...classNames) => classNames.join(" ");

export default function mainArticle({
                                        title,
                                        slug,
                                        image,
                                        readTime,
                                        authorImage,
                                        authorName,
                                    }) {
    return (
        <>
            <Link href={`article/${slug}`} className={styles.a}>
                <article className={styles.article}>

                    {/* Author information */}
                    <div className={styles.authorInfo}>
                        <picture>
                            <Image src={authorImage} alt="" width={175} height={175}/>
                        </picture>
                        <p className={rubik.className}>{authorName}</p>
                        <p className={cx(rubik.className, styles.p)}>{readTime} min</p>
                    </div>

                    {/* Article title */}
                    <div className={styles.articleTitle}>
                        <h2 className={dDicapslock.className}>{title}</h2>
                    </div>

                    {/* Article thumbnail image */}
                    <picture className={styles.articleThumbnail}>
                        <Image
                            src={image}
                            fill
                            priority
                            alt=""
                            sizes="(min-width: 60rem) 50vw, (min-width: 31.25rem) 100vw, 50vw"
                            quality={60}
                        />
                    </picture>
                </article>
            </Link>
        </>
    );
}
