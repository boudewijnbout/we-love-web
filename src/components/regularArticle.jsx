import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/regularArticle.module.css";

// Fonts
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
const cx = (...classNames) => classNames.join(" ");

export default function regularArticle({
	title,
	slug,
	image,
	readTime,
	authorImage,
	authorName,
}) {
	return (
		<>
			<Link href={`/article/${slug}`}>
				<article className={styles.article}>
					{/* Author information */}
					<div className={styles.authorInfo}>
						<picture>
							<Image src={authorImage} alt="" width={175} height={175} />
						</picture>
						<p className={rubik.className}>{authorName}</p>
						<p className={cx(rubik.className, styles.p)}>{readTime} min</p>
					</div>

					{/* Article title */}
					<div className={styles.articleTitle}>
						<h3 className={rubik.className}>{title}</h3>
					</div>

					{/* Article thumbnail image */}
					<picture className={styles.articleThumbnail}>
						<Image
							src={image}
							alt=""
							fill
							sizes="(min-width: 31.25rem) 50vw, 33vw"
							quality={60}
						/>
					</picture>
				</article>
			</Link>
		</>
	);
}
