import styles from "../styles/components/regularArticles.module.css";

// Components
import RegularArticle from "./regularArticle";

export default function allRegularArticles({ articlesData }) {
	return (
		<>
			<section className={styles.section}>
				{articlesData.articles.map((article) => (
					<RegularArticle
						key={article.id}
						title={article.title}
						image={article.image.url}
						readTime={article.readTime}
						authorImage={article.author.image.url}
						authorName={article.author.name}
					/>
				))}
			</section>
		</>
	);
}
