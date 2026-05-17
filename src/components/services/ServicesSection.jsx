"use client";
import React from "react";
import { useTranslations } from "next-intl";
import MainTitle from "../base/MainTitle";
import {
  MdFireExtinguisher,
  MdNotificationsActive,
  MdSettingsSuggest,
  MdVideocam,
  MdArchitecture,
} from "react-icons/md";
import ServicesCard from "./ServicesCard";
import { FaFireExtinguisher } from "react-icons/fa6";
import { PiSecurityCameraFill } from "react-icons/pi";

export default function ServicesSection({ bg }) {
  const t = useTranslations("Services");

  const services = [
    {
      id: "01",
      icon: <MdNotificationsActive />,
      title: t("S1_Title"),
      desc: t("S1_Desc"),
    },
    {
      id: "02",
      icon: <FaFireExtinguisher />,
      title: t("S2_Title"),
      desc: t("S2_Desc"),
    },
    {
      id: "03",
      icon: <MdSettingsSuggest />,
      title: t("S3_Title"),
      desc: t("S3_Desc"),
    },
    {
      id: "04",
      icon: <PiSecurityCameraFill />,
      title: t("S4_Title"),
      desc: t("S4_Desc"),
    },
    {
      id: "05",
      icon: <MdArchitecture />,
      title: t("S5_Title"),
      desc: t("S5_Desc"),
    },
  ];

  return (
    <section className={`py-20 relative bg-${bg} overflow-hidden`}>
      <div className="container">
        <MainTitle title={t("Services_1")} subtitle={t("Services_2")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service) => (
            <ServicesCard service={service} key={service.id} />
          ))}

          <div className="p-5 md:p-12 bg-(--primary-color) text-white flex flex-col justify-between items-start relative overflow-hidden group shadow-md text-start">
            <div className="absolute -top-16 inset-s-5 text-[120px] text-white/5 rotate-12 pointer-events-none font-black italic select-none transition-transform duration-700 group-hover:scale-110">
              ORA SECURE
            </div>

            <div className="space-y-4 w-full relative mb-5 z-10">
              <span className="text-[10px] font-black tracking-[3px] text-(--main-color) uppercase block">
                {t("Services_1")}
              </span>
              <h3 className="text-2xl font-black text-white leading-tight">
                {t("CTA_Title")}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed">
                {t("CTA_Desc")}
              </p>
            </div>

            <button className="relative z-10 w-full md:w-auto px-6 py-3.5 bg-(--main-color) text-white font-black text-xs shadow-xl hover:bg-white hover:text-(--primary-color) transition-all duration-300 flex items-center justify-center gap-3 group/btn">
              <span>{t("CTA_Btn")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
