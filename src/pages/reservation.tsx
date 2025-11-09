import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, PhoneCall, CalendarCheck } from "lucide-react";
import { getServices } from "@/lib/data-loader";
import type { GetStaticProps } from "next";
import type { Service } from "@/types";

const reservationSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().min(8, "電話番号を入力してください"),
  preferredDate: z.string().min(1, "ご希望の日付を選択してください"),
  preferredTime: z.string().min(1, "ご希望の時間帯を選択してください"),
  serviceId: z.string().min(1, "ご希望のメニューを選択してください"),
  message: z.string().optional(),
  agree: z.boolean().refine((val) => val, "プライバシーポリシーへの同意が必要です"),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

interface ReservationPageProps {
  services: Service[];
}

export default function ReservationPage({ services }: ReservationPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      preferredTime: "10:00-12:00",
      serviceId: services[0]?.id ?? "",
      agree: false,
    },
  });

  const onSubmit = async (values: ReservationFormValues) => {
    console.info("予約内容", values);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset({ ...values, message: "", agree: false });
  };

  return (
    <>
      <Head>
        <title>ご予約・お問い合わせ｜Y&apos;m 整体サロン</title>
        <meta
          name="description"
          content="Y'm 整体サロンの予約ページ。LINE・電話・Webフォームから 24 時間受付中。AI 姿勢診断付きで初回は 2,500 円から体験いただけます。"
        />
      </Head>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf8ee] via-white to-[#eef7ee] py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#f8ead2,transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <span className="font-playfair text-sm uppercase tracking-[0.45em] text-crown">Reservation</span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary md:text-4xl">ご予約・お問い合わせ</h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-crown" />
          <p className="mt-4 text-base text-text-secondary">
            LINE・お電話・Web フォームからご予約いただけます。空き状況の確認のみでもお気軽にご連絡ください。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-screen-xl gap-6 px-4 md:grid-cols-3">
          <a
            href="line://ti/p/@ym-salon"
            className="group relative flex h-full flex-col gap-3 rounded-3xl border border-crown/30 bg-white p-6 text-left shadow-[0_18px_40px_rgba(199,162,83,0.12)] transition-transform hover:-translate-y-1"
          >
            <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
            <MessageCircle className="mt-5 h-8 w-8 text-crown" />
            <h2 className="text-lg font-semibold text-text-primary">LINE で予約</h2>
            <p className="text-sm text-text-secondary">
              24 時間受付。空き時間の確認や事前相談、レポートの受け取りも LINE で完結します。
            </p>
            <span className="mt-auto text-sm font-semibold text-crown">友だち追加はこちら →</span>
          </a>
          <a
            href="tel:048-123-4567"
            className="group relative flex h-full flex-col gap-3 rounded-3xl border border-crown/30 bg-white p-6 text-left shadow-[0_18px_40px_rgba(199,162,83,0.12)] transition-transform hover:-translate-y-1"
          >
            <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
            <PhoneCall className="mt-5 h-8 w-8 text-crown" />
            <h2 className="text-lg font-semibold text-text-primary">お電話で予約</h2>
            <p className="text-sm text-text-secondary">
              平日 9:00〜20:00 / 土日 9:00〜18:00。施術中は折り返しご連絡させていただきます。
            </p>
            <span className="mt-auto text-sm font-semibold text-crown">048-123-4567</span>
          </a>
          <div className="group relative flex h-full flex-col gap-3 rounded-3xl border border-crown/20 bg-highlight p-6 text-left shadow-sm">
            <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-crown" aria-hidden />
            <CalendarCheck className="mt-5 h-8 w-8 text-crown" />
            <h2 className="text-lg font-semibold text-text-primary">Web フォームで予約</h2>
            <p className="text-sm text-text-secondary">
              下記フォームからご希望日時をお送りください。確認後、24 時間以内に担当者よりご連絡いたします。
            </p>
            <span className="mt-auto text-sm font-semibold text-crown">フォームはこのまま下へ</span>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-screen-lg px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-6 rounded-3xl border border-crown/30 bg-white p-6 shadow-[0_18px_40px_rgba(199,162,83,0.12)] md:p-10"
          >
            <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">Form</span>
            <h2 className="text-2xl font-bold text-text-primary">予約フォーム</h2>
            <div className="h-1 w-14 rounded-full bg-crown" />
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-text-primary" htmlFor="name">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-border-muted px-4 py-3 text-sm focus:border-crown focus:outline-none"
                  placeholder="例）山田 花子"
                  {...register("name")}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-text-primary" htmlFor="email">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-border-muted px-4 py-3 text-sm focus:border-crown focus:outline-none"
                  placeholder="info@example.com"
                  {...register("email")}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-text-primary" htmlFor="phone">
                  お電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-border-muted px-4 py-3 text-sm focus:border-crown focus:outline-none"
                  placeholder="例）09012345678"
                  {...register("phone")}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-text-primary" htmlFor="serviceId">
                  ご希望のメニュー <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceId"
                  className="mt-2 w-full rounded-xl border border-border-muted px-4 py-3 text-sm focus:border-crown focus:outline-none"
                  {...register("serviceId")}
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}（¥{service.price.toLocaleString()} / {service.duration}分）
                    </option>
                  ))}
                </select>
                {errors.serviceId && <p className="mt-1 text-xs text-red-500">{errors.serviceId.message}</p>}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-text-primary" htmlFor="preferredDate">
                  ご希望日 <span className="text-red-500">*</span>
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  className="mt-2 w-full rounded-xl border border-border-muted px-4 py-3 text-sm focus:border-crown focus:outline-none"
                  {...register("preferredDate")}
                />
                {errors.preferredDate && <p className="mt-1 text-xs text-red-500">{errors.preferredDate.message}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-text-primary" htmlFor="preferredTime">
                  ご希望の時間帯 <span className="text-red-500">*</span>
                </label>
                <select
                  id="preferredTime"
                  className="mt-2 w-full rounded-xl border border-border-muted px-4 py-3 text-sm focus:border-crown focus:outline-none"
                  {...register("preferredTime")}
                >
                  <option value="10:00-12:00">10:00〜12:00</option>
                  <option value="12:00-14:00">12:00〜14:00</option>
                  <option value="14:00-16:00">14:00〜16:00</option>
                  <option value="16:00-18:00">16:00〜18:00</option>
                  <option value="18:00-20:00">18:00〜20:00</option>
                </select>
                {errors.preferredTime && <p className="mt-1 text-xs text-red-500">{errors.preferredTime.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-text-primary" htmlFor="message">
                ご質問・お悩み（任意）
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 w-full rounded-xl border border-border-muted px-4 py-3 text-sm focus:border-crown focus:outline-none"
                placeholder="例）産後の骨盤の歪みが気になります。子連れでの来店は可能でしょうか？"
                {...register("message")}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>

            <label className="flex items-start gap-3 text-xs text-text-secondary">
              <input type="checkbox" className="mt-1 rounded border-border-muted" {...register("agree")} />
              <span>
                <Link href="/privacy" className="text-crown underline">
                  プライバシーポリシー
                </Link>
                に同意の上、送信します。
              </span>
            </label>
            {errors.agree && <p className="-mt-4 text-xs text-red-500">{errors.agree.message}</p>}

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:bg-accent-muted"
              disabled={isSubmitting}
            >
              送信する
            </button>
            {submitted && (
              <p className="text-sm font-semibold text-crown">送信が完了しました。24 時間以内に担当者よりご連絡いたします。</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<ReservationPageProps> = async () => {
  const services = getServices();
  return {
    props: {
      services,
    },
  };
};
