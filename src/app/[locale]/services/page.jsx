"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import ServicesSection from "@/components/services/ServicesSection";
import ServicesCTAWithMap from "@/components/services/ServicesCTAWithMap";

export default function ServicesPage() {
  const locale = useLocale();
  const t = useTranslations("Services");

  return (
    <main>
      {/* 1. رأس الصفحة والمسار المشترك الفخم */}
      <Breadcrumb title={t("Services_1")} />

      {/* 2. شبكة عرض تفاصيل الخدمات الهندسية */}
      <ServicesSection bg="bg-white" />

      <ServicesCTAWithMap />
    </main>
  );
}
