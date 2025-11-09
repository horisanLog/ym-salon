import Head from "next/head"
import type { GetStaticProps } from "next"
import Link from "next/link"
import { getStaff, getSalonInfo } from "@/lib/data-loader"
import type { Staff, SalonInfo } from "@/types"

interface AboutPageProps {
  staff: Staff[]
  salonInfo: SalonInfo
}

export default function AboutPage({ staff, salonInfo }: AboutPageProps) {
  return (
    <>
      <Head>
        <title>サロン紹介｜Y&apos;m 整体サロン</title>
        <meta
          name="description"
          content="Y'm 整体サロンのコンセプト、スタッフ紹介、設備・衛生管理について。AI 姿勢診断で姿勢のクセを可視化し、整体・エステ・電磁パルスでお一人おひとりに合ったケアをご提供します。"
        />
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">
            About us
          </span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">
            サロン紹介
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 text-base text-text-secondary">
            AI
            データと熟練の手技で、身体の内側から美しさと整った姿勢を引き出すサロンです。戸田市の皆さまに寄り添い、気軽に通える価格と空間づくりを大切にしています。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-screen-xl gap-8 px-4 md:grid-cols-2">
          <div className="space-y-4">
            <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">
              Concept
            </span>
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              Y&apos;m のコンセプト
            </h2>
            <div className="h-1 w-14 rounded-full bg-crown" />
            <p className="text-base text-text-secondary">
              Y&apos;m は「Your
              moment」の頭文字。忙しい日常の中で、身体と心のバランスを整えるひとときを提供したいという想いから生まれました。AI
              姿勢診断で現状を見える化し、整体で骨格を整え、エステと電磁パルスで美しさと筋力をサポート。データと感覚の両方からアプローチすることで、持続的な変化につなげます。
            </p>
            <ul className="space-y-3 rounded-3xl border border-crown/30 bg-white p-8 shadow-[0_18px_40px_rgba(199,162,83,0.12)] text-sm leading-relaxed text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                初回カウンセリングでは生活習慣やお悩みを丁寧にヒアリングします。
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                施術スペースは全て個室。ゆったりとリラックスしてお過ごしいただけます。
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                産前産後のケアも充実。お子様連れでのご来店もご相談ください。
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-crown/30 bg-white p-6 shadow-[0_18px_40px_rgba(199,162,83,0.12)]">
            <h2 className="text-xl font-semibold text-text-primary">
              設備と衛生管理
            </h2>
            <p className="mt-3 text-sm text-text-secondary">
              施術に使用する機器は毎回消毒し、リネン類はお客様ごとに交換しています。空気清浄機・加湿器を完備し、快適な室温を保ちながら施術を行います。
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                AI 姿勢診断カメラと 3D 分析ソフトを常設
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                電磁パルス機器、リンパ用マシン、ヒートマット完備
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                使い捨てスリッパ・ガウンをご用意。施術ウェアも無料で貸し出します。
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-crown/20 bg-highlight p-5 text-xs text-text-secondary">
              <p>営業時間：平日 9:00〜20:00 / 土日 9:00〜18:00</p>
              <p className="mt-1">
                電話：
                <a href={`tel:${salonInfo.phone}`} className="text-crown">
                  {salonInfo.phone}
                </a>
              </p>
              <p>
                メール：
                <a href={`mailto:${salonInfo.email}`} className="text-crown">
                  {salonInfo.email}
                </a>
              </p>
              <p className="mt-1">所在地：{salonInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-accent/30 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">
            Team
          </span>
          <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
            スタッフ紹介
          </h2>
          <div className="mt-2 h-1 w-14 rounded-full bg-crown" />
          <p className="mt-3 text-base text-text-secondary">
            多面的な知識と技術を持つスタッフが連携しながら、お悩みに合わせたケアをご提案します。
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {staff.map((member) => (
              <article
                key={member.id}
                className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border-muted/70 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-center"
              >
                <span
                  className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown"
                  aria-hidden
                />
                <div
                  className="mt-5 h-28 w-28 flex-shrink-0 rounded-2xl border border-crown/30 bg-[radial-gradient(circle_at_top,#fdf3d9,transparent_70%)] shadow-inner md:mt-0"
                  aria-hidden="true"
                />
                <div className="mt-2 md:mt-0">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-crown">{member.role}</p>
                  <p className="mt-3 text-sm text-text-secondary">
                    {member.message}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-text-secondary">
                    {member.qualifications.map((qualification) => (
                      <span
                        key={qualification}
                        className="rounded-full border border-crown/30 bg-highlight px-3 py-1 text-crown"
                      >
                        {qualification}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-screen-xl gap-8 px-4 md:grid-cols-2">
          <div className="rounded-3xl border border-crown/30 bg-white p-6 shadow-[0_18px_40px_rgba(199,162,83,0.12)]">
            <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">
              History
            </span>
            <h2 className="mt-2 text-xl font-semibold text-text-primary">
              サロンの歩み
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>2024年：AI姿勢診断システム導入のための準備を開始</li>
              <li>
                2025年：プレオープン期間を設け、初回体験キャンペーンを実施
              </li>
              <li>
                今後：データと手技の融合をさらに追求し、ヘルスケアプログラムを充実予定
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-crown/20 bg-highlight p-6 shadow-sm">
            <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">
              Partners
            </span>
            <h2 className="mt-2 text-xl font-semibold text-text-primary">
              メディア・提携
            </h2>
            <p className="mt-3 text-sm text-text-secondary">
              地域のフィットネスクラブや美容室と連携し、姿勢改善と美容ケアのセミナーを定期開催しています。企業様向けの出張姿勢診断・健康講座もご相談ください。
            </p>
            <Link
              href="/reservation"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-crown px-4 py-2 text-sm font-semibold text-crown transition-colors hover:bg-highlight"
            >
              お問い合わせ・ご相談はこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const staff = getStaff()
  const salonInfo = getSalonInfo()
  return {
    props: {
      staff,
      salonInfo,
    },
  }
}
