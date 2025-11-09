import Head from "next/head"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー｜Y&apos;m 整体サロン</title>
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-screen-xl px-4">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">
            Privacy
          </span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
            プライバシーポリシー
          </h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 text-sm text-text-secondary">
            Y&apos;m
            整体サロン（以下「当サロン」）は、お客様の個人情報を適切に取り扱うため、以下の方針を定めています。
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-screen-xl space-y-6 rounded-3xl border border-crown/20 bg-white px-6 py-10 shadow-sm text-sm leading-7 text-text-secondary md:px-10">
          <h2 className="text-xl font-semibold text-text-primary">
            1. 個人情報の定義
          </h2>
          <p>
            個人情報とは、お客様の氏名・住所・電話番号・メールアドレスなど、特定の個人を識別できる情報を指します。
          </p>
          <h2 className="text-xl font-semibold text-text-primary">
            2. 個人情報の利用目的
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              ご予約内容の確認・連絡
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              施術後のアフターフォローおよびアンケートの依頼
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
              各種キャンペーン・サービスに関するご案内（ご希望のお客様のみ）
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-text-primary">
            3. 個人情報の管理
          </h2>
          <p>
            当サロンは、個人情報の漏えい・改ざん・紛失を防止するため、適切な管理体制と安全対策を講じます。
          </p>
          <h2 className="text-xl font-semibold text-text-primary">
            4. 第三者提供
          </h2>
          <p>
            法令に基づく場合を除き、お客様の同意なく第三者へ個人情報を提供することはありません。
          </p>
          <h2 className="text-xl font-semibold text-text-primary">
            5. 個人情報の開示・訂正・削除
          </h2>
          <p>
            お客様ご本人からのご要望に応じて、登録情報の開示・訂正・削除を速やかに対応いたします。
          </p>
          <h2 className="text-xl font-semibold text-text-primary">
            6. お問い合わせ窓口
          </h2>
          <p>
            本ポリシーに関するお問い合わせは、info@ym-salon.com
            までご連絡ください。
          </p>
          <p className="pt-4 text-text-secondary">制定日：2025年11月9日</p>
        </div>
      </section>
    </>
  )
}
