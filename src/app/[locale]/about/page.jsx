"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import AboutSection from "@/components/about/AboutSection";
import VisionMissionSection from "@/components/about/VisionMission";
import StatsSection from "@/components/shared/StatsSection";
import PartnersSection from "@/components/shared/Partners";

const AboutPage = () => {
  const t = useTranslations("About");

  return (
    <main>
      {/* 1. رأس الصفحة والمسار */}
      <Breadcrumb title={t("section_tag")} />

      {/* 2. من نحن والنبذة التعريفية (خلفية بيضاء ناصعة) */}
      <AboutSection bg="white" />

      {/* 3. الرؤية والرسالة بالكتل الهندسية المتقاطعة (خلفية رمادية ناعمة للتبيان) */}
      <VisionMissionSection bg="bg-(--second-color)" />

      {/* 4. الأرقام والإحصائيات الفخمة (خلفية الأزرق الداكن الكامل - نقلة بصرية قوية) */}
      <StatsSection bg="bg-white" />

      {/* 5. الاعتمادات والشركاء كختام مبني على الثقة المطلقة */}
      <PartnersSection bg="bg-(--second-color)" />
    </main>
  );
};

export default AboutPage;
