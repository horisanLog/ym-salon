import Head from "next/head";
import type { GetStaticProps } from "next";
import { AccessSection } from "@/components/home/AccessSection";
import { ReservationCTA } from "@/components/common/ReservationCTA";
import { getSalonInfo } from "@/lib/data-loader";
import type { SalonInfo } from "@/types";

interface AccessPageProps {
  salonInfo: SalonInfo;
}

export default function AccessPage({ salonInfo }: AccessPageProps) {
  return (
    <>
      <Head>
        <title>アクセス・営業時間｜Y&apos;m 整体サロン</title>
        <meta
          name="description"
          content="Y'm 整体サロンのアクセス情報。戸田駅東口から徒歩5分、専用駐車場3台あり。営業時間や道順、駐車場情報をご確認いただけます。"
        />
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">Access</span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">アクセス・営業時間</h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 text-base text-text-secondary">
            JR 埼京線「戸田駅」東口から徒歩 5 分。専用駐車場を 3 台ご用意しています。お車でお越しの際は、道路状況によりお時間に余裕を持ってご来店ください。
          </p>
        </div>
      </section>

      <AccessSection salonInfo={salonInfo} />

      <section className="py-16">
        <div className="mx-auto grid max-w-screen-xl gap-6 px-4 md:grid-cols-2">
          <div className="rounded-3xl border border-crown/30 bg-white p-6 shadow-[0_18px_40px_rgba(199,162,83,0.12)]">
            <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">Train</span>
            <h2 className="mt-2 text-xl font-semibold text-text-primary">電車でお越しの場合</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>
                JR 埼京線「戸田駅」東口を出て直進 → コンビニを右折 → 2 つ目の角を左折 → サンプルビル 2F
              </li>
              <li>JR「北戸田駅」からは徒歩 12 分。タクシーで 5 分程度です。</li>
              <li>蕨駅・戸田公園方面からは国際興業バス「戸田駅入口」バス停が便利です。</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-crown/30 bg-white p-6 shadow-[0_18px_40px_rgba(199,162,83,0.12)]">
            <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">Car</span>
            <h2 className="mt-2 text-xl font-semibold text-text-primary">お車でお越しの場合</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>首都高速「戸田南 IC」から約 10 分。「美女木 JCT」から約 15 分。</li>
              <li>サロン前の共用スペースに 3 台の専用駐車場があります。</li>
              <li>満車の場合は近隣コインパーキング（戸田駅前パーキング、市営駐車場）をご利用ください。</li>
              <li>自転車でお越しの際は、ビル 1F の駐輪スペースをご利用いただけます。</li>
            </ul>
          </div>
        </div>
      </section>

      <ReservationCTA
        title="道順・空き状況はお気軽にお問い合わせください"
        description="LINE では道順の写真や駐車場のご案内もお送りしています。ご来店前に不安な点があれば、遠慮なくご連絡ください。"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps<AccessPageProps> = async () => {
  const salonInfo = getSalonInfo();
  return {
    props: {
      salonInfo,
    },
  };
};
