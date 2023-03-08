import { articleIdQuery } from "../../lib/queries";
import { GraphQLClient } from "graphql-request";

export default function ArticleDetail({ articleData }) {
	return (
		<>
			<h1>{articleData.article.id}</h1>
		</>
	);
}

export async function getServerSideProps({ query }) {
	const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);

	const articleData = await hygraph.request(articleIdQuery, {
		slug: query.slug,
	});

	return {
		props: {
			articleData,
		},
	};
}
