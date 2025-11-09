import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/common/LogoMark";

const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/menu", label: "メニュー・料金" },
  { href: "/ai-diagnosis", label: "AI姿勢診断" },
  { href: "/voice", label: "お客様の声" },
  { href: "/about", label: "サロン紹介" },
  { href: "/blog", label: "コラム" },
  { href: "/access", label: "アクセス" },
];

function isActivePath(currentPath: string, target: string) {
  if (target === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(target);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-muted/60 bg-surface-base/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-4 py-5 md:py-6">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <LogoMark size={64} />
          <span className="font-playfair text-2xl font-semibold tracking-wide text-crown md:text-[28px]">
            Y&apos;m
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActivePath(router.pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  active ? "text-crown" : "text-text-secondary hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="line://ti/p/@ym-salon" className="btn-primary">
            <MessageCircle className="h-4 w-4" />
            LINE 予約
          </a>
          <Link href="/reservation" className="btn-outline">
            予約ページへ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border-muted p-2 text-text-primary transition-colors hover:border-accent hover:text-accent lg:hidden"
          aria-label="ナビゲーションメニューを開閉"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="space-y-1 border-t border-border-muted bg-surface-base px-4 py-4 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const active = isActivePath(router.pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-lg px-3 py-3 transition-colors ${
                    active ? "bg-accent-soft text-accent" : "text-text-secondary hover:bg-highlight"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="space-y-2 border-t border-border-muted bg-surface-accent/30 px-4 py-4">
            <a
              href="line://ti/p/@ym-salon"
              className="btn-primary w-full"
              onClick={closeMenu}
            >
              <MessageCircle className="h-4 w-4" />
              LINE 予約
            </a>
            <Link
              href="/reservation"
              className="btn-outline w-full"
              onClick={closeMenu}
            >
              予約ページへ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
