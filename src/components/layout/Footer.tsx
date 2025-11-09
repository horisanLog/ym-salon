import Link from "next/link"
import { PhoneCall, Instagram, MessageCircle } from "lucide-react"
import { LogoMark } from "@/components/common/LogoMark"

const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/menu", label: "メニュー・料金" },
  { href: "/ai-diagnosis", label: "AI姿勢診断" },
  { href: "/voice", label: "お客様の声" },
  { href: "/about", label: "サロン紹介" },
  { href: "/blog", label: "コラム" },
  { href: "/access", label: "アクセス" },
  { href: "/reservation", label: "予約" },
]

const POLICY_LINKS = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-crown bg-surface-accent/20 pb-24 md:mt-20 md:pb-0">
      <div className="mx-auto grid max-w-screen-xl gap-12 px-6 pb-12 pt-16 md:grid-cols-4 md:gap-16 md:px-8 md:pb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <LogoMark size={48} />
            <span className="font-playfair text-2xl font-semibold text-crown">
              Y&apos;m
            </span>
          </div>
          <p className="text-sm leading-relaxed text-text-secondary">
            AI
            姿勢診断と整体・エステを組み合わせた総合ケアで、姿勢改善と美容の両立をサポートします。戸田市駅近でアクセスも良好です。
          </p>
          <div className="space-y-3">
            <a href="line://ti/p/@ym-salon" className="btn-primary w-full">
              <MessageCircle className="h-4 w-4" />
              LINE 予約
            </a>
            <a href="tel:048-123-4567" className="btn-outline w-full">
              <PhoneCall className="h-4 w-4" />
              048-123-4567
            </a>
            <a
              href="https://instagram.com/ym_salon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold text-text-primary">
            メニュー
          </h3>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold text-text-primary">
            サロン情報
          </h3>
          <ul className="space-y-3 text-sm leading-relaxed text-text-secondary">
            <li>
              <div className="font-medium text-text-primary">住所</div>
              埼玉県戸田市本町 1-2-3 サンプルビル 2F
            </li>
            <li>
              <div className="font-medium text-text-primary">最寄り駅</div>
              JR 埼京線 戸田駅 東口徒歩 5 分
            </li>
            <li>
              <div className="font-medium text-text-primary">営業時間</div>
              平日 9:00〜20:00 / 土日 9:00〜18:00
            </li>
            <li>
              <div className="font-medium text-text-primary">定休日</div>
              不定休
            </li>
            <li>
              <div className="font-medium text-text-primary">メール</div>
              info@ym-salon.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold text-text-primary">
            ポリシー
          </h3>
          <ul className="space-y-3 text-sm">
            {POLICY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl border border-crown/30 bg-highlight p-5 text-sm leading-relaxed text-text-secondary">
            <p>
              ご紹介特典やキャンペーンについては、LINE
              公式アカウントで最新情報をお届けしています。
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-border-muted bg-surface-base/80">
        <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-3 px-6 py-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between md:px-8 md:pb-6">
          <p>
            © {new Date().getFullYear()} Y&apos;m 整体サロン. All rights
            reserved.
          </p>
          <p className="text-text-primary">
            無理な勧誘は一切ありません。お気軽にご相談ください。
          </p>
        </div>
      </div>
    </footer>
  )
}
