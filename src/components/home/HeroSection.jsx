"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useTranslations, useLocale } from "next-intl";
import { MdVerified, MdHandshake, MdFileDownload } from "react-icons/md";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    const currentDir = document.documentElement.dir || "ltr";
    setDir(currentDir);
  }, []);

  const slides = [
    {
      id: 1,
      title: t("title1"),
      subTitle: t("subTitle1"),
      image: `${dir === "rtl" ? "./hero-1.webp" : "./hero-1-en.webp"}`,
    },
    {
      id: 2,
      title: t("title2"),
      subTitle: t("subTitle2"),
      image: `${dir === "rtl" ? "./hero-2.webp" : "./hero-2-en.webp"}`,
    },
    {
      id: 3,
      title: t("title3"),
      subTitle: t("subTitle3"),
      image: `${dir === "rtl" ? "./hero-3.webp" : "./hero-3-en.webp"}`,
    },
  ];

  return (
    <section className="relative h-screen w-full">
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale-90"
                style={{ backgroundImage: `url('${slide.image}')` }}
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

                {/* Main Title */}
                <h1 className="text-2xl md:text-6xl font-semibold md:font-black leading-tight tracking-tighter uppercase">
                  {slide.title}
                </h1>

                <p className="text-xs md:text-lg my-5 text-(--main-color) drop-shadow-[0_0_10px_rgba(230,26,43,0.8)]">
                  {slide.subTitle}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  <a
                    href="/files/ORA-SECURE-PROFILE.pdf"
                    download="ORA-SECURE-PROFILE.pdf"
                    className="text-xs md:text-sm bg-(--main-color) hover:bg-white hover:text-(--main-color) text-white px-2 md:px-10 py-2 md:py-4 md:font-black transition-all duration-500 flex items-center gap-1 md:gap-2"
                  >
                    {t("btn1")}
                    <MdFileDownload className="text-base" />
                  </a>
                  <Link
                    href={`/${locale}/projects`}
                    className="text-xs md:text-sm bg-transparent border border-white/20 hover:border-(--main-color) hover:bg-(--main-color) text-white px-4 md:px-10 py-2 md:py-4 md:font-black transition-all"
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
