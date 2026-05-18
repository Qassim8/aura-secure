"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import MainTitle from "../base/MainTitle";
import {
  MdFormatQuote,
  MdStar,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection({ bg }) {
  const t = useTranslations("Testimonials");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const feedback = [
    { name: t("T1_Name"), job: t("T1_Job"), text: t("T1_Text") },
    { name: t("T2_Name"), job: t("T2_Job"), text: t("T2_Text") },
    { name: t("T3_Name"), job: t("T3_Job"), text: t("T3_Text") },
    { name: t("T2_Name"), job: t("T2_Job"), text: t("T2_Text") },
    { name: t("T3_Name"), job: t("T3_Job"), text: t("T3_Text") },
  ];

  return (
    <section
      className={`py-20 ${bg} relative overflow-hidden`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container">
        <MainTitle title={t("Testimonials_1")} subtitle={t("Testimonials_2")} />

        <div className="mt-16 relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            loopedslides={3}
            dir={isRtl ? "rtl" : "ltr"}
            key={locale}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 50,
              },
            }}
            pagination={{ clickable: true, el: ".custom-pag" }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            className="pb-20 overflow-visible!"
          >
            {feedback.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={`relative p-5 md:p-10 bg-[#fcfcfc] transition-all duration-700 h-full border-e-8 ${
                      isActive
                        ? "opacity-100 scale-100 shadow-lg border-(--main-color)"
                        : "opacity-40 scale-90 blur-[1px] border-transparent"
                    }`}
                  >
                    <MdFormatQuote
                      className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} text-7xl text-(--primary-color)/10`}
                    />

                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <MdStar
                          key={i}
                          className="text-(--main-color) text-sm"
                        />
                      ))}
                    </div>

                    <p className="text-base md:text-lg font-bold text-(--title-color) leading-relaxed mb-10 italic">
                      &quot;{item.text}&quot;
                    </p>

                    <div className="flex items-center gap-5 pt-8 border-t border-black/5">
                      <div className="w-14 h-14 bg-(--primary-color) flex items-center justify-center text-white font-black text-2xl shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div className={isRtl ? "text-right" : "text-left"}>
                        <h4 className="text-base font-black text-(--title-color) uppercase tracking-tighter">
                          {item.name}
                        </h4>
                        <span className="text-[11px] font-mono text-(--alt-color) uppercase tracking-[3px]">
                          {item.job}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-row justify-between items-center mt-10">
            <div className="flex gap-3">
              <button className="prev-btn cursor-pointer w-10 h-10 border border-(--title-color)/10 flex items-center justify-center text-(--title-color) hover:bg-(--primary-color) hover:text-white transition-all z-20 relative">
                {isRtl ? (
                  <MdArrowForward size={20} />
                ) : (
                  <MdArrowBack size={20} />
                )}
              </button>
              <button className="next-btn cursor-pointer w-10 h-10 border border-(--title-color)/10 flex items-center justify-center text-(--title-color) hover:bg-(--primary-color) hover:text-white transition-all z-20 relative">
                {isRtl ? (
                  <MdArrowBack size={20} />
                ) : (
                  <MdArrowForward size={20} />
                )}
              </button>
            </div>

            <div className="custom-pag w-auto! flex gap-1 md:gap-3"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pag .swiper-pagination-bullet {
          width: 25px;
          height: 4px;
          border-radius: 0;
          background: var(--title-color) !important;
          opacity: 0.15;
          transition: all 0.4s ease;
        }
        .custom-pag .swiper-pagination-bullet-active {
          width: 50px;
          height: 4px !important;
          background: var(--main-color) !important;
          opacity: 1;
        }
        @media (max-width: 767px) {
          .custom-pag .swiper-pagination-bullet {
            width: 15px;
          }
          .custom-pag .swiper-pagination-bullet-active {
            width: 20px;
          }
        }
      `}</style>
    </section>
  );
}
