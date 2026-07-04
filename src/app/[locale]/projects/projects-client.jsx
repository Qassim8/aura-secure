"use client";
import PageHeader from "@/components/base/Breadcrumb";
import ProcessSection from "@/components/projects/ProcessSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import { SITE_URL } from "@/lib/url";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

export default function ProjectsClient() {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // 2. مصفوفة البيانات الموحدة باستخدام الهيكل الجديد (name و url)
  const breadcrumbsData = [
    {
      name: isRtl ? "الرئيسية" : "Home",
      url: "/",
    },
    {
      name: isRtl ? "اعمالنا" : "Our Projects",
      url: "/projects",
    },
  ];

  // 3. بناء سكيما مسار التنقل ديناميكياً لتفادي أي أخطاء في الـ Search Console
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
      {/* 4. حقن كود السكيما المنظم في الصفحة لجوجل */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 5. استدعاء المكون البصري المحدث */}
      <PageHeader title={t("Project_1")} breadcrumbs={breadcrumbsData} />
      <ProjectsSection isPage={true} />
      <ProcessSection />
      <TestimonialsSection bg="bg-white" />
    </main>
  );
}
