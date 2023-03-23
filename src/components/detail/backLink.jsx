import Link from "next/link";

// Styles
import styles from "../../styles/components/detail/backLink.module.css";

export default function backLink() {
    return (
        <>
            <div className={styles.div}>
                <Link href="/">Terug naar overzicht</Link>
            </div>
        </>
    )
}