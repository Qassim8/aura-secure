"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MainTitle from "../base/MainTitle";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function AboutSection({ bg }) {
  const t = useTranslations("About");
  const [history, setHistory] = React.useState(false);

  return (
    <section className={`py-20 overflow-hidden bg-${bg}`}>
      <MainTitle title={t("section_tag")} subtitle={""} pos="center" />

      <div className="container space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-center">
          <div className="relative w-full aspect-4/3 p-5 group">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/about-01.png"
                alt={t("why_title")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            <div className="absolute -bottom-6 inset-s-0 z-30 bg-(--primary-color) text-white p-3 shadow-2xl border-b-4 border-(--main-color) flex flex-col items-center justify-center min-w-32 transition-transform duration-500 group-hover:scale-105 select-none">
              <span className="text-2xl md:text-5xl font-black text-(--main-color) leading-none tracking-tighter">
                {t("exp_number")}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[2px] text-gray-200 text-center mt-2 leading-tight">
                {t("exp_text")}
              </span>
            </div>
          </div>

          <div className="space-y-6 text-start mt-10 md:mt-0">
            <h3 className="text-gray-200xl text-2xl md:text-4xl font-black text-(--primary-color) tracking-tight">
              {t("history_title")}{" "}
              <span className="text-(--main-color)">
                {t("history_title_highlight")}
              </span>
            </h3>
            <div className="text-base text-gray-600 font-bold leading-relaxed">
              <p>{t("history_p1")}</p>
              {history && (
                <>
                  <p className="font-medium text-gray-500 mt-3">
                    {t("history_p2")}
                  </p>
                  <p className="font-medium text-gray-500 mt-2">
                    {t("history_p3")}
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setHistory(!history)}
              className="inline-flex items-center justify-center cursor-pointer px-4 py-2 font-semibold border border-(--main-color) text-(--main-color) text-sm hover:bg-(--main-color) hover:text-white transition-all duration-300 outline-none"
            >
              {history ? t("read_less") : t("btn_read_more")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-15 items-center">
          <div className="space-y-6 text-right order-2 md:order-1">
            <h3 className="text-2xl md:text-4xl font-black text-(--primary-color) tracking-tight">
              {t("why_title")}{" "}
              <span className="text-(--main-color)">
                {t("why_title_highlight")}
              </span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <VscDebugBreakpointLog className="text-(--main-color) text-xl mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-(--primary-color) mb-1">
                    {t("feature_1_title")}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    {t("feature_1_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <VscDebugBreakpointLog className="text-(--main-color) text-xl mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-(--primary-color) mb-1">
                    {t("feature_2_title")}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    {t("feature_2_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <VscDebugBreakpointLog className="text-(--main-color) text-xl mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-black text-(--primary-color) mb-1">
                    {t("feature_3_title")}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    {t("feature_3_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-4/3 md:aspect-square lg:aspect-4/3 group min-h-87.5 md:min-h-112.5 order-1 md:order-2">
            <div className="absolute top-0 left-0 w-3/4 h-1/2 md:h-3/4 border border-gray-200/60 overflow-hidden z-10">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/about-03.jpg"
                  alt={t("history_title")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="transition-transform duration-700 group-hover:scale-105 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              className={`absolute bottom-10 md:bottom-0 right-0 w-3/4 md:w-1/2 h-1/2 overflow-hidden border-20 ${bg === "white" ? "border-white" : "border-(--second-color)"} z-20 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/hero01.webp"
                  alt={t("history_title")}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
