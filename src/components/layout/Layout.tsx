import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReservationStickyBar } from "./ReservationStickyBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-surface-base text-text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        メインコンテンツへスキップ
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <ReservationStickyBar />
    </div>
  );
}
