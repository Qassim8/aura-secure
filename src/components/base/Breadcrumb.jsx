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
      <div className="absolute top-0 left-0 w-full h-full bg-(--primary-color)/80 z-5"></div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          fill // يخبر Next.js أن الصورة تمتد لتملأ الأب تماماً بجودتها الكاملة
          sizes="100vw" // يخبر المتصفح بالتعامل معها كعرض شاشة كاملة لضبط الـ Optimization
          src="/b.jpg"
          alt="breadcrumb background"
          priority // لأنها في أعلى الصفحة (Header) لتسريع تحميلها وعرض جودتها فوراً
          className="object-cover" // يحافظ على أبعاد الصورة ونسبها بدون تشويه (مط)
        />
      </div>

      {/* RED GLOW */}
      <div
        className={`absolute top-0 ${isRtl ? "left-0" : "right-0"} w-125 h-125 bg-(--main-color)/20 blur-3xl z-10`}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* SMALL LABEL */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-(--main-color)" />

            <span className="text-(--main-color) uppercase tracking-[0.35em] text-xs font-black">
              {isRtl ? "اوراسيكيور" : "Aura Secure"}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight uppercase">
            {title}
          </h1>

          {/* SUBTITLE */}
          {subtitle && (
            <p className="mt-8 text-white/70 text-lg leading-8 max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* BREADCRUMB */}
          <nav className="flex flex-wrap items-center gap-2 mt-10 text-sm font-bold">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <React.Fragment key={index}>
                  {!isLast ? (
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-(--main-color)">{item.label}</span>
                  )}

                  {!isLast &&
                    (isRtl ? (
                      <MdChevronLeft className="text-white/30 text-lg" />
                    ) : (
                      <MdChevronRight className="text-white/30 text-lg" />
                    ))}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-(--main-color)/40 to-transparent" />
    </section>
  );
}
