import Link from "next/link";
import {motion} from "framer-motion";

// Styles
import styles from "../../styles/components/detail/backLink.module.css";

// Fonts
import {Rubik} from "next/font/google";
const rubik = Rubik({subsets: ["latin"]});

export default function backLink() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35}}  className={styles.div}>
                <Link href="/" className={rubik.className}>Terug naar overzicht</Link>
            </motion.div>
        </>
    )
}