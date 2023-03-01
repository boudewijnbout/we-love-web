import Head from "next/head";
import styles from "@/styles/pages/Home.module.css";
import localFont from "next/font/local";
import {Rubik} from "next/font/google";
import { GraphQLClient } from "graphql-request";

// Components
import MainInfoArticle from "@/components/mainInfoArticle";

// GraphQL queries
import { mainInfoArticleQuery } from "@/lib/queries";

// Fonts
const dDicapslock = localFont({ src: "../../public/fonts/dDicapslock.ttf" });
const rubik = Rubik({ subsets: ["latin"]})

export default function Home({ mainInfoArticleData }: any) { 
    console.log(mainInfoArticleData.articles[0].id);
    
  
  return (
    <>
      {/* Head */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main info */}
      <main className={styles.main}>

        {/* Main info content */}
        <section className={styles.section}>
          <h1 className={dDicapslock.className}>We <span>Love</span> Web</h1>
          <p className={rubik.className}>Een blog om alle gegeven we love web sessies terug te vinden.</p>
        </section>

        {/* Main info article */}
        {mainInfoArticleData.articles.map((article:any) => (          
          <MainInfoArticle key={article.id} title={article.title} image={article.image.url} authorImage={article.author.image.url} authorName={article.author.name} />
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const hygraph = new GraphQLClient(
    process.env.HYGRAPH_ENDPOINT || ""
  )

  const mainInfoArticleData = await hygraph.request(mainInfoArticleQuery);

  return {
    props: {
      mainInfoArticleData,
    }
  }
}
