import { PhoneCall, MessageCircle } from "lucide-react";

export function ReservationStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-crown bg-surface-base/95 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-screen-sm items-center gap-2 px-4 py-3">
        <a href="line://ti/p/@ym-salon" className="btn-primary w-full">
          <MessageCircle className="h-4 w-4" />
          LINE 予約
        </a>
        <a href="tel:048-123-4567" className="btn-outline w-full">
          <PhoneCall className="h-4 w-4" />
          電話予約
        </a>
      </div>
    </div>
  );
}
