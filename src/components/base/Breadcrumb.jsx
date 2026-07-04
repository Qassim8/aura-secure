"use client";

import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-(--primary-color)/80 z-5"></div>

      {/* BACKGROUND IMAGE */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          fill
          sizes="100vw"
          src="/b.jpg"
          alt=""
          priority
          className="object-cover"
        />
      </div>

      {/* RED GLOW */}
      <div
        className={`absolute top-0 ${isRtl ? "left-0" : "right-0"} w-125 h-125 bg-(--main-color)/20 blur-3xl z-10`}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          {/* SMALL LABEL */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-(--main-color)" aria-hidden="true" />
            <span className="text-(--main-color) uppercase tracking-[0.35em] text-xs font-black">
              {isRtl ? "أوراسيكيور" : "OraSecure"}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight uppercase">
            {title}
          </h1>

          {/* SUBTITLE */}
          {subtitle && (
            <p className="mt-8 text-white/70 text-lg leading-8 max-w-2xl font-medium">
              {subtitle}
            </p>
          )}

          {/* BREADCRUMB NAV */}
          <nav
            aria-label={isRtl ? "مسار التنقل الفرعي" : "Breadcrumb"}
            className="flex flex-wrap items-center gap-2 mt-10 text-sm font-bold"
          >
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              // معالجة روابط اللغة برمجياً هنا لتبسيط المصفوفة الخارجية
              const dynamicHref = item.url.startsWith("http")
                ? item.url
                : `/${locale}${item.url === "/" ? "" : item.url}`;

              return (
                <React.Fragment key={index}>
                  {!isLast ? (
                    <Link
                      href={dynamicHref}
                      className="text-white/50 hover:text-white transition-colors focus:outline-hidden"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="text-(--main-color)" aria-current="page">
                      {item.name}
                    </span>
                  )}

                  {!isLast &&
                    (isRtl ? (
                      <MdChevronLeft
                        className="text-white/30 text-lg shrink-0"
                        aria-hidden="true"
                      />
                    ) : (
                      <MdChevronRight
                        className="text-white/30 text-lg shrink-0"
                        aria-hidden="true"
                      />
                    ))}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-(--main-color)/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
