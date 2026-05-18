import React from "react";
import ServiceDetailClient from "./ServiceDetailClient";
import { generateServiceMetadata } from "@/lib/seo";
import StructuredData from "@/components/SEO/StructuredData";

export async function generateMetadata({ params }) {
  const { locale, id } = params;
  return generateServiceMetadata(id, locale, "https://orasecure.com");
}

export default async function ServiceDetailPage({ params }) {
  const { locale, id } = params;
  const meta = generateServiceMetadata(id, locale, "https://orasecure.com");

  const service = { name: meta.title, description: meta.description };
  const breadcrumb = [
    {
      name: locale === "ar" ? "الرئيسية" : "Home",
      url: `https://orasecure.com/${locale}`,
    },
    {
      name: locale === "ar" ? "خدماتنا" : "Services",
      url: `https://orasecure.com/${locale}/services`,
    },
    { name: meta.title, url: `https://orasecure.com/${locale}/services/${id}` },
  ];

  return (
    <>
      <StructuredData
        service={service}
        breadcrumb={breadcrumb}
        locale={locale}
      />
      <ServiceDetailClient />
    </>
  );
}
