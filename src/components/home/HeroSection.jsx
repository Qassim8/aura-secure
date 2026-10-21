"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useTranslations, useLocale } from "next-intl";
import { MdVerified, MdFileDownload } from "react-icons/md";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  // الصورة تُحدَّد من اللغة مباشرة أثناء العرض من الخادم، فلا تُحمَّل نسخة خاطئة ثم تُستبدل
  const suffix = locale === "ar" ? "" : "-en";

  const slides = [
    {
      id: 1,
      title: t("title1"),
      subTitle: t("subTitle1"),
      image: `/hero-1${suffix}.webp`,
    },
    {
      id: 2,
      title: t("title2"),
      subTitle: t("subTitle2"),
      image: `/hero-2${suffix}.webp`,
    },
    {
      id: 3,
      title: t("title3"),
      subTitle: t("subTitle3"),
      image: `/hero-3${suffix}.webp`,
    },
  ];

  return (
    <section className="relative h-screen w-full">
      {/* 
        H1 المخفي للسيو الحقيقي للموقع: 
        هذا يضمن لقوقل فهم تخصص الموقع فوراً دون تشتيته بتكرار السلايدر 
      */}
      <h1 className="sr-only">
        {locale === "ar"
          ? "أوراسيكيور لأنظمة الأمن والسلامة ومكافحة الحرائق بالمملكة العربية السعودية"
          : "OraSecure for Fire Safety, Fighting & Security Systems KSA"}
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-(--main-color)! w-8! h-2! rounded-none! m-0! transition-all duration-500 mx-1!"></span>`;
          },
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover object-center grayscale-90"
              />
              <div className="absolute inset-0 bg-(--primary-color)/60" />
            </div>

            {/* Content */}
            <div className={`container h-full relative z-20 text-white `}>
              <div className="flex flex-col justify-center items-start text-start h-full md:w-1/2">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-(--main-color) w-fit px-2 py-1 md:px-4 md:py-2 mb-5 shadow-lg shadow-(--main-color)/20">
                  <MdVerified className="text-white text-xs md:text-sm" />
                  <span className="text-[10px] font-black uppercase md:tracking-widest">
                    {t("badge")}
                  </span>
                </div>

                {/* 
                  تم تعديلها من h1 إلى h2 لمنع تكرار الـ H1 داخل السلايدر، 
                  مما يمنح موقعك بنية سليمة 100% في قوقل
                */}
                <h2 className="text-3xl md:text-6xl font-semibold md:font-black leading-tight tracking-tighter uppercase">
                  {slide.title}
                </h2>

                <p className="text-base md:text-lg my-5 text-(--main-color) drop-shadow-[0_0_10px_rgba(230,26,43,0.8)]">
                  {slide.subTitle}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  <a
                    href="/files/ORA-SECURE-PROFILE.pdf"
                    download="ORA-SECURE-PROFILE.pdf"
                    className="text-xs md:text-sm bg-(--main-color) hover:bg-white hover:text-(--main-color) text-white px-3 md:px-10 py-3 md:py-4 md:font-black transition-all duration-500 flex items-center gap-1 md:gap-2"
                  >
                    {t("btn1")}
                    <MdFileDownload className="text-base" />
                  </a>
                  <Link
                    href={`/${locale}/projects`}
                    className="text-xs md:text-sm bg-transparent border border-white/20 hover:border-(--main-color) hover:bg-(--main-color) text-white px-3 md:px-10 py-3 md:py-4 md:font-black transition-all"
                  >
                    {t("btn2")}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
