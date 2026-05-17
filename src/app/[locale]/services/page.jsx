"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import DetailedServicesGrid from "@/components/services/DetailedServicesGrid";
import ServicesSection from "@/components/services/ServicesSection";

export default function ServicesPage() {
  const locale = useLocale();
  const t = useTranslations("Services");

  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      {/* 1. رأس الصفحة والمسار المشترك الفخم */}
      <Breadcrumb title={t("page_main_title")} />

      {/* 2. شبكة عرض تفاصيل الخدمات الهندسية */}
      <ServicesSection bg="bg-white" />
    </main>
  );
}
