import Link from "next/link"
import { type SalonInfo } from "@/types"
import { GoogleMapEmbed } from "@/components/common/GoogleMapEmbed"

interface AccessSectionProps {
  salonInfo: SalonInfo
}

export function AccessSection({ salonInfo }: AccessSectionProps) {
  const mapUrl = `https://www.google.com/maps?q=${salonInfo.coordinates.lat},${salonInfo.coordinates.lng}&output=embed`
  const businessHours = Object.entries(salonInfo.businessHours)

  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <span className="font-playfair text-lg uppercase tracking-[0.3em] text-crown">
                Access
              </span>
              <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
                アクセス・営業時間
              </h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-crown" />
              <p className="mt-3 text-base text-text-secondary">
                JR 埼京線「戸田駅」東口から徒歩 5 分。専用駐車場を 3
                台ご用意しております。道順や駐車場の場所でご不明点がございましたら、お気軽にお問い合わせください。
              </p>
            </div>
            <div className="grid gap-4 rounded-3xl border border-crown/30 bg-white p-6 shadow-[0_18px_40px_rgba(199,162,83,0.12)] md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">
                  サロン所在地
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {salonInfo.address}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  最寄り駅：{salonInfo.access.nearestStation}（徒歩{" "}
                  {salonInfo.access.walkingTime} 分）
                </p>
                <ul className="mt-3 space-y-1 text-xs text-text-secondary">
                  {salonInfo.access.directions.map((direction) => (
                    <li key={direction} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crown" />
                      <span>{direction}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs text-text-secondary">
                  <p>
                    駐車場：
                    {salonInfo.parking.available
                      ? `あり（${salonInfo.parking.capacity}台・${salonInfo.parking.fee}）`
                      : "なし"}
                  </p>
                  {salonInfo.parking.nearbyParking && (
                    <p>近隣：{salonInfo.parking.nearbyParking.join("、 ")}</p>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">
                  営業時間
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-text-secondary">
                  {businessHours.map(([day, info]) => (
                    <li
                      key={day}
                      className="flex items-center justify-between rounded-lg border border-crown/15 bg-highlight px-3 py-2"
                    >
                      <span className="font-medium text-text-primary">
                        {dayLabel(day)}
                      </span>
                      <span>
                        {info.isHoliday
                          ? "休業"
                          : `${info.open}〜${info.close}`}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-text-secondary">
                  定休日：{salonInfo.regularHolidays.join("・")}
                </p>
                {salonInfo.specialHolidays && (
                  <p className="text-xs text-text-secondary">
                    特別休業日：{salonInfo.specialHolidays.join("・")}
                  </p>
                )}
                <div className="mt-4 space-y-1 text-sm text-text-secondary">
                  <p>
                    電話：
                    <a href={`tel:${salonInfo.phone}`} className="text-crown">
                      {salonInfo.phone}
                    </a>
                  </p>
                  <p>
                    メール：
                    <a
                      href={`mailto:${salonInfo.email}`}
                      className="text-crown"
                    >
                      {salonInfo.email}
                    </a>
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    {salonInfo.socialMedia.line && (
                      <a
                        href={salonInfo.socialMedia.line}
                        className="btn-primary px-3 py-2 text-xs"
                      >
                        LINE 公式
                      </a>
                    )}
                    {salonInfo.socialMedia.instagram && (
                      <a
                        href={salonInfo.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline px-3 py-2 text-xs"
                      >
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/access"
              className="inline-flex w-fit items-center justify-center rounded-full border border-crown px-5 py-3 text-sm font-semibold text-crown transition-colors hover:bg-highlight"
            >
              アクセスページで詳しく見る
            </Link>
          </div>
          <GoogleMapEmbed embedUrl={mapUrl} title="Y'm 整体サロン" />
        </div>
      </div>
    </section>
  )
}

function dayLabel(key: string) {
  const labels: Record<string, string> = {
    monday: "月",
    tuesday: "火",
    wednesday: "水",
    thursday: "木",
    friday: "金",
    saturday: "土",
    sunday: "日",
  }
  return labels[key] ?? key
}
