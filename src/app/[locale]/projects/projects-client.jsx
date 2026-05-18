"use client";
import Breadcrumb from "@/components/base/Breadcrumb";
import ProcessSection from "@/components/projects/ProcessSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import { useTranslations } from "next-intl";
import React from "react";

export default function ProjectsClient() {
  const t = useTranslations("Projects");

  return (
    <main>
      <Breadcrumb title={t("Project_1")} />
      <ProjectsSection isPage={true} />
      <ProcessSection />
      <TestimonialsSection bg="bg-white" />
    </main>
  );
}
