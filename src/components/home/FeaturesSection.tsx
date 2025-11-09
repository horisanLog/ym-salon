import { Activity, Sparkles, Layers } from "lucide-react";

const FEATURES = [
  {
    title: "AIが行う 3D 姿勢診断",
    description:
      "わずかな歪みも数字で把握できる 3D 解析。ビフォーアフターをデータで比較し、改善の優先順位を明確にします。",
    icon: Activity,
  },
  {
    title: "整体×エステ×電磁パルス",
    description:
      "骨格・筋肉・リンパ・美容をトータルでケア。複数のサロンに通わなくても、一度で全身を整えられます。",
    icon: Layers,
  },
  {
    title: "プレオープン特別価格",
    description:
      "初回 2,500 円から体験可能。無理な勧誘は一切なく、予約は LINE や電話で 24 時間受付中です。",
    icon: Sparkles,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-playfair text-lg uppercase tracking-[0.3em] text-crown">Features</span>
          <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">Y&apos;m が選ばれる 3 つの理由</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 text-base text-text-secondary">
            科学的な分析に基づく施術と、心地よさにこだわった空間で、姿勢改善と美容の両立を叶えます。
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-crown/10 text-crown">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{feature.title}</h3>
              <p className="text-sm text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
