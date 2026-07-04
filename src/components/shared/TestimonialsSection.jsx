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
import { SITE_URL } from "@/lib/url";

export default function TestimonialsSection({ bg }) {
  const t = useTranslations("Testimonials");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const feedback = [
    {
      id: "review-1",
      name: t("T1_Name"),
      job: t("T1_Job"),
      text: t("T1_Text"),
    },
    {
      id: "review-2",
      name: t("T2_Name"),
      job: t("T2_Job"),
      text: t("T2_Text"),
    },
    {
      id: "review-3",
      name: t("T3_Name"),
      job: t("T3_Job"),
      text: t("T3_Text"),
    },
    {
      id: "review-4",
      name: t("T4_Name") || t("T2_Name"),
      job: t("T4_Job") || t("T2_Job"),
      text: t("T4_Text") || t("T2_Text"),
    },
    {
      id: "review-5",
      name: t("T5_Name") || t("T3_Name"),
      job: t("T5_Job") || t("T3_Job"),
      text: t("T5_Text") || t("T3_Text"),
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: isRtl ? "أوراسيكيور لأنظمة السلامة" : "OraSecure Fire Safety",
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5", // التقييم المتوسط بناءً على تقييماتك الكاملة بـ 5 نجوم
      reviewCount: feedback.length.toString(), // يحسب عدد المراجعات ديناميكياً (5 مراجعات)
      bestRating: "5",
      worstRating: "1",
    },
    review: feedback.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: item.text,
    })),
  };

  return (
    <section
      className={`py-20 ${bg} relative overflow-hidden`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-6">
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
            {feedback.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <blockquote
                    className={`relative p-5 md:p-10 bg-[#fcfcfc] transition-all duration-700 h-full border-e-8 ${
                      isActive
                        ? "opacity-100 scale-100 shadow-lg border-(--main-color)"
                        : "opacity-40 scale-90 blur-[1px] border-transparent"
                    }`}
                  >
                    <MdFormatQuote
                      className={`absolute top-1 md:top-4 ${isRtl ? "left-2 md:left-4" : "right-2 md:right-4"} text-7xl text-(--primary-color)/10`}
                      aria-hidden="true"
                    />

                    <div
                      className="flex gap-1 mb-6"
                      aria-label="5 stars rating"
                    >
                      {[...Array(5)].map((_, i) => (
                        <MdStar
                          key={i}
                          className="text-(--main-color) text-sm"
                        />
                      ))}
                    </div>

                    <p className="text-sm md:text-lg font-bold text-(--title-color) leading-relaxed mb-5 md:mb-10 italic">
                      &quot;{item.text}&quot;
                    </p>

                    <div className="flex items-center gap-5 pt-4 md:pt-8 border-t border-black/5">
                      <div className="w-10 md:w-14 h-10 md:h-14 bg-(--primary-color) flex items-center justify-center text-white font-black text-base md:text-2xl shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div className={isRtl ? "text-right" : "text-left"}>
                        <cite className="not-italic block">
                          <h4 className="text-sm md:text-base font-black text-(--title-color) uppercase md:tracking-tighter">
                            {item.name}
                          </h4>
                        </cite>
                        <span className="text-[10px] md:text-[11px] font-mono text-(--alt-color) uppercase md:tracking-[3px] block mt-1">
                          {item.job}
                        </span>
                      </div>
                    </div>
                  </blockquote>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-row justify-between items-center mt-10">
            <div className="flex gap-3">
              <button
                className="prev-btn cursor-pointer w-8 md:w-10 h-8 md:h-10 border border-(--title-color)/10 flex items-center justify-center text-(--title-color) hover:bg-(--primary-color) hover:text-white transition-all z-20 relative"
                aria-label={isRtl ? "المراجعة التالية" : "Next review"}
              >
                {isRtl ? (
                  <MdArrowForward className="text-base md:text-xl" />
                ) : (
                  <MdArrowBack className="text-base md:text-xl" />
                )}
              </button>
              <button
                className="next-btn cursor-pointer w-8 md:w-10 h-8 md:h-10 border border-(--title-color)/10 flex items-center justify-center text-(--title-color) hover:bg-(--primary-color) hover:text-white transition-all z-20 relative"
                aria-label={isRtl ? "المراجعة السابقة" : "Previous review"}
              >
                {isRtl ? (
                  <MdArrowBack className="text-base md:text-xl" />
                ) : (
                  <MdArrowForward className="text-base md:text-xl" />
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
            width: 25px;
          }
        }
      `}</style>
    </section>
  );
}
