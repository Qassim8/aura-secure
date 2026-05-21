"use client";
import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function PartnersSection({ bg }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  // مصفوفة الـ 20 شريك كاملة
  const allPartners = [
    "/partner-01.png",
    "/partner-02.png",
    "/partner-03.png",
    "/partner-04.png",
    "/partner-05.png",
    "/partner-18.png",
    "/partner-06.png",
    "/partner-07.png",
    "/partner-08.png",
    "/partner-09.png",
    "/partner-21.png",
    "/partner-10.png",
    "/partner-19.png",
    "/partner-13.png",
    "/partner-17.png",
    "/partner-15.png",
    "/partner-16.png",
    "/partner-14.png",
    "/partner-11.png",
    "/partner-20.png",
    "/partner-12.png",
  ];

  const row1 = allPartners.slice(0, 10);
  const row2 = allPartners.slice(10, 20);

  const rows = [
    { id: "top-row", data: row1, isDefaultReverse: false },
    { id: "bottom-row", data: row2, isDefaultReverse: true },
  ];

  return (
    <section className={`py-14 overflow-hidden select-none relative ${bg}`}>
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex flex-col gap-8">
        {rows.map((row) => {
          const shouldReverseAnimation = isRtl
            ? !row.isDefaultReverse
            : row.isDefaultReverse;

          return (
            <div
              key={row.id}
              className="relative overflow-hidden flex whitespace-nowrap"
              dir="ltr"
            >
              {/* المجموعة الأولى الشغالة */}
              <div
                className={`flex items-center gap-6 md:gap-12 shrink-0 pr-12 ${
                  shouldReverseAnimation
                    ? "animate-marquee-reverse"
                    : "animate-marquee-forward"
                }`}
              >
                {row.data.map((partner, i) => (
                  <div
                    key={`p1-${i}`}
                    className="relative flex items-center justify-center"
                  >
                    <Image
                      src={partner}
                      alt={`Partner ${row.id}-${i}`}
                      width={100}
                      height={40}
                      className="object-contain max-h-full"
                    />
                  </div>
                ))}
              </div>

              <div
                aria-hidden="true"
                className={`flex items-center gap-6 md:gap-12 shrink-0 pr-12 ${
                  shouldReverseAnimation
                    ? "animate-marquee-reverse"
                    : "animate-marquee-forward"
                }`}
              >
                {row.data.map((partner, i) => (
                  <div
                    key={`p2-clone-${i}`}
                    className="relative flex items-center justify-center"
                  >
                    <Image
                      src={partner}
                      alt={`Partner Clone ${row.id}-${i}`}
                      width={100}
                      height={40}
                      className="object-contain max-h-full"
                    />
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
