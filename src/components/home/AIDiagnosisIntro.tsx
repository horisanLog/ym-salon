import Link from "next/link"
import { BarChart3, ClipboardList, Scan } from "lucide-react"

const STEPS = [
  {
    title: "01 撮影",
    description: "専用カメラで全身を 360° 撮影。立ったまま 30 秒で完了します。",
    icon: Scan,
  },
  {
    title: "02 分析",
    description:
      "AI が骨格や筋肉のバランスを解析し、歪みや偏りを数値化します。",
    icon: BarChart3,
  },
  {
    title: "03 カウンセリング",
    description:
      "結果レポートをもとに施術プランとセルフケアを丁寧にご提案します。",
    icon: ClipboardList,
  },
]

export function AIDiagnosisIntro() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="font-playfair text-lg uppercase tracking-[0.3em] text-crown">
              Ai diagnosis
            </span>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
              データに基づく姿勢分析で、改善の近道を。
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-crown" />
            <p className="mt-4 text-base text-text-secondary">
              人の目では判断しづらい姿勢のクセも、AI
              がわずかな歪みまで解析。改善すべきポイントが一目で分かるため、整体の効果を最大化し、セルフケアも継続しやすくなります。
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {STEPS.map((step) => (
                <div
                  key={step.title}
                  className="group relative flex flex-col gap-3 rounded-2xl border border-border-muted/70 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span
                    className="absolute inset-x-4 top-0 h-1 rounded-full bg-crown"
                    aria-hidden
                  />
                  <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-crown/10 text-crown">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-diagnosis" className="btn-primary">
                AI 姿勢診断を詳しく見る
              </Link>
              <Link href="/reservation" className="btn-outline">
                体験を予約する
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-crown/40 bg-white p-8 shadow-[0_20px_50px_rgba(199,162,83,0.15)]">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                レポートサンプル
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                肩の高さ、骨盤の傾き、頭部の位置などをグラフ化。改善前後を比較できるため、モチベーションを保ちながら通っていただけます。
              </p>
            </div>
            <div className="mt-6 grid gap-3 rounded-2xl border border-crown/20 bg-highlight p-5 text-sm text-text-secondary">
              <div className="flex items-center justify-between">
                <span>重心位置</span>
                <span className="font-semibold text-crown">
                  前方 +4.3% → +0.8%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>骨盤の捻れ</span>
                <span className="font-semibold text-crown">
                  左 +3.5° → +0.7°
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>肩の高さ</span>
                <span className="font-semibold text-crown">
                  右 +1.9cm → +0.3cm
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                ※ 数値は一例です。個人差があります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
