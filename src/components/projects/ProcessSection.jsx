"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import MainTitle from "../base/MainTitle";
import {
  MdSearch,
  MdArchitecture,
  MdConstruction,
  MdVerifiedUser,
} from "react-icons/md";

export default function ProcessSection() {
  const t = useTranslations("Process");
  const locale = useLocale();
  const isRtl = locale === "ar";

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
    <section
      className="py-20 bg-(--second-color) relative overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        <MainTitle
          title={t("Process_1")}
          subtitle={t("Process_2")}
          number={t("Process_3")}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {/* 1. خط الربط الأفقي الهيدروليكي - تم تحسين لونه ليتوافق مع تدرج الهوية الناعم */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-(--main-color)/15 to-transparent"></div>

          {/* الكروت التفاعلية */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center select-none"
            >
              {/* 2. الدائرة الحاملة للأيقونة - انتقالات ألوان فخمة جداً بين الأزرق والأحمر */}
              <div className="relative z-10 w-24 h-24 bg-gray-50 border border-gray-100/80 flex items-center justify-center text-3xl text-(--primary-color) transition-all duration-500 group-hover:bg-(--main-color) group-hover:text-white group-hover:rounded-[2rem] group-hover:shadow-[0_20px_40px_-10px_var(--main-color)] group-hover:border-(--main-color) mb-8 shadow-sm">
                {step.icon}

                {/* 3. رقم الخطوة المتطاير - تحويله لخلفية داكنة تتوهج بالأحمر عند الهوفر */}
                <span
                  className={`absolute -top-2 w-8 h-8 bg-(--primary-color) text-white text-[11px] font-mono font-black flex items-center justify-center shadow-md group-hover:bg-white group-hover:text-(--main-color) transition-colors duration-500 ${isRtl ? "-right-2" : "-left-2"}`}
                >
                  {step.id}
                </span>
              </div>

              {/* 4. المحتوى النصي الموزون بصرياً */}
              <div className="relative space-y-3">
                <h3 className="text-lg font-black text-(--primary-color) tracking-tight group-hover:text-(--main-color) transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs text-(--alt-color)/85 font-medium leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
