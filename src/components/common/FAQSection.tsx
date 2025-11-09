import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { type FAQItem } from "@/types";

interface FAQSectionProps {
  items: FAQItem[];
  limit?: number;
  heading?: string;
  description?: string;
  showViewAllLink?: boolean;
}

export function FAQSection({
  items,
  limit,
  heading = "よくあるご質問",
  description = "ご不安な点があれば、お問い合わせフォームまたは LINE からお気軽にご相談ください。",
  showViewAllLink = false,
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <section className="bg-surface-accent/30 py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl">{heading}</h2>
          <p className="mt-4 text-base text-text-secondary">{description}</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border-muted overflow-hidden rounded-2xl border border-border-muted bg-white shadow-sm">
          {displayItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-text-primary">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 text-accent transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-text-secondary">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {showViewAllLink && (
          <div className="mt-6 text-center">
            <Link href="/reservation" className="text-sm font-semibold text-accent transition-colors hover:text-accent">
              分からないことはお気軽にお問い合わせください →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
