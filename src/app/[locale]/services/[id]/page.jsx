import React from "react";
import ServiceDetailClient from "./ServiceDetailClient";
import { generateServiceMetadata } from "@/lib/seo";
import StructuredData from "@/components/SEO/StructuredData";
import { SITE_URL } from "@/lib/url";

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  // تم تعديل الرابط الثابت هنا ليعتمد على SITE_URL لتوحيد الـ Canonical URL في قوقل
  return generateServiceMetadata(id, locale, SITE_URL);
}

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  const ids = [
    "fire-alarm-systems",
    "fire-fighting-systems",
    "maintenance-contracts",
    "cctv-security-systems",
    "safety-plans-engineering",
  ];

  return locales.flatMap((locale) =>
    ids.map((id) => ({
      locale,
      id,
    })),
  );
}

export default async function ServiceDetailPage({ params }) {
  const { locale, id } = await params;

  const meta = await generateServiceMetadata(id, locale, SITE_URL);

  const breadcrumb = [
    {
      name: locale === "ar" ? "الرئيسية" : "Home",
      url: `${SITE_URL}/${locale}`,
    },
    {
      name: locale === "ar" ? "خدماتنا" : "Services",
      url: `${SITE_URL}/${locale}/services`,
    },
    {
      name: meta.title || "",
      url: `${SITE_URL}/${locale}/services/${id}`,
    },
  ];

  return (
    <>
      {/* تم التعديل هنا ليمرر الـ serviceSlug مباشرة والـ type="service" لمنع تكرار بيانات المنظمة */}
      <StructuredData
        type="service"
        serviceSlug={id}
        breadcrumb={breadcrumb}
        locale={locale}
      />

      <ServiceDetailClient />
    </>
  );
}
