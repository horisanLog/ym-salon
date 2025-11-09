import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getServices } from "@/lib/data-loader";
import type { Service, ServiceCategory } from "@/types";

interface MenuCategoryPageProps {
  category: ServiceCategory;
  services: Service[];
}

const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  seitai: "整体コース",
  esthe: "エステコース",
  pulse: "電磁パルス",
  campaign: "セット・キャンペーン",
};

export default function MenuCategoryPage({ category, services }: MenuCategoryPageProps) {
  return (
    <>
      <Head>
        <title>{CATEGORY_LABELS[category]}｜Y&apos;m 整体サロン</title>
        <meta
          name="description"
          content={`${CATEGORY_LABELS[category]}の詳細メニューと料金。AI 姿勢診断と組み合わせたオーダーメイド施術で、姿勢改善と美容をサポートします。`}
        />
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#f8ead2,transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-screen-xl px-4">
          <Link href="/menu" className="text-sm font-semibold text-crown transition-colors hover:opacity-80">
            ← メニュー一覧に戻る
          </Link>
          <span className="mt-6 inline-block font-playfair text-sm uppercase tracking-[0.45em] text-crown">
            {CATEGORY_LABELS[category]}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">{CATEGORY_LABELS[category]}</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-3 max-w-3xl text-base text-text-secondary">{getCategoryDescription(category)}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-text-primary">{service.name}</h2>
                    {service.isLimitedTime && (
                      <span className="rounded-full bg-warning px-3 py-1 text-xs font-semibold text-white">期間限定</span>
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
                  <p className="mt-3 text-xs text-text-secondary">特徴：{service.features.join("・")}</p>
                </div>
                <div className="grid gap-2 text-xs text-text-secondary">
                  <div>
                    <p className="font-semibold text-text-primary">対象のお悩み</p>
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
                  このコースを予約する
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services = getServices();
  const categories = Array.from(new Set(services.map((service) => service.category)));

  return {
    paths: categories.map((category) => ({ params: { category } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<MenuCategoryPageProps> = async ({ params }) => {
  const category = params?.category as ServiceCategory;
  const services = getServices().filter((service) => service.category === category);

  return {
    props: {
      category,
      services,
    },
  };
};

function getCategoryDescription(category: ServiceCategory): string {
  switch (category) {
    case "seitai":
      return "AI 姿勢診断のデータに基づき、骨格と筋肉のバランスを整える整体コースです。肩こり・腰痛・産後ケアなど幅広いお悩みに対応。";
    case "esthe":
      return "フェイシャルやリンパドレナージュなど、美容とリラックスを同時に叶えるエステコース。むくみやフェイスラインが気になる方に。";
    case "pulse":
      return "寝ているだけで体幹を鍛えられる電磁パルス。姿勢改善やボディメイク、運動不足解消におすすめです。";
    case "campaign":
      return "整体とエステを組み合わせたセットプランや、プレオープン特別価格のキャンペーンをご用意しています。";
    default:
      return "";
  }
}
