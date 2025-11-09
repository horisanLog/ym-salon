import Head from "next/head"
import Link from "next/link"
import { AIDiagnosisIntro } from "@/components/home/AIDiagnosisIntro"
import { ReservationCTA } from "@/components/common/ReservationCTA"

const FAQ_ITEMS = [
  {
    question: "診断結果はどのように渡されますか？",
    answer:
      "セッション終了後に PDF レポートを LINE またはメールでお送りします。数値データとビジュアルをセットで確認できます。",
  },
  {
    question: "どれくらいの頻度で診断を受けるべきですか？",
    answer:
      "初回の結果を基準に、1〜2 か月ごとに再計測すると変化が分かりやすくおすすめです。",
  },
  {
    question: "診断のみの利用は可能ですか？",
    answer:
      "はい。診断のみの体験も承っております。結果に合わせてご自宅でのセルフケアもアドバイスいたします。",
  },
]

export default function AIDiagnosisPage() {
  return (
    <>
      <Head>
        <title>AI姿勢診断について｜Y&apos;m 整体サロン</title>
        <meta
          name="description"
          content="Y'm 整体サロンの AI 姿勢診断は、わずかな歪みまで 3D 解析。可視化されたデータをもとに、整体・エステ・筋力ケアを組み合わせたプランをご提案します。"
        />
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-screen-xl px-4">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">
            Ai diagnosis
          </span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
            AI 姿勢診断について
          </h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 max-w-3xl text-base text-text-secondary">
            最新の AI 技術で姿勢を 3D
            解析。骨格や筋肉のバランスを数値化し、改善すべきポイントを明確にします。データに基づくオーダーメイド施術で、結果が見えづらい姿勢ケアを分かりやすくサポートします。
          </p>
        </div>
      </section>

      <AIDiagnosisIntro />

      <section className="py-16">
        <div className="mx-auto grid max-w-screen-xl gap-8 px-4 md:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6">
            <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">
              Insight
            </span>
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              データから導く、最短の改善ルート
            </h2>
            <div className="h-1 w-16 rounded-full bg-crown" />
            <p className="text-base text-text-secondary">
              姿勢の崩れは、骨格の歪みだけでなく筋力の低下や生活習慣など複数の要因が絡み合っています。AI
              姿勢診断では、体のどこにどの程度の負担がかかっているかを数値化。整体で整えるべきポイントと、自宅で取り入れるべきセルフケアを明確にできます。
            </p>
            <div className="rounded-3xl border border-crown/30 bg-white p-6 shadow-[0_18px_40px_rgba(199,162,83,0.12)]">
              <h3 className="text-lg font-semibold text-text-primary">
                レポートに含まれる内容
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                  骨格の歪み（前後・左右・ねじれ）の数値化とグラフ
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                  筋肉の緊張・弱化の推定と強化ポイントの提案
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                  改善前後の比較グラフ（再計測時）
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                  日常生活で意識したいポイントとセルフケアメニュー
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-crown/30 bg-white p-6 shadow-[0_18px_40px_rgba(199,162,83,0.12)]">
              <h3 className="text-lg font-semibold text-text-primary">
                診断料金（プレオープン特別価格）
              </h3>
              <p className="mt-3 text-sm text-text-secondary">
                AI姿勢診断 60 分（カウンセリング含む）
              </p>
              <div className="mt-2 flex items-end gap-3">
                <p className="text-3xl font-bold text-crown">¥2,500</p>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  通常 ¥4,000
                </span>
              </div>
              <p className="mt-1 text-xs text-text-secondary">
                初回限定特別価格・レポート付き
              </p>
              <Link href="/reservation" className="btn-primary mt-6 w-full">
                診断を予約する
              </Link>
            </div>
            <div className="rounded-3xl border border-crown/20 bg-highlight p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-text-primary">
                診断前の注意事項
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                <li>
                  ・動きやすい服装でご来店ください（スカートはお控えください）。
                </li>
                <li>・妊娠中の方は事前にスタッフへご相談ください。</li>
                <li>・計測データはカルテと合わせて大切に保管いたします。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-accent/30 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">
            Faq
          </span>
          <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
            よくある質問
          </h2>
          <div className="mt-2 h-1 w-14 rounded-full bg-crown" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {FAQ_ITEMS.map((item) => (
              <article
                key={item.question}
                className="group relative rounded-3xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span
                  className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown"
                  aria-hidden
                />
                <h3 className="mt-5 text-sm font-semibold text-text-primary">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm text-text-secondary">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReservationCTA
        title="AI 姿勢診断で体のクセをチェック"
        description="診断後は整体・エステ・電磁パルスの中から最適なケアをご案内します。LINE なら空き状況の確認や事前相談もスムーズです。"
      />
    </>
  )
}
