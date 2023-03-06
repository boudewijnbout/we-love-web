import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import { GraphQLClient } from "graphql-request";

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
					<h1 className={dDicapslock.className}>
						We <span>Love</span> Web
					</h1>
					<p className={rubik.className}>
						Een blog om alle gegeven we love web sessies terug te vinden.
					</p>

					{/* Main info article */}
					{mainInfoArticleData.articles.map((article) => (
						<MainInfoArticle
							key={article.id}
							title={article.title}
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

export async function getServerSideProps() {
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
