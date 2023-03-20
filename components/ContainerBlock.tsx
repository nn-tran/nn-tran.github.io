import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function ContainerBlock({ children, ...customMeta }: {children: React.ReactNode, title: string, description?: string, image?: string}) {
  const router = useRouter()

  const meta = {
    type: "website",
    ...customMeta,
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://nn-tran.github.io${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://nn-tran.github.io${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nguyen Tran" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main className="bg-yellow-50 dark:bg-gray-800 text-yellow-900 dark:text-yellow-100 w-full min-h-screen">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
