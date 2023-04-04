import Head from "next/head";
import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import { GraphQLClient } from "graphql-request";
import {motion} from "framer-motion";

// Styles
import styles from "../styles/pages/Home.module.css";

// Components
import MainInfoArticle from "../components/mainInfoArticle";
import MainArticle from "../components/mainArticle";
import RegularArticles from "../components/regularArticles";

// GraphQL queries
import {
	mainInfoArticleQuery,
	mainArticleQuery,
	articlesQuery,
} from "../lib/queries";

// Fonts
const dDicapslock = localFont({ src: "../../public/fonts/dDicapslock.ttf" });
const rubik = Rubik({ subsets: ["latin"] });

export default function Home({
	mainInfoArticleData,
	mainArticleData,
	articlesData,
}) {
    return (
		<>
			{/* Head */}
			<Head>
				<title>We Love Web | Blog</title>
				<meta
					name="description"
					content="A blog website to view all previous we love web sessions"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Main info */}
			<main className={styles.main}>

				{/* Main info content */}
				<section className={styles.section}>
					<motion.h1 initial={{y: "-50%"}} animate={{ y: 0 }} className={dDicapslock.className}>
						We <span>Love</span> Web
					</motion.h1>

					{/* Main intro text */}
					<motion.p initial={{ y: "100%"}} animate={{ y: 0 }} className={rubik.className}>
						Een blog om alle gegeven we love web sessies terug te vinden.
					</motion.p>

					{/* Main info article */}
					{mainInfoArticleData.articles.map((article) => (
						<MainInfoArticle
							id={article.id}
							key={article.id}
							title={article.title}
							slug={article.slug}
							image={article.image.url}
							readTime={article.readTime}
							authorImage={article.author.image.url}
							authorName={article.author.name}
						/>
					))}
				</section>

				{/* Main article */}
				{mainArticleData.articles.map((article) => (
					<MainArticle
						key={article.id}
						title={article.title}
						slug={article.slug}
						image={article.image.url}
						readTime={article.readTime}
						authorImage={article.author.image.url}
						authorName={article.author.name}
					/>
				))}

				{/* All articles  */}
				<RegularArticles articlesData={articlesData} />
			</main>
		</>
	);
}

export async function getStaticProps() {
	const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT || "");
	const mainInfoArticleData = await hygraph.request(mainInfoArticleQuery);
	const mainArticleData = await hygraph.request(mainArticleQuery);
	const articlesData = await hygraph.request(articlesQuery);

	return {
		props: {
			mainInfoArticleData,
			mainArticleData,
			articlesData,
		},
	};
}
