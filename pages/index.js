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
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail02.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail03.jpeg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail04.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
