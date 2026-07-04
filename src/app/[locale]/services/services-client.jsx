"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import PageHeader from "@/components/base/Breadcrumb"; // تأكد من مطابقة اسم ومسار المكون المطور لديك
import ServicesSection from "@/components/services/ServicesSection";
import ServicesCTAWithMap from "@/components/services/ServicesCTAWithMap";
import { SITE_URL } from "@/lib/url";

export default function ServicesClient() {
  const t = useTranslations("Services");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // 2. مصفوفة البيانات الموحدة باستخدام الهيكل الجديد (name و url)
  const breadcrumbsData = [
    {
      name: isRtl ? "الرئيسية" : "Home",
      url: "/",
    },
    {
      name: isRtl ? "الخدمات" : "Our Services",
      url: "/services",
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
      <PageHeader title={t("Services_1")} breadcrumbs={breadcrumbsData} />

      <ServicesSection bg="bg-white" />
      <ServicesCTAWithMap />
    </main>
  );
}
