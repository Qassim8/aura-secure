"use client";
import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function PageHeader({ title }) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative bg-(--primary-color) py-16 md:py-20 overflow-hidden text-right select-none">
      {/* شبكة ديكورية هندسية خافتة جداً في الخلفية تعزز الطابع الأمني الرقمي */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none"></div>

      <div className="container relative z-10 flex flex-col justify-center items-center gap-4">
        {/* 1. عنوان الصفحة الرئيسي الضخم والفخم */}
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          {title}
        </h1>

        {/* 2. مسار التنقل البريد كرمب (Breadcrumb) النظيف */}
        <nav className="flex items-center gap-2 text-xs md:text-sm font-bold bg-white/5 backdrop-blur-md border border-white/5 px-5 py-2.5 rounded-xl">
          {/* رابط الرئيسية الديناميكي المتوافق مع اللغة */}
          <Link
            href={`/${locale}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isRtl ? "الرئيسية" : "Home"}
          </Link>

          {/* سهم التوجيه الذكي الذي ينعكس تلقائياً حسب اتجاه الصفحة RTL / LTR */}
          {isRtl ? (
            <MdChevronLeft className="text-gray-600 text-base" />
          ) : (
            <MdChevronRight className="text-gray-600 text-base" />
          )}

          {/* اسم الصفحة الحالية النشط باللون الأحمر */}
          <span className="text-(--main-color)">{title}</span>
        </nav>
      </div>
    </section>
  );
}
