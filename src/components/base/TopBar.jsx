"use client";
import React from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";
import { PiPhoneCallDuotone } from "react-icons/pi";
import Link from "next/link";

export default function TopBar() {
  const t = useTranslations("Navbar"); // نستخدم نفس كائن ترجمة النافبار للتنظيم
  const locale = useLocale();
  const isRtl = locale === "ar";

  // دالة ذكية لمنع المتصفحات من بعثرة إشارات الاتصال الدولي في الواجهات العربية
  const formatNumber = (num) => {
    if (!isRtl) return num;
    return `\u202D${num.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}\u202C`;
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full bg-(--main-color) text-white/90 py-3 border-b border-(--primary-color) select-none font-bold"
    >
      <div className="container flex items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
          {/* رقم الهاتف */}
          <div className="flex items-center gap-1">
            <MdPhone className="text-(--primary-color) shrink-0" />
            <a
              href="tel:+966551622891"
              dir="ltr"
              className="hover:text-white hover:underline transition-all"
            >
              {formatNumber("+966 551622891")}
            </a>
          </div>

          {/* الفاصل البصري بين الأيقونات */}
          <div className="h-3 w-px bg-white hidden xs:block"></div>

          {/* البريد الإلكتروني */}
          <div className="flex items-center gap-1">
            <MdEmail className="text-(--primary-color) shrink-0" />
            <a
              href="mailto:info@orasecure.com"
              className="hover:text-white hover:underline transition-all"
            >
              info@orasecure.com
            </a>
          </div>
        </div>

        <Link
          href={`/${locale}/contact`}
          className="group py-2 px-4 text-white bg-(--primary-color) text-xs md:text-base hover:scale-[1.03] transition-all flex items-center gap-1 md:font-bold"
        >
          <PiPhoneCallDuotone className="md:text-lg" />

          {t("contact")}
        </Link>
      </div>
    </div>
  );
}
