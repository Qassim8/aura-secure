import Breadcrumb from "@/components/base/Breadcrumb";
import ProcessSection from "@/components/projects/ProcessSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import { useTranslations } from "next-intl";
import React from "react";

const ProjectsPage = () => {
  const t = useTranslations("Projects");

  return (
    <main>
      <Breadcrumb title={t("Projects")} />
      <ProjectsSection isPage={true} />
      <ProcessSection />
      <TestimonialsSection bg="bg-white" />
    </main>
  );
};

export default ProjectsPage;
