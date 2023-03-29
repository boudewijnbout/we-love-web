import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

// Styles
import styles from "../../styles/components/detail/otherArticle.module.css";

export default function otherArticle({image, slug}) {
    return (
        <>
            <Link href={`/article/${slug}`}>
                <motion.article initial={{ y: 15 }} animate={{ y: 0 }} transition={{ delay: 0.1 }} className={styles.otherArticle}>

                    {/* Article thumbnail image */}
                    <picture className={styles.otherArticleThumbnail}>
                        <Image sizes="(min-width: 31.25rem) 50vw, (min-width: 75rem) 33vw, 33vw" src={image} alt="" fill/>
                    </picture>
                </motion.article>
            </Link>
        </>
    )
}