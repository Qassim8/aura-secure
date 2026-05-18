"use client";
import React, { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { useInView, animate, motion } from "framer-motion";
import { MdLayers, MdQueryBuilder, MdGroups, MdMap } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { PiMapPinArea } from "react-icons/pi";
import { LiaUsersCogSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi";

function Counter({ from, to, duration = 2, bg }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, duration]);

  return (
    <span
      className={`text-4xl md:text-6xl text-${bg === "bg-white" ? "(--primary-color)" : "white"}`}
      ref={ref}
    >
      {count}
    </span>
  );
}

export default function StatsSection({ bg }) {
  const t = useTranslations("Stats");

  const stats = [
    {
      target: 500,
      suffix: "+",
      label: t("Stats_4"),
      icon: <BiBriefcase />,
    },
    {
      target: 20,
      suffix: "+",
      label: t("Stats_6"),
      icon: <MdQueryBuilder />,
    },
    {
      target: 150,
      suffix: "+",
      label: t("Stats_8"),
      icon: <HiOutlineUserGroup />,
    },
    {
      target: 100,
      suffix: "%",
      label: t("Stats_10"),
      icon: <PiMapPinArea />,
    },
  ];

  return (
    <section className={`py-20 overflow-hidden ${bg}`}>
      <div className="container">
        <div
          className={`border ${bg === "bg-white" ? "border-gray-100" : "border-gray-50/10"} p-5 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center`}
        >
          <div className="md:col-span-5 space-y-4 text-right">
            <h2
              className={`text-2xl md:text-4xl font-black text-${bg === "bg-white" ? "(--primary-color)" : "white"} leading-tight tracking-tight`}
            >
              {t("cta_title")}{" "}
              <span className="text-(--main-color) block lg:inline">
                {t("cta_title_highlight")}
              </span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
              {t("cta_desc")}
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 relative">
            <div
              className={`hidden sm:block absolute top-0 bottom-0 left-1/2 w-px ${bg === "bg-white" ? "bg-gray-200" : "bg-gray-50/10"} -translate-x-1/2`}
            ></div>
            <div
              className={`hidden sm:block absolute left-0 right-0 top-1/2 h-px ${bg === "bg-white" ? "bg-gray-200" : "bg-gray-50/10"} -translate-y-1/2`}
            ></div>

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-5 group p-2 text-center"
              >
                <div className="p-2 text-2xl md:text-4xl text-gray-500 group-hover:text-(--main-color) transition-colors duration-300 shrink-0">
                  {stat.icon}
                </div>

                <div className="space-y-1">
                  <div
                    className={`flex justify-center items-baseline text-4xl md:text-5xl font-black tracking-tighter leading-none`}
                  >
                    <Counter from={0} to={stat.target} bg={bg} />
                    <span className="text-3xl md:text-5xl font-black text-(--main-color) mr-0.5">
                      {stat.suffix}
                    </span>
                  </div>

                  <h4 className="text-xs md:text-sm font-bold text-gray-500 group-hover:text-(--main-color) transition-colors duration-300 tracking-wide">
                    {stat.label}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
