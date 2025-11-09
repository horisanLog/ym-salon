import Head from "next/head";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getBlogPosts } from "@/lib/data-loader";
import type { BlogPost, BlogCategory } from "@/types";

interface BlogIndexPageProps {
  posts: BlogPost[];
}

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  posture: "姿勢ケア",
  health: "健康ケア",
  beauty: "美容",
  selfcare: "セルフケア",
  "salon-news": "サロンニュース",
};

export default function BlogIndexPage({ posts }: BlogIndexPageProps) {
  const [category, setCategory] = useState<BlogCategory | "all">("all");

  const filteredPosts = useMemo(() => {
    if (category === "all") return posts;
    return posts.filter((post) => post.category === category);
  }, [posts, category]);

  const categories: (BlogCategory | "all")[] = ["all", ...(Object.keys(CATEGORY_LABELS) as BlogCategory[])];

  return (
    <>
      <Head>
        <title>コラム・ブログ｜Y&apos;m 整体サロン</title>
        <meta
          name="description"
          content="姿勢改善やセルフケアのコツ、プレオープンのお知らせなど、Y'm 整体サロンがお届けするコラム。AI 姿勢診断の活用事例も掲載しています。"
        />
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">Column</span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">コラム・ブログ</h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 text-base text-text-secondary">
            姿勢改善のコツ、セルフケア方法、サロンからのお知らせをお届けします。AI 姿勢診断の活用事例も随時更新中です。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto flex max-w-screen-xl flex-wrap justify-center gap-3 px-4 text-sm font-semibold">
          {categories.map((value) => (
            <button
              key={value}
              type="button"
              className={`rounded-full border px-4 py-2 transition-colors ${
                category === value
                  ? "border-crown bg-crown text-white"
                  : "border-border-muted text-text-secondary hover:border-crown hover:text-crown"
              }`}
              onClick={() => setCategory(value)}
            >
              {value === "all" ? "すべて" : CATEGORY_LABELS[value]}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-screen-xl gap-6 px-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
              <div className="mt-5 w-full rounded-2xl border border-crown/20 bg-highlight pb-[55%]" aria-hidden="true" />
              <div className="flex items-center gap-2 text-xs text-crown">
                <span className="rounded-full border border-crown/30 bg-highlight px-3 py-1">
                  {CATEGORY_LABELS[post.category]}
                </span>
                <span className="text-text-secondary">{formatDate(post.publishedAt)}</span>
              </div>
              <h2 className="text-lg font-semibold text-text-primary">{post.title}</h2>
              <p className="text-sm text-text-secondary">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between text-xs text-text-secondary">
                <span>読了目安 {post.readTime} 分</span>
                <Link href={`/blog/${post.slug}`} className="font-semibold text-crown transition-colors hover:opacity-80">
                  記事を読む →
                </Link>
              </div>
            </article>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="mx-auto max-w-screen-xl px-4">
            <p className="rounded-2xl border border-crown/20 bg-highlight px-6 py-8 text-center text-sm text-text-secondary">
              該当する記事が見つかりませんでした。他のカテゴリーをお試しください。
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  const posts = getBlogPosts();
  return {
    props: {
      posts,
    },
  };
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" });
}
