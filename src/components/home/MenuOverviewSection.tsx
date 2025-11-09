import Link from "next/link";
import { type Service } from "@/types";

interface MenuOverviewSectionProps {
  services: Service[];
}

export function MenuOverviewSection({ services }: MenuOverviewSectionProps) {
  const highlightedServices = services
    .filter((service) => service.category !== "campaign")
    .slice(0, 4);

  return (
    <section className="bg-surface-accent/30 py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playfair text-lg uppercase tracking-[0.25em] text-crown">Menu</span>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">メニュー・料金</h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-crown" />
            <p className="mt-3 max-w-3xl text-base text-text-secondary">
              姿勢改善・骨格調整・美容ケア・筋力アプローチを組み合わせ、目的に合わせたプランをご提案します。初回はすべてプレオープン特別価格で体験いただけます。
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full border border-crown px-5 py-3 text-sm font-semibold text-crown transition-colors hover:bg-highlight"
          >
            全メニューを見る
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlightedServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex h-full flex-col rounded-2xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
              {service.isPopular && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-crown px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  人気 No.1
                </span>
              )}
              <h3 className="text-lg font-semibold text-text-primary">{service.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-baseline gap-2">
                  {service.originalPrice && (
                    <span className="text-sm font-medium text-crown/70 line-through">
                      ¥{service.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-base font-semibold text-accent">
                    ¥{service.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-text-secondary">/{service.duration}分</span>
                </div>
                <ul className="space-y-1 text-xs text-text-secondary">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-crown" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Link
                  href="/reservation"
                  className="inline-flex w-full items-center justify-center rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
                >
                  このコースを予約する
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
