"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import ServicesSection from "@/components/services/ServicesSection";
import ServicesCTAWithMap from "@/components/services/ServicesCTAWithMap";

export default function ServicesClient() {
  const t = useTranslations("Services");

  return (
    <main>
      <Breadcrumb title={t("Services_1")} />
      <ServicesSection bg="bg-white" />
      <ServicesCTAWithMap />
    </main>
  );
}
