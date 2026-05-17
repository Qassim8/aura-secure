"use client";
import { useLocale } from "next-intl";

export default function PartnersSection({ bg }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  const partners = [
    "Saudi Aramco",
    "Ministry of Defense",
    "Ministry of Health",
    "Saudi Post",
    "Social Insurance",
    "Ministry of Housing",
  ];

  return (
    <section className={`py-10 overflow-hidden ${bg}`}>
      <div className="flex flex-col gap-4">
        {[0, 1, 2].map((rowIndex) => {
          const isReverse = rowIndex === 1;

          return (
            <div
              key={rowIndex}
              className="relative overflow-hidden flex"
              dir="ltr" // إجباري لضمان صحة الانميشن
            >
              <div
                className={`flex gap-4 min-w-full shrink-0 ${
                  isReverse
                    ? "animate-marquee-reverse"
                    : "animate-marquee-forward"
                }`}
              >
                {/* نكرر المصفوفة مرتين داخل نفس الـ div */}
                {[...partners, ...partners].map((partner, i) => (
                  <div
                    key={i}
                    className="shrink-0 rounded-full border border-black/5 bg-white/80 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-(--primary-color)"
                  >
                    {partner}
                  </div>
                ))}
              </div>

              {/* نسخة ثانية مطابقة تماماً تتبع الأولى مباشرة لسد الفراغ */}
              <div
                aria-hidden="true"
                className={`flex gap-4 min-w-full shrink-0 ${
                  isReverse
                    ? "animate-marquee-reverse"
                    : "animate-marquee-forward"
                }`}
              >
                {[...partners, ...partners].map((partner, i) => (
                  <div
                    key={`clone-${i}`}
                    className="shrink-0 rounded-full border border-black/5 bg-white/80 px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-(--primary-color)"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
