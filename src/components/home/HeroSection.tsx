import Link from "next/link"
import { MessageCircle, PhoneCall } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#f4f2ee] py-16 md:py-24">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_45%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-crown/30 bg-highlight px-4 py-1 text-xs font-semibold uppercase tracking-widest text-crown">
              プレオープン特別価格 2,500 円〜
            </p>
            <div className="space-y-3">
              <span className="font-playfair text-2xl text-crown md:text-3xl">
                Data driven relaxation.
              </span>
              <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
                AI が導く、理想の姿勢と美しさ。
              </h1>
              <div className="h-1 w-20 rounded-full bg-crown" />
            </div>
            <p className="text-base text-text-secondary md:text-lg">
              最新の AI
              姿勢診断で身体のクセを可視化し、整体×エステ×電磁パルスで根本から整える総合サロンです。戸田市駅から徒歩
              5 分、まずは体験からお気軽にどうぞ。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="line://ti/p/@ym-salon"
                className="btn-primary w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                LINE で簡単予約
              </a>
              <a
                href="tel:048-123-4567"
                className="btn-outline w-full sm:w-auto"
              >
                <PhoneCall className="h-4 w-4" />
                048-123-4567
              </a>
              <Link href="/reservation" className="btn-ghost w-full sm:w-auto">
                予約ページへ
              </Link>
            </div>
            <ul className="grid gap-3 text-sm text-text-secondary sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-crown text-xs font-semibold text-white">
                  ✓
                </span>
                AI 姿勢診断レポート付き
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-crown text-xs font-semibold text-white">
                  ✓
                </span>
                体験は 2,500 円〜
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-crown text-xs font-semibold text-white">
                  ✓
                </span>
                戸田駅徒歩 5 分・駐車場 3 台
              </li>
            </ul>
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-crown/40 bg-white shadow-[0_25px_60px_rgba(199,162,83,0.15)]">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-crown to-transparent"
              aria-hidden
            />
            <div className="relative flex h-full flex-col justify-between bg-gradient-to-br from-white/92 via-white/86 to-[#f2f0ea] p-8">
              <div>
                <p className="text-sm font-semibold text-crown">
                  AI 診断の見える化
                </p>
                <h2 className="mt-2 text-2xl font-bold text-text-primary">
                  Before → After
                </h2>
                <p className="mt-4 text-sm text-text-secondary">
                  わずかな歪みも 3D
                  データで可視化。改善プランとセルフケアを組み合わせて、継続しやすい姿勢改善をご提案します。
                </p>
              </div>
              <div className="grid gap-2 rounded-2xl bg-white/92 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>肩の水平差</span>
                  <span className="font-semibold text-crown">
                    2.3cm → 0.5cm
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>頭部前方突出</span>
                  <span className="font-semibold text-crown">
                    3.1cm → 1.2cm
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>骨盤の傾き</span>
                  <span className="font-semibold text-crown">2.0° → 0.4°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
