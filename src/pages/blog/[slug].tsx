import Head from "next/head"
import type { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import type { JSX } from "react"
import { getBlogPosts } from "@/lib/data-loader"
import type { BlogPost } from "@/types"

interface BlogArticlePageProps {
  post: BlogPost
}

export default function BlogArticlePage({ post }: BlogArticlePageProps) {
  return (
    <>
      <Head>
        <title>{post.title}｜Y&apos;m 整体サロン</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <article className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-screen-md px-4">
          <Link
            href="/blog"
            className="text-sm font-semibold text-crown transition-colors hover:opacity-80"
          >
            ← 記事一覧に戻る
          </Link>
          <span className="mt-6 inline-block font-playfair text-sm uppercase tracking-[0.4em] text-crown">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-text-secondary">
            <span className="rounded-full border border-crown/30 bg-highlight px-3 py-1 text-crown">
              {post.category}
            </span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>読了目安 {post.readTime} 分</span>
          </div>
        </div>
      </article>

      <article className="py-12">
        <div className="mx-auto max-w-screen-md space-y-6 px-4 text-sm leading-7 text-text-secondary">
          {renderContent(post.content)}
        </div>
      </article>

      <section className="pb-16">
        <div className="mx-auto flex max-w-screen-md flex-col gap-4 rounded-3xl border border-crown/20 bg-highlight px-6 py-8 text-sm text-text-secondary">
          <p>
            施術内容やキャンペーンの詳細、ご予約に関するご質問は LINE
            公式アカウントまたはお電話からも承っております。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="line://ti/p/@ym-salon"
              className="btn-primary px-5 py-2 text-sm"
            >
              LINE で相談する
            </a>
            <a
              href="tel:048-123-4567"
              className="btn-outline px-5 py-2 text-sm"
            >
              048-123-4567
            </a>
            <Link href="/reservation" className="btn-ghost px-5 py-2 text-sm">
              予約ページへ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getBlogPosts()
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogArticlePageProps> = async ({
  params,
}) => {
  const posts = getBlogPosts()
  const post = posts.find((item) => item.slug === params?.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function renderContent(content: string) {
  const lines = content.split("\n")
  const elements: JSX.Element[] = []
  let listBuffer: string[] = []

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul
          key={`list-${elements.length}`}
          className="list-disc space-y-2 pl-5 text-sm"
        >
          {listBuffer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )
      listBuffer = []
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed) {
      flushList()
      return
    }

    if (trimmed.startsWith("- ")) {
      listBuffer.push(trimmed.replace("- ", ""))
      return
    }

    flushList()

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="text-xl font-semibold text-text-primary"
        >
          {trimmed.replace("## ", "")}
        </h3>
      )
      return
    }

    if (trimmed.startsWith("# ")) {
      elements.push(
        <h2
          key={`h2-${elements.length}`}
          className="text-2xl font-semibold text-text-primary"
        >
          {trimmed.replace("# ", "")}
        </h2>
      )
      return
    }

    elements.push(
      <p
        key={`p-${elements.length}`}
        className="text-sm leading-7 text-text-secondary"
      >
        {trimmed}
      </p>
    )
  })

  flushList()

  return elements
}
