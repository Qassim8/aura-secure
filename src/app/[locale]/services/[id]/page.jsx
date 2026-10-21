import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { generateServiceMetadata, LOCALES, SERVICE_IDS } from "@/lib/seo";
import StructuredData from "@/components/SEO/StructuredData";
import { SITE_URL } from "@/lib/url";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

// أي معرّف خدمة غير موجود في generateStaticParams يعيد 404 بدلاً من صفحة فارغة بحالة 200
export const dynamicParams = false;

const SERVICE_TITLE_KEYS = {
  "fire-alarm-systems": "S1_Title",
  "fire-fighting-systems": "S2_Title",
  "maintenance-contracts": "S3_Title",
  "cctv-security-systems": "S4_Title",
  "safety-plans-engineering": "S5_Title",
};

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  return generateServiceMetadata(id, locale, SITE_URL) ?? {};
}

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) => SERVICE_IDS.map((id) => ({ locale, id })));
}

export default async function ServiceDetailPage({ params }) {
  const { locale, id } = await params;

  if (!SERVICE_IDS.includes(id)) notFound();

  const messages = locale === "ar" ? ar : en;
  const serviceName = messages.Services[SERVICE_TITLE_KEYS[id]];

  const breadcrumb = [
    {
      name: locale === "ar" ? "الرئيسية" : "Home",
      url: `${SITE_URL}/${locale}`,
    },
    {
      name: locale === "ar" ? "الخدمات" : "Services",
      url: `${SITE_URL}/${locale}/services`,
    },
    {
      name: serviceName,
      url: `${SITE_URL}/${locale}/services/${id}`,
    },
  ];

  return (
    <>
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
