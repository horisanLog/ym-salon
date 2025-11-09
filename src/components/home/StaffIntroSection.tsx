import Link from "next/link"
import { type Staff } from "@/types"

interface StaffIntroSectionProps {
  staff: Staff[]
}

export function StaffIntroSection({ staff }: StaffIntroSectionProps) {
  const featured = staff.slice(0, 2)

  return (
    <section className="bg-surface-accent/30 py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-playfair text-lg uppercase tracking-[0.3em] text-crown">
              Staff
            </span>
            <h2 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
              スタッフ紹介
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-crown" />
            <p className="mt-3 max-w-2xl text-base text-text-secondary">
              経験豊富なスタッフが、AI
              データと手技を組み合わせてお一人おひとりに寄り添います。施術前には必ずヒアリングを行い、気になる点を丁寧に確認します。
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-crown px-5 py-3 text-sm font-semibold text-crown transition-colors hover:bg-highlight"
          >
            サロン紹介ページへ
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((member) => (
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
  )
}
