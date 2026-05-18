"use client";
import React from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { LuMinus } from "react-icons/lu";

export default function TopBar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // دالة تنسيق الأرقام لضمان انضباط الاتجاه
  const formatNumber = (num) => {
    if (!isRtl) return num;
    return `\u202D${num.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}\u202C`;
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full bg-linear-to-l from-gray-950 via-gray-800 to-gray-950 text-white/80 py-3 select-none text-xs md:text-base font-bold"
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        {/* 📞 معلومات التواصل */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          {/* رقم الهاتف */}
          <div className="flex items-center gap-1">
            {/* الأيقونات تأخذ اللون الأحمر (---main-color أو --primary-color) لتضيء فوق الأسود */}
            <MdPhone className="text-(--main-color) text-sm shrink-0" />
            <a
              href="tel:+966551622891"
              dir="ltr"
              className="hover:text-white hover:underline transition-all font-medium"
            >
              {formatNumber("0551622891")}
            </a>
            <LuMinus />
            <a
              href="tel:+966551622891"
              dir="ltr"
              className="hover:text-white hover:underline transition-all font-medium"
            >
              {formatNumber("0551622891")}
            </a>
          </div>

          {/* الفاصل البصري - تم تنعيم لونه ليكون شفافاً */}
          <div className="h-3 w-px bg-white/80 hidden sm:block"></div>

          {/* البريد الإلكتروني */}
          <div className="flex items-center gap-2">
            <MdEmail className="text-(--main-color) text-sm shrink-0" />
            <a
              href="mailto:info@orasecure.com"
              className="hover:text-white hover:underline transition-all font-medium"
            >
              info@orasecure.com
            </a>
          </div>
        </div>

        {/* 🎯 زر طلب الخدمة / اتصل بنا السريع */}
        <Link
          href={`/${locale}/contact`}
          className="group py-2 px-3 text-white bg-(--main-color) text-[11px] md:text-sm hover:bg-white hover:text-(--primary-color) shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 shrink-0"
        >
          <PiPhoneCallDuotone className="text-sm group-hover:scale-110 transition-transform duration-300" />
          <span>{t("contact")}</span>
        </Link>
      </div>
    </div>
  );
}
