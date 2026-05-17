"use client";
import React from "react";
import { useTranslations } from "next-intl";
import MainTitle from "../base/MainTitle";
import {
  MdSearch,
  MdArchitecture,
  MdConstruction,
  MdVerifiedUser,
} from "react-icons/md";

export default function ProcessSection() {
  const t = useTranslations("Process");

  const steps = [
    {
      id: "01",
      icon: <MdSearch />,
      title: t("Step1_Title"),
      desc: t("Step1_Desc"),
    },
    {
      id: "02",
      icon: <MdArchitecture />,
      title: t("Step2_Title"),
      desc: t("Step2_Desc"),
    },
    {
      id: "03",
      icon: <MdConstruction />,
      title: t("Step3_Title"),
      desc: t("Step3_Desc"),
    },
    {
      id: "04",
      icon: <MdVerifiedUser />,
      title: t("Step4_Title"),
      desc: t("Step4_Desc"),
    },
  ];

  return (
    <section className="py-24 bg-[#fcfcfc] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <MainTitle
          title={t("Process_1")}
          subtitle={t("Process_2")}
          number={t("Process_3")}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {/* خط الربط الأفقي (يظهر في الشاشات الكبيرة) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-(--title-color)/10 to-transparent"></div>

          {(index) =>
            steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                {/* الدائرة الحاملة للأيقونة */}
                <div className="relative z-10 w-24 h-24 bg-white border border-(--title-color)/5 flex items-center justify-center text-3xl text-(--title-color) transition-all duration-500 group-hover:bg-(--main-color) group-hover:text-white group-hover:shadow-[0_20px_40px_rgba(230,26,43,0.3)] mb-8">
                  {step.icon}

                  {/* رقم الخطوة المتطاير */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-(--title-color) text-white text-[10px] font-mono flex items-center justify-center italic group-hover:bg-black transition-colors">
                    {step.id}
                  </span>
                </div>

                {/* المحتوى النصي */}
                <div className="relative">
                  <h3 className="text-lg font-black text-(--title-color) mb-4 uppercase tracking-tighter group-hover:text-(--main-color) transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-(--alt-color) font-bold leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>

                {/* عنصر ديكوري (Dot) عند نهاية كل خطوة */}
                <div className="hidden lg:block absolute top-12 -right-6 w-2 h-2 bg-(--title-color)/10 rounded-full"></div>
              </div>
            ))
          }
        </div>

        {/* سطر الختام التقني السفلي */}
        <div className="mt-24 border-t border-dashed border-(--title-color)/10 pt-8 flex justify-center">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-mono text-(--alt-color)/40 tracking-[5px] uppercase">
              End_To_End_Execution_Protocol
            </span>
            <div className="h-px w-20 bg-(--main-color)"></div>
            <span className="text-[9px] font-mono text-(--title-color) font-black tracking-[5px] uppercase">
              Certified_Results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
