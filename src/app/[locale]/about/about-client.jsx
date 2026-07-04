"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import AboutSection from "@/components/about/AboutSection";
import VisionMissionSection from "@/components/about/VisionMission";
import StatsSection from "@/components/shared/StatsSection";
import PartnersSection from "@/components/shared/Partners";
import PageHeader from "@/components/base/Breadcrumb";
import { SITE_URL } from "@/lib/url";

export default function AboutClient() {
  const t = useTranslations("About");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // 2. مصفوفة البيانات الموحدة للطرفين (الواجهة البصرية + السكيما البرمجية)
  const breadcrumbsData = [
    {
      name: isRtl ? "الرئيسية" : "Home",
      url: "/",
    },
    {
      name: isRtl ? "من نحن" : "About Us",
      url: "/about",
    },
  ];

  // 3. بناء الـ BreadcrumbList Schema تلقائياً بناءً على المصفوفة الموحدة
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbsData.map((b, i) => {
      const absoluteUrl = b.url.startsWith("http")
        ? b.url
        : `${SITE_URL}${b.url === "/" ? "" : b.url}`;

      return {
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: absoluteUrl,
      };
    }),
  };

  return (
    <main>
      {/* 4. حقن كود السكيما في الـ DOM لتلتقطه عناكب جوجل (Googlebots) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 5. عرض الترويسة البصرية للمستخدمين */}
      <PageHeader title={t("section_tag")} breadcrumbs={breadcrumbsData} />

      <AboutSection bg="white" />
      <VisionMissionSection bg="bg-(--second-color)" />
      <StatsSection bg="bg-white" />
      <PartnersSection bg="bg-(--second-color)" />
    </main>
  );
}
