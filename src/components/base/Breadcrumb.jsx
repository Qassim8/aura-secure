"use client";

import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  const locale = useLocale();

  const isRtl = locale === "ar";

  return (
    <section className="relative overflow-hidden bg-(--primary-color) py-24 md:py-32">
      {/* GRID */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      {/* RED GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-(--main-color)/20 blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* SMALL LABEL */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-(--main-color)" />

            <span className="text-(--main-color) uppercase tracking-[0.35em] text-xs font-black">
              Aura Secure
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
