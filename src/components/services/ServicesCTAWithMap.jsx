"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function ServicesCTA() {
  const t = useTranslations("Services");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="py-16 bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6">
        <div className="relative bg-gray-50 border border-gray-100/80 p-8 md:p-16 overflow-hidden select-none">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-(--main-color)/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-(--primary-color)/25 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-4xl font-black leading-tight text-(--primary-color)">
              {t("map_section_title")}
            </h2>

            <p className="text-xs md:text-sm text-(--alt-color)/90 font-medium max-w-xl mx-auto leading-relaxed">
              {t("map_section_desc")}
            </p>

            <div className="pt-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-(--primary-color) hover:bg-(--main-color) text-white px-8 py-4 font-black text-xs md:text-sm transition-all duration-300 tracking-wide cursor-pointer group shadow-md shadow-(--primary-color)/10"
              >
                <span>{t("map_section_btn")}</span>
                <MdOutlineArrowOutward className="text-base group-hover:rotate-45 transition-transform duration-300 text-(--main-color) group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
