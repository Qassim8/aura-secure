"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import AboutSection from "@/components/about/AboutSection";
import VisionMission from "@/components/about/VisionMission";
import PartnersSection from "@/components/shared/Partners";

const AboutPage = () => {
  const locale = useLocale();
  const t = useTranslations("About");

  const items = [
    { label: t("section_tag"), href: `/${locale}` },
    { label: t("section_title"), href: `/${locale}/about` },
  ];

  return (
    <div>
      <Breadcrumb title={t("section_tag")} pageName={t("section_title")} />
      <AboutSection bg="bg-white" />
      <VisionMission bg="bg-gray-50" />
      <PartnersSection bg="bg-transparent" />
    </div>
  );
};

export default AboutPage;
