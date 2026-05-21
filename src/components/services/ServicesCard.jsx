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
  const t = useTranslations("Services");

  const slug =
    service.id ||
    service.slug ||
    service.title?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="group relative p-5 md:p-12 border-b border-l border-(--title-color)/5 transition-all duration-500 hover:bg-(--primary-color)/95 overflow-hidden">
      <div className="absolute -bottom-6 -right-6 text-9xl text-(--title-color)/4 group-hover:text-white/5 transition-colors">
        {service.icon}
      </div>

      <div className="flex items-start gap-6">
        <div className="flex-1">
          <div className="text-3xl md:text-5xl text-(--main-color) mb-2 group-hover:scale-110 transition-transform duration-500">
            {service.icon}
          </div>

          <h3 className="text-lg md:text-2xl font-black text-(--primary-color) mb-2 group-hover:text-white transition-colors uppercase leading-none">
            {service.title}
          </h3>

          <p className="text-sm text-(--alt-color) leading-relaxed group-hover:text-white/70 transition-colors">
            {service.desc}
          </p>

          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="text-(--main-color) flex items-center gap-2 text-sm  border-none cursor-pointer group-hover:text-white transition-colors duration-300 z-30"
            >
              {t("view_more")}
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setOpen(false)}
          />

          <div className="relative bg-white shadow-xl max-w-xl w-full mx-4 p-6 z-10">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-black text-(--primary-color)">
                {service.title}
              </h4>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 cursor-pointer"
              >
                <CgClose />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="w-full h-60 bg-gray-100 overflow-hidden">
                {service.images && service.images[0] ? (
                  <Image
                    width={250}
                    height={250}
                    src={service.images[0]}
                    alt="img1"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
              <div className="w-full h-60 bg-gray-100 overflow-hidden">
                {service.images && service.images[1] ? (
                  <Image
                    width={250}
                    height={250}
                    src={service.images[1]}
                    alt="img2"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
            </div>

            <div className="text-sm md:text-base text-(--alt-color) leading-relaxed mb-6">
              {service.longDesc}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
