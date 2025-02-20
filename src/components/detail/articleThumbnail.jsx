import Image from "next/image";
import localFont from "next/font/local";
import {motion} from "framer-motion";

// Styles
import styles from "../../styles/components/detail/articleThumbnail.module.css";

// Fonts
import {Rubik} from "next/font/google";

const rubik = Rubik({subsets: ["latin"]});
const dDicapslock = localFont({ src: "../../../public/fonts/dDicapslock.ttf" });
const cx = (...classNames) => classNames.join(" ");

export default function articleThumbnail({articleData}) {
    return (
        <>
            <motion.article initial={{ y: -20 }} animate={{ y: 0 }} className={styles.article}>

                {/* Article image */}
                <picture className={styles.picture}>
                    <Image priority sizes="(min-width: 31.25rem) 100vw, (min-width: 62.5rem) 50vw, 50vw" fill src={articleData.image.url} alt="" />
                </picture>

                {/* Article title */}
                <div className={styles.articleTitle}>
                    <h1 className={dDicapslock.className}>{articleData.title}</h1>
                </div>
            </motion.article>
        </>
    );
}