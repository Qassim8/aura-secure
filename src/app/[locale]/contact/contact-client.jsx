"use client";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import React from "react";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactSection from "@/components/contact/ContactSection";
import PageHeader from "@/components/base/Breadcrumb";
import { SITE_URL } from "@/lib/url";

export default function ContactClient() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  React.useEffect(() => {}, []);

  // 2. مصفوفة البيانات الموحدة باستخدام الهيكل الجديد (name و url)
  const breadcrumbsData = [
    {
      name: isRtl ? "الرئيسية" : "Home",
      url: "/",
    },
    {
      name: isRtl ? "اتصل بنا" : "Contact Us",
      url: "/contact",
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
      <PageHeader title={t("Contact_1")} breadcrumbs={breadcrumbsData} />
      <ContactInfo />
      <ContactSection bg={"bg-(--second-color)"} />
    </main>
  );
}
