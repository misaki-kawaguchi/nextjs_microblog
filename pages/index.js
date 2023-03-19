import { Inter } from "next/font/google"
import Layout from "@/components/Layout"
import utilStyles from "@/styles/utils.module.css"
import Link from "next/link"
import styles from "@/styles/Home.module.css"
import { getPostsData } from "@/lib/post"

const inter = Inter({ subsets: ["latin"] })

// SSGの場合
// getStaticProps：外部から一度だけデータを取得する
export async function getStaticProps() {
  const allPostsData = getPostsData() // id, title, date, thumbnail
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          私はフルスタックエンジニアです/Udemy講師として活動しています。好きな言語はJavaScriptです。
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>🗒エンジニアのブログ</h2>

        <div className={styles.grid}>
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
