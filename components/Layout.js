import Head from "next/head"

const name = "Shin Code"
export const siteTitle = "Next.js blog"

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <header>
          <img src="/images/profile.png" alt="プロフィール画像" />
          <h1>{name}</h1>
        </header>
        <main>{children}</main>
      </Head>
    </div>
  )
}

export default Layout
