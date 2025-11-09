import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>利用規約｜Y&apos;m 整体サロン</title>
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-screen-xl px-4">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">Terms</span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">利用規約</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 text-sm text-text-secondary">
            この利用規約（以下「本規約」）は、Y&apos;m 整体サロン（以下「当サロン」）が提供するサービスの利用条件を定めるものです。ご利用の際は、本規約に同意いただいたものとみなします。
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl space-y-6 rounded-3xl border border-crown/20 bg-white px-6 py-10 shadow-sm text-sm leading-7 text-text-secondary md:px-10">
          <h2 className="text-xl font-semibold text-text-primary">第1条（適用）</h2>
          <p>本規約は、お客様と当サロンとの間のサービス利用に関わる一切の関係に適用されます。</p>
          <h2 className="text-xl font-semibold text-text-primary">第2条（予約・来店）</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              ご予約のお時間に遅れる場合は、お早めにご連絡ください。
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              無断キャンセルや度重なるキャンセルが続く場合は、以降のご予約をお断りする場合がございます。
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              体調不良や持病がある場合は、事前にお知らせください。
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-text-primary">第3条（禁止行為）</h2>
          <p>以下の行為を禁止します。</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              他のお客様やスタッフに対する迷惑行為・暴言
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              違法または公序良俗に反する行為
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              当サロンの設備・備品を破損する行為
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-text-primary">第4条（免責事項）</h2>
          <p>施術の効果には個人差があります。特定の結果を保証するものではありません。また、適切な施術を行うために必要な情報が十分に提供されない場合、当サロンは責任を負いかねます。</p>
          <h2 className="text-xl font-semibold text-text-primary">第5条（規約の変更）</h2>
          <p>当サロンは、必要に応じて本規約を変更することがあります。変更後の内容はウェブサイトに掲載した時点で効力を生じます。</p>
          <p className="pt-4 text-text-secondary">制定日：2025年11月9日</p>
        </div>
      </section>
    </>
  );
}
