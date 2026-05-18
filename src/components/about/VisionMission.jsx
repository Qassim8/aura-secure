"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MdRemoveRedEye, MdVerifiedUser } from "react-icons/md";
import { GoGoal } from "react-icons/go";

export default function VisionMissionSection({ bg }) {
  const t = useTranslations("About");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className={`py-20 ${bg} overflow-hidden text-start`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container">
        {/* شبكة العرض الاحترافية - انقسام الكتلتين بتناغم مذهل */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* 👁️ الكتلة الأولى: رؤيتنا (باللون الأزرق الفخم الكامل) */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-14 bg-(--primary-color) text-white flex flex-col justify-between overflow-hidden group shadow-xl"
          >
            {/* ديكور الإضاءة الهندسية الخلفية */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-(--main-color)/10 rounded-full blur-3xl pointer-events-none group-hover:bg-(--main-color)/15 transition-colors duration-500"></div>
            <span
              className={`absolute bottom-0 md:top-8 ${isRtl ? "left-5" : "right-5"} text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 font-mono select-none`}
            >
              01
            </span>

            {/* المحتوى العلوي */}
            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 text-(--main-color) border border-white/10 shadow-inner">
                  <GoGoal className="text-2xl" />
                </div>
                <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white">
                  {t("vision_title")}
                </h3>
              </div>

              <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed pt-2">
                {t("vision_text")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-14 bg-white border border-gray-100 flex flex-col justify-between overflow-hidden group shadow-[0_20px_50px_-20px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] hover:border-gray-200/80 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000001_1px,transparent_1px),linear-gradient(to_bottom,#00000001_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
            <span
              className={`absolute bottom-0 md:top-8 ${isRtl ? "left-5" : "right-5"} text-7xl font-black text-(--primary-color)/5 group-hover:text-white/10 transition-colors duration-500 font-mono select-none`}
            >
              02
            </span>

            {/* المحتوى العلوي */}
            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-50 text-(--primary-color) group-hover:bg-red-50 group-hover:text-(--main-color) transition-all duration-500">
                  <MdVerifiedUser className="text-2xl" />
                </div>
                <h3 className="text-2xl md:text-4xl font-black tracking-tight text-(--primary-color) group-hover:text-(--main-color) transition-colors duration-300">
                  {t("mission_title")}
                </h3>
              </div>

              <p className="text-sm md:text-base text-(--alt-color)/80 font-medium leading-relaxed pt-2">
                {t("mission_text")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
