"use client";
import Breadcrumb from "@/components/base/Breadcrumb";
import ProcessSection from "@/components/projects/ProcessSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

export default function ProjectsClient() {
  const t = useTranslations("Projects");
  const locale = useLocale();

  return (
    <main>
      <Breadcrumb
        title={t("Project_1")}
        breadcrumbs={[
          {
            label: locale === "ar" ? "الرئيسية" : "Home",
            href: `/${locale}`,
          },
          {
            label: locale === "ar" ? "اعمالنا" : "Our Works",
            href: `/${locale}/services`,
          },
        ]}
      />
      <ProjectsSection isPage={true} />
      <ProcessSection />
      <TestimonialsSection bg="bg-white" />
    </main>
  );
}
