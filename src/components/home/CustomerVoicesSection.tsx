import Link from "next/link";
import { type Review } from "@/types";

interface CustomerVoicesSectionProps {
  reviews: Review[];
}

export function CustomerVoicesSection({ reviews }: CustomerVoicesSectionProps) {
  const featured = reviews.filter((review) => review.photoPermission).slice(0, 3);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playfair text-lg uppercase tracking-[0.3em] text-crown">Voices</span>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">お客様の声</h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-crown" />
            <p className="mt-3 max-w-2xl text-base text-text-secondary">
              AI 姿勢診断のデータと併せて、施術の前後でどのような変化があったのかをお客様に伺いました。姿勢の改善だけでなく、生活リズムや美容面での嬉しい変化も多数寄せられています。
            </p>
          </div>
          <Link
            href="/voice"
            className="inline-flex items-center justify-center rounded-full border border-crown px-5 py-3 text-sm font-semibold text-crown transition-colors hover:bg-highlight"
          >
            体験談をもっと見る
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((review) => (
            <article
              key={review.id}
              className="relative flex h-full flex-col gap-4 rounded-2xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
              <header className="mt-4">
                <p className="text-sm font-semibold text-text-primary">
                  {review.name} <span className="text-text-secondary">/ {review.age}歳・{review.occupation}</span>
                </p>
                <p className="mt-1 text-xs text-crown" aria-label={`満足度 ${review.rating} / 5`}>
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </p>
              </header>
              <p className="flex-1 text-sm text-text-secondary">{review.comment}</p>
              <div className="grid gap-2 rounded-xl border border-crown/20 bg-highlight p-4 text-xs text-text-secondary">
                <div>
                  <p className="font-semibold text-text-primary">ご来店前の悩み</p>
                  <ul className="mt-1 space-y-1">
                    {review.beforeSymptoms.slice(0, 3).map((symptom) => (
                      <li key={symptom} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-crown" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">施術後の変化</p>
                  <ul className="mt-1 space-y-1">
                    {review.afterEffects.slice(0, 3).map((effect) => (
                      <li key={effect} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-crown" />
                        {effect}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-xs text-text-secondary">
                <span className="font-semibold text-text-primary">ご利用メニュー：</span>
                {review.serviceUsed.join("、 ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
