"use client";
import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { CgClose } from "react-icons/cg";
import Image from "next/image";

const ServicesCard = ({ service }) => {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const isRtl = locale === "ar";
  const t = useTranslations("Services");

  const baseAltText = isRtl
    ? `${service.title} معتمد في السعودية - أوراسيكيور`
    : `${service.title} Certified in KSA - OraSecure`;

  return (
    <div className="group relative p-5 md:p-12 border-b border-l border-(--title-color)/5 transition-all duration-500 hover:bg-(--primary-color)/95 overflow-hidden flex flex-col justify-between">
      <div className="absolute -bottom-6 -right-6 text-9xl text-(--title-color)/4 group-hover:text-white/5 transition-colors">
        {service.icon}
      </div>

      <div className="flex items-start gap-6">
        <div className="flex-1">
          <div className="text-3xl md:text-5xl text-(--main-color) mb-2 group-hover:scale-110 transition-transform duration-500">
            {service.icon}
          </div>

          <h3 className="text-lg md:text-2xl font-black text-(--primary-color) mb-2 group-hover:text-white transition-colors uppercase leading-tight">
            <Link
              href={`/${locale}/services/${service.link}`}
              className="hover:underline"
            >
              {service.title}
            </Link>
          </h3>

          <p className="text-sm text-(--alt-color) leading-relaxed group-hover:text-white/70 transition-colors">
            {service.desc}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 relative z-30">
        <Link
          href={`/${locale}/services/${service.link}`}
          className="text-(--main-color) flex items-center gap-2 text-sm font-bold group-hover:text-white transition-colors duration-300"
        >
          {t("view_more")}
          <MdArrowForward className={`${isRtl ? "rotate-180" : ""}`} />
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="text-xs text-gray-400 group-hover:text-gray-200 underline cursor-pointer ml-auto"
        >
          {isRtl ? "تفاصيل سريعة" : "Quick View"}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setOpen(false)}
          />

          <div className="relative bg-white shadow-xl max-w-xl w-full mx-4 z-10 overflow-y-auto max-h-[85vh]">
            <div className="sticky top-0 bg-white flex justify-between items-start p-4 border-b border-b-gray-300 z-10">
              <h3 className="text-xl font-black text-(--primary-color)">
                {service.title}
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 cursor-pointer p-1 hover:bg-gray-100 rounded"
              >
                <CgClose size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              <div className="w-full h-36 md:h-48 bg-gray-100 overflow-hidden relative">
                {service.images && service.images[0] ? (
                  <Image
                    fill
                    src={service.images[0]}
                    alt={`${baseAltText} - صورة رقم 1`}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
              <div className="w-full h-36 md:h-48 bg-gray-100 overflow-hidden relative">
                {service.images && service.images[1] ? (
                  <Image
                    fill
                    src={service.images[1]}
                    alt={`${baseAltText} - صورة رقم 2`}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
            </div>

            <div className="text-sm md:text-base text-(--alt-color) leading-relaxed p-4 font-medium">
              {service.longDesc}
            </div>

            <div className="pb-4 ps-4 bg-gray-50 flex justify-start">
              <Link
                href={`/${locale}/services/${service.link}`}
                className="text-white bg-(--main-color) flex justify-center items-center gap-2 text-sm px-6 py-2.5 font-bold shadow-md hover:bg-(--primary-color) transition-colors duration-300"
              >
                {t("view_more")}
                <MdArrowForward className={`${isRtl ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
