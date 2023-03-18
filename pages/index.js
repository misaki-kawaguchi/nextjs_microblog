import { Inter } from "next/font/google"
import Layout from "@/components/Layout"
import utilStyles from "@/styles/utils.module.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          私はフルスタックエンジニアです/Udemy講師として活動しています。好きな言語はJavaScriptです。
        </p>
      </section>
      <section>
        <h2>🗒エンジニアのブログ</h2>
        <div>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" />
            </Link>
            <Link legacyBehavior href="/">
              <a>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
