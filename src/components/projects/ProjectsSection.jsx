"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MainTitle from "../base/MainTitle";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function PortfolioSection({ bg }) {
  const t = useTranslations("Projects");

  const projects = [
    {
      id: "01",
      title: t("P1_Title"),
      type: t("P1_Type"),
      img: "/hero-1.webp",
      size: "lg:col-span-2 lg:row-span-2",
    },
    {
      id: "02",
      title: t("P2_Title"),
      type: t("P2_Type"),
      img: "/hero-2.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: "03",
      title: t("P3_Title"),
      type: t("P3_Type"),
      img: "/hero-3.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: "04",
      title: t("P4_Title"),
      type: t("P4_Type"),
      img: "/hero-2.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      id: "05",
      title: t("P5_Title"),
      type: t("P5_Type"),
      img: "/hero-1.webp",
      size: "lg:col-span-1 lg:row-span-1",
    },
  ];

  return (
    <section className={`py-20 relative ${bg}`}>
      <div className="container">
        <MainTitle
          title={t("Projects_1")}
          subtitle={t("Projects_2")}
          pos="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-(--title-color) ${project.size}`}
            >
              {/* الصورة باستخدام Next Image */}
              <Image
                src={project.img}
                alt={project.title}
                fill
                loading="lazy"
                className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-linear-to-t from-(--title-color) via-(--title-color)/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <h3 className="text-xl font-black text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>

                <p className="text-xs text-white/60 font-bold uppercase tracking-tight mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href=""
            className="group relative px-8 md:px-12 py-2 md:py-4 overflow-hidden border border-(--main-color) text-(--main-color) font-black text-xs uppercase tracking-[4px] hover:text-white hover:bg-(--main-color) transition-colors duration-500"
          >
            {t("P_View")}
            <MdOutlineArrowOutward className="inline-block ms-2 text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
