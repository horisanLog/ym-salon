import Head from "next/head";
import { useMemo, useState } from "react";
import { getReviews } from "@/lib/data-loader";
import type { GetStaticProps } from "next";
import type { Review, ServiceCategory } from "@/types";

interface VoicePageProps {
  reviews: Review[];
}

const CATEGORY_FILTERS: { key: "all" | ServiceCategory; label: string; keywords?: string[] }[] = [
  { key: "all", label: "すべて" },
  { key: "seitai", label: "整体", keywords: ["整体", "姿勢", "骨格", "ヘッドスパ", "小顔"] },
  { key: "esthe", label: "エステ", keywords: ["エステ", "リンパ", "フェイシャル", "美脚"] },
  { key: "pulse", label: "電磁パルス", keywords: ["電磁", "パルス"] },
  { key: "campaign", label: "セットプラン", keywords: ["セット", "キャンペーン"] },
];

export default function VoicePage({ reviews }: VoicePageProps) {
  const [category, setCategory] = useState<"all" | ServiceCategory>("all");
  const [rating, setRating] = useState<number | "all">("all");

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const matchesCategory = (() => {
        if (category === "all") return true;
        const keywords = CATEGORY_FILTERS.find((filter) => filter.key === category)?.keywords ?? [];
        return review.serviceUsed.some((service) => keywords.some((keyword) => service.includes(keyword)));
      })();
      const matchesRating = rating === "all" ? true : review.rating >= rating;
      return matchesCategory && matchesRating;
    });
  }, [reviews, category, rating]);

  return (
    <>
      <Head>
        <title>お客様の声｜Y&apos;m 整体サロン</title>
        <meta
          name="description"
          content="Y'm 整体サロンをご利用いただいたお客様の感想をご紹介。AI 姿勢診断と整体・エステの組み合わせで、どのような変化があったのかをリアルな声でお届けします。"
        />
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-screen-xl px-4">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">Voices</span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">お客様の声</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 max-w-3xl text-base text-text-secondary">
            AI 姿勢診断で見えた課題と、施術後の変化を実際に通われているお客様に伺いました。姿勢の改善はもちろん、肩こりや腰痛、美容面での嬉しい変化の声が届いています。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  category === filter.key
                    ? "border-crown bg-crown text-white"
                    : "border-border-muted text-text-secondary hover:border-crown hover:text-crown"
                }`}
                onClick={() => setCategory(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-text-secondary">評価</span>
            {["all", 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`rounded-full border px-3 py-2 transition-colors ${
                  rating === value
                    ? "border-crown bg-crown text-white"
                    : "border-border-muted text-text-secondary hover:border-crown hover:text-crown"
                }`}
                onClick={() => setRating(value as number | "all")}
              >
                {value === "all" ? "すべて" : `${value}★以上`}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-screen-xl gap-6 px-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
              <header className="mt-5">
                <p className="text-sm font-semibold text-text-primary">
                  {review.name} <span className="text-text-secondary">/ {review.age}歳・{review.occupation}</span>
                </p>
                <p className="mt-1 text-xs text-crown" aria-label={`満足度 ${review.rating} / 5`}>
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </p>
              </header>
              <p className="flex-1 text-sm text-text-secondary">{review.comment}</p>
              <div className="rounded-2xl border border-crown/20 bg-highlight p-4 text-xs text-text-secondary">
                <p className="font-semibold text-text-primary">ご来店前のお悩み</p>
                <ul className="mt-1 space-y-1">
                  {review.beforeSymptoms.map((symptom) => (
                    <li key={symptom} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-crown" />
                      {symptom}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-semibold text-text-primary">施術後の変化</p>
                <ul className="mt-1 space-y-1">
                  {review.afterEffects.map((effect) => (
                    <li key={effect} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-crown" />
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-xs text-text-secondary">
                <span className="font-semibold text-text-primary">ご利用メニュー：</span>
                {review.serviceUsed.join("、 ")}
              </div>
            </article>
          ))}
        </div>
        {filteredReviews.length === 0 && (
          <div className="mx-auto max-w-screen-xl px-4">
            <p className="rounded-2xl border border-crown/20 bg-highlight px-6 py-8 text-center text-sm text-text-secondary">
              条件に一致する体験談が見つかりませんでした。条件を変更してお試しください。
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<VoicePageProps> = async () => {
  const reviews = getReviews().sort((a, b) => b.rating - a.rating);
  return {
    props: {
      reviews,
    },
  };
};
