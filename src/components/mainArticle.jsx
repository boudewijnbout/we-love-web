import styles from "../styles/components/mainArticle.module.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
const cx = (...classNames) => classNames.join(" ");

export default function mainArticle({
	title,
	image,
	readTime,
	authorImage,
	authorName,
}) {
	return (
		<>
			<article className={styles.article}>
				{/* Author information */}
				<div className={styles.authorInfo}>
					<picture>
						<img src={authorImage} alt="" />
					</picture>
					<p className={rubik.className}>{authorName}</p>
					<p className={cx(rubik.className, styles.p)}>{readTime} min</p>
				</div>

				{/* Article thumbnail image */}
				<picture className={styles.articleThumbnail}>
					<img src={image} />
				</picture>

				<h1>{title}</h1>
			</article>
		</>
	);
}
