"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import MainTitle from "../base/MainTitle";
import {
  MdOutlineArrowOutward,
  MdLayers,
  MdBusiness,
  MdPrecisionManufacturing,
  MdHandyman,
} from "react-icons/md";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection({ bg, isPage = false }) {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: t("filter_all"), icon: <MdLayers /> },
    { id: "commercial", label: t("filter_commercial"), icon: <MdBusiness /> },
    {
      id: "industrial",
      label: t("filter_industrial"),
      icon: <MdPrecisionManufacturing />,
    },
    { id: "maintenance", label: t("filter_maintenance"), icon: <MdHandyman /> },
  ];

  const allProjects = [
    {
      id: "01",
      category: "industrial",
      title: t("P1_Title"),
      type: t("P1_Type"),
      img: "/hero-1.webp",
      size: "lg:col-span-2 lg:row-span-2",
    },
    {
      id: "02",
      category: "commercial",
      title: t("P2_Title"),
      type: t("P2_Type"),
      img: "/hero-2.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: "03",
      category: "maintenance",
      title: t("P3_Title"),
      type: t("P3_Type"),
      img: "/hero-3.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: "04",
      category: "industrial",
      title: t("P4_Title"),
      type: t("P4_Type"),
      img: "/hero-2.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: "05",
      category: "commercial",
      title: t("P5_Title"),
      type: t("P5_Type"),
      img: "/hero-1.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: "06",
      category: "commercial",
      title: t("P6_Title"),
      type: t("P6_Type"),
      img: "/hero-3.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: "07",
      category: "maintenance",
      title: t("P7_Title"),
      type: t("P7_Type"),
      img: "/hero-2.webp",
      size: "lg:col-span-2 lg:row-span-1",
    },
    {
      id: "08",
      category: "industrial",
      title: t("P8_Title"),
      type: t("P8_Type"),
      img: "/hero-1.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
  ];
  const displayedProjects = !isPage
    ? allProjects.slice(0, 5)
    : activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section className={`py-20 relative ${bg}`} dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6">
        {/* العناوين الرئيسية */}
        <MainTitle
          title={t("Projects_1")}
          subtitle={t("Projects_2")}
          pos="center"
        />

        {isPage && (
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12 mt-10">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-black text-xs transition-all duration-300 border select-none cursor-pointer ${
                    isActive
                      ? "bg-(--primary-color) text-white border-(--primary-color) shadow-lg"
                      : "bg-white text-(--alt-color)/80 border-gray-150 hover:border-gray-300 hover:text-(--primary-color)"
                  }`}
                >
                  <span
                    className={`text-base ${isActive ? "text-(--main-color)" : "text-gray-400"}`}
                  >
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        <motion.div
          layout
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] ${isPage ? "mt-6" : "mt-16"}`}
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`group relative overflow-hidden bg-(--primary-color) border border-gray-100 shadow-sm ${project.size}`}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 opacity-75 group-hover:opacity-95"
                />

                <div className="absolute inset-0 bg-linear-to-t from-(--primary-color) via-(--primary-color)/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-black text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[10px] md:text-xs text-(--main-color) font-black uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!isPage && (
          <div className="mt-16 flex justify-center">
            <Link
              href={`/${locale}/projects`}
              className="group relative px-8 md:px-12 py-3 md:py-4 overflow-hidden border border-(--main-color) text-(--main-color) font-black text-xs uppercase tracking-[4px] hover:text-white hover:bg-(--main-color) transition-colors duration-500"
            >
              {t("P_View")}
              <MdOutlineArrowOutward className="inline-block ms-2 text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
