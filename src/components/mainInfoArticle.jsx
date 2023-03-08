import Image from "next/image";
import styles from "../styles/components/mainInfoArticle.module.css";

// Fonts
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
const cx = (...classNames) => classNames.join(" ");

export default function mainInfoArticle({
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
						<Image src={authorImage} alt="" width={175} height={175} />
					</picture>
					<p className={rubik.className}>{authorName}</p>
					<p className={cx(rubik.className, styles.p)}>{readTime} min</p>
				</div>

				{/* Article thumbnail image */}
				<picture className={styles.articleThumbnail}>
					<Image
						src={image}
						fill
						alt=""
						sizes="(min-width: 60rem) 35vw, 35vw"
						quality={60}
					/>
				</picture>
			</article>
		</>
	);
}
