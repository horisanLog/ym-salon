import Head from "next/head";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { getServices } from "@/lib/data-loader";
import type { Service, ServiceCategory } from "@/types";

interface MenuPageProps {
  services: Service[];
}

const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  seitai: "整体コース",
  esthe: "エステコース",
  pulse: "電磁パルス",
  campaign: "セット・キャンペーン",
};

const CATEGORY_ORDER: ServiceCategory[] = ["seitai", "esthe", "pulse", "campaign"];

export default function MenuPage({ services }: MenuPageProps) {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: services.filter((service) => service.category === category),
  }));

  return (
    <>
      <Head>
        <title>メニュー・料金｜Y&apos;m 整体サロン</title>
        <meta
          name="description"
          content="整体・エステ・電磁パルス・キャンペーンのメニューと料金表。AI 姿勢診断付きで、プレオープン特別価格 2,500 円からご利用いただけます。"
        />
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <span className="font-playfair text-lg uppercase tracking-[0.45em] text-crown">Menu</span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">メニュー・料金</h1>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-crown" />
          <p className="mt-4 text-base text-text-secondary">
            整体・エステ・電磁パルスの総合ケアで、姿勢改善と美容を同時に叶えます。初回体験はプレオープン特別価格でご案内しています。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            {grouped.map(({ category }) => (
              <a
                key={category}
                href={`#${category}`}
                className="rounded-full border border-crown px-4 py-2 text-crown transition-colors hover:bg-highlight"
              >
                {CATEGORY_LABELS[category]}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-16 py-16">
        {grouped.map(({ category, items }) => (
          <section key={category} id={category} className="scroll-mt-24">
            <div className="mx-auto max-w-screen-xl px-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">
                    {CATEGORY_LABELS[category]}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
                    {CATEGORY_LABELS[category]}
                  </h2>
                  <div className="mt-2 h-1 w-14 rounded-full bg-crown" />
                  <p className="mt-2 text-base text-text-secondary">{getCategoryDescription(category)}</p>
                </div>
                <Link
                  href="/reservation"
                  className="inline-flex items-center justify-center rounded-full border border-crown px-5 py-3 text-sm font-semibold text-crown transition-colors hover:bg-highlight"
                >
                  このカテゴリーを予約する
                </Link>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((service) => (
                  <article
                    key={service.id}
                    className="group relative flex h-full flex-col space-y-4 rounded-3xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-text-primary">{service.name}</h3>
                        {service.isPopular && (
                          <span className="rounded-full bg-crown px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                            人気
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-text-secondary">{service.description}</p>
                    </div>
                    <div className="rounded-2xl border border-crown/20 bg-highlight p-4 text-sm text-text-secondary">
                      <div className="flex items-baseline gap-2 text-text-primary">
                        {service.originalPrice && (
                          <span className="text-sm text-crown/70 line-through">¥{service.originalPrice.toLocaleString()}</span>
                        )}
                        <span className="rounded-full bg-accent-soft px-3 py-1 text-base font-semibold text-accent">
                          ¥{service.price.toLocaleString()}
                        </span>
                        <span className="text-xs">/{service.duration}分</span>
                      </div>
                      <ul className="mt-3 grid gap-1 text-xs">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-crown" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2 text-xs text-text-secondary">
                      <div>
                        <p className="font-semibold text-text-primary">こんなお悩みに</p>
                        <p>{service.targetSymptoms.join("、 ")}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">期待できる効果</p>
                        <p>{service.benefits.join("、 ")}</p>
                      </div>
                    </div>
                    <Link
                      href="/reservation"
                      className="mt-auto inline-flex items-center justify-center rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
                    >
                      予約する
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<MenuPageProps> = async () => {
  const services = getServices();
  return {
    props: {
      services,
    },
  };
};

function getCategoryDescription(category: ServiceCategory): string {
  switch (category) {
    case "seitai":
      return "AI 診断をもとに骨格と筋肉を整える整体コース。肩こり・腰痛・産後ケアまで幅広く対応します。";
    case "esthe":
      return "リンパケアやフェイシャルなど、美容とリラクゼーションを同時に叶えるエステコースです。";
    case "pulse":
      return "寝たまま筋肉をトレーニングできる電磁パルス。体幹強化やシルエット改善におすすめです。";
    case "campaign":
      return "整体とエステを組み合わせたセットプランや期間限定メニューをご用意しています。";
    default:
      return "";
  }
}
