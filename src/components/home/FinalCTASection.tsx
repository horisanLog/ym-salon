import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="border-y border-crown/30 bg-highlight py-16">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-6 px-4 text-center">
        <p className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">
          Special Offer
        </p>
        <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
          プレオープン期間は初回 2,500 円〜
        </h2>
        <div className="h-1 w-16 rounded-full bg-crown" />
        <p className="max-w-2xl text-base text-text-secondary">
          AI
          姿勢診断レポート付きで、お身体の状態を分かりやすくご説明します。まずは
          LINE から空き状況をご確認ください。 無理な勧誘は一切ございません。
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="line://ti/p/@ym-salon" className="btn-primary">
            <MessageCircle className="h-4 w-4" />
            LINE で予約する
          </a>
          <Link href="/reservation" className="btn-ghost">
            予約ページへ進む
          </Link>
        </div>
      </div>
    </section>
  )
}
