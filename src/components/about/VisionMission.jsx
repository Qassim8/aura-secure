"use client";
import React from "react";
import MainTitle from "../base/MainTitle";
import { useTranslations } from "next-intl";

export default function VisionMission({ bg = "bg-transparent" }) {
  const t = useTranslations("About");

  return (
    <section className={`py-16 ${bg}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <MainTitle
              title={t("section_tag")}
              subtitle={t("section_title")}
              pos="start"
            />
            <h3 className="text-2xl md:text-3xl font-black text-(--primary-color) mb-4">
              {t("vision_title")}
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              {t("vision_text")}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-black text-(--primary-color) mb-4">
              {t("mission_title")}
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              {t("mission_text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
