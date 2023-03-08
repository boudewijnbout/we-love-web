import Image from "next/image";

import styles from "../styles/components/mainArticle.module.css";

// Fonts
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

				{/* Article title */}
				<div className={styles.articleTitle}>
					<h2 className={rubik.className}>{title}</h2>
				</div>

				{/* Article thumbnail image */}
				<picture className={styles.articleThumbnail}>
					<Image
						src={image}
						fill
						priority
						alt=""
						sizes="(min-width: 60rem) 50vw, (min-width: 31.25rem) 100vw, 50vw"
					/>
				</picture>
			</article>
		</>
	);
}
