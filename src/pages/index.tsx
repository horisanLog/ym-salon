import Head from "next/head";
import type { GetStaticProps } from "next";
import {
  HeroSection,
  FeaturesSection,
  MenuOverviewSection,
  AIDiagnosisIntro,
  CustomerVoicesSection,
  StaffIntroSection,
  AccessSection,
  FinalCTASection,
} from "@/components/home";
import { ReservationCTA } from "@/components/common/ReservationCTA";
import { FAQSection } from "@/components/common/FAQSection";
import { getServices, getReviews, getStaff, getFaqItems, getSalonInfo } from "@/lib/data-loader";
import type { Service, Review, Staff, FAQItem, SalonInfo } from "@/types";

interface HomePageProps {
  services: Service[];
  reviews: Review[];
  staff: Staff[];
  faq: FAQItem[];
  salonInfo: SalonInfo;
}

export default function HomePage({ services, reviews, staff, faq, salonInfo }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Y&apos;m 整体サロン｜AI姿勢診断×整体×エステで叶える姿勢改善と美容ケア</title>
        <meta
          name="description"
          content="AI 姿勢診断と整体・エステ・電磁パルスの総合ケアで、姿勢改善と美容をサポートする Y'm 整体サロン。戸田市駅徒歩 5 分、プレオープン特別価格 2,500 円〜。"
        />
      </Head>
      <HeroSection />
      <FeaturesSection />
      <MenuOverviewSection services={services} />
      <AIDiagnosisIntro />
      <CustomerVoicesSection reviews={reviews} />
      <StaffIntroSection staff={staff} />
      <AccessSection salonInfo={salonInfo} />
      <ReservationCTA />
      <FAQSection items={faq} limit={5} showViewAllLink />
      <FinalCTASection />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const [services, reviews, staff, faq, salonInfo] = [
    getServices(),
    getReviews(),
    getStaff(),
    getFaqItems(),
    getSalonInfo(),
  ];

  return {
    props: {
      services,
      reviews,
      staff,
      faq,
      salonInfo,
    },
  };
};
