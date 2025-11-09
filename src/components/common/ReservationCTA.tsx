import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";

interface ReservationCTAProps {
  title?: string;
  description?: string;
}

export function ReservationCTA({
  title = "まずは体験からお気軽に",
  description = "AI 姿勢診断レポート付きで、初回は 2,500 円から。LINE なら 24 時間予約を受け付けています。",
}: ReservationCTAProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl rounded-3xl border border-crown/40 bg-gradient-to-br from-[#fdf8ee] via-white to-[#f4f2ee] px-6 py-12 shadow-[0_25px_60px_rgba(199,162,83,0.18)] md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="font-playfair text-sm uppercase tracking-[0.4em] text-crown">Reservation</span>
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">{title}</h2>
            <div className="h-0.5 w-16 rounded-full bg-crown" />
            <p className="text-base text-text-secondary">{description}</p>
          </div>
          <div className="flex flex-col gap-3 md:min-w-[300px]">
            <a href="line://ti/p/@ym-salon" className="btn-primary">
              <MessageCircle className="h-4 w-4" />
              LINE で予約する
            </a>
            <a href="tel:048-123-4567" className="btn-outline">
              <PhoneCall className="h-4 w-4" />
              048-123-4567 に電話する
            </a>
            <Link href="/reservation" className="btn-ghost">
              予約ページへ進む
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
