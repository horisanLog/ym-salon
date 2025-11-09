import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] px-4 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]" aria-hidden />
      <div className="mx-auto max-w-screen-sm rounded-3xl border border-crown/30 bg-white p-10 text-center shadow-[0_18px_40px_rgba(199,162,83,0.12)]">
        <p className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">404 Not Found</p>
        <h1 className="mt-4 text-3xl font-bold text-text-primary">お探しのページが見つかりません</h1>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-crown" />
        <p className="mt-4 text-sm text-text-secondary">
          URL が変更されたか、公開が終了した可能性があります。メニューから別のページをご覧いただくか、トップページへお戻りください。
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-accent-strong"
          >
            トップページに戻る
          </Link>
          <Link
            href="/reservation"
            className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
          >
            予約ページへ
          </Link>
        </div>
      </div>
    </section>
  );
}
