"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import AboutSection from "@/components/about/AboutSection";
import VisionMissionSection from "@/components/about/VisionMission";
import StatsSection from "@/components/shared/StatsSection";
import PartnersSection from "@/components/shared/Partners";

export default function AboutClient() {
  const t = useTranslations("About");

  return (
    <main>
      <Breadcrumb title={t("section_tag")} />
      <AboutSection bg="white" />
      <VisionMissionSection bg="bg-(--second-color)" />
      <StatsSection bg="bg-white" />
      <PartnersSection bg="bg-(--second-color)" />
    </main>
  );
}
