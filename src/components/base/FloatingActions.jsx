"use client";
import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowUp, MdPhone } from "react-icons/md";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();
  const isRtl = locale === "ar";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const phoneNumber = "+966570114100";

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-center gap-3 md:gap-4 select-none">
      {/* 📞 أولاً: زر الاتصال الهاتفي المباشر المطور */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-10 md:w-12 h-10 md:h-12 bg-(--main-color) hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)] relative focus:outline-hidden"
        aria-label={isRtl ? "اتصل بنا هاتفياً" : "Call us now"}
      >
        {/* أنميشن النبض لشد انتباه العميل */}
        <span className="absolute inset-0 rounded-full bg-(--main-color)/40 animate-ping duration-1000 pointer-events-none"></span>
        <MdPhone className="text-white text-base md:text-2xl transition-transform duration-300 group-hover:rotate-12" />
      </a>

      {/* 💬 ثانياً: زر الواتساب */}
      <a
        href={`https://wa.me/966570114100?text=${encodeURIComponent(
          isRtl
            ? "مرحباً أورا سيكيور، أود الاستفسار عن أنظمة السلامة ومكافحة الحرائق"
            : "Hello OraSecure, I would like to inquire about safety and fire fighting systems",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 md:w-12 h-10 md:h-12 bg-emerald-600 hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] focus:outline-hidden"
        aria-label={isRtl ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
      >
        <FaWhatsapp className="text-white text-base md:text-2xl transition-transform duration-300 group-hover:-translate-y-0.5" />
      </a>

      {/* 🔼 ثالثاً: زر الصعود لأعلى الصفحة */}
      <button
        onClick={scrollTop}
        className={`w-9 md:w-12 h-9 md:h-12 bg-(--primary-color) hover:bg-(--main-color) border border-white/10 flex items-center justify-center rounded-full shadow-lg outline-none cursor-pointer transition-all duration-500 transform ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-75 pointer-events-none"
        }`}
        aria-label={isRtl ? "الرجوع لأعلى الصفحة" : "Back to top"}
      >
        <MdKeyboardArrowUp className="text-white text-base md:text-2xl" />
      </button>
    </div>
  );
}
