"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import AboutSection from "@/components/about/AboutSection";
import VisionMissionSection from "@/components/about/VisionMission";
import StatsSection from "@/components/shared/StatsSection";
import PartnersSection from "@/components/shared/Partners";

export default function AboutClient() {
  const t = useTranslations("About");
  const locale = useLocale();

  return (
    <main>
      <Breadcrumb
        title={t("section_tag")}
        breadcrumbs={[
          {
            label: locale === "ar" ? "الرئيسية" : "Home",
            href: `/${locale}`,
          },
          {
            label: locale === "ar" ? "من نحن" : "About Us",
            href: `/${locale}/services`,
          },
        ]}
      />
      <AboutSection bg="white" />
      <VisionMissionSection bg="bg-(--second-color)" />
      <StatsSection bg="bg-white" />
      <PartnersSection bg="bg-(--second-color)" />
    </main>
  );
}
