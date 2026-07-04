"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const phones = ["+966570114100"];

  // دالة تنسيق الأرقام لضمان انضباط الاتجاه
  const formatNumber = (num) => {
    if (!isRtl) return num;
    return `\u202D${num.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}\u202C`;
  };

  // مصفوفة التواصل الاجتماعي مع نصوص وصفية صريحة للـ Accessibility
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/company/orasecure",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/orasecure",
      label: "Twitter / X",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/orasecure",
      label: "Instagram",
    },
  ];

  return (
    <footer
      className="bg-(--primary-color) text-white pt-20 pb-10 border-t border-gray-800"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* العمود الأول: الشعار والوصف العام وشبكات التواصل */}
          <div className="lg:col-span-4 space-y-6 text-start">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-4 relative w-32 h-16"
              aria-label={
                isRtl ? "أوراسيكيور الصفحة الرئيسية" : "OraSecure Home"
              }
            >
              <Image
                src="/logo.png"
                alt={isRtl ? "شعار شركة أوراسيكيور" : "OraSecure Logo"}
                fill
                sizes="(max-width: 768px) 120px, 150px"
                className="object-contain object-start"
                loading="lazy"
              />
            </Link>

            <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed max-w-sm">
              {t("Footer_Desc")}
            </p>

            {/* روابط التواصل مع دعم ميزة التصفح الآمن وقارئات الشاشة */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:bg-(--main-color) hover:text-white hover:border-(--main-color) transition-all duration-300 shadow-md focus:outline-hidden"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة للموقع */}
          <nav
            className="md:col-span-2 text-start"
            aria-label={isRtl ? "روابط التذييل السريعة" : "Footer Quick Links"}
          >
            <h4 className="text-sm md:text-base font-black uppercase tracking-[3px] mb-6 border-b border-(--main-color) pb-2 inline-block text-white">
              {t("Footer_Links")}
            </h4>
            <ul className="space-y-3.5">
              {[
                { key: "Home", path: "/" },
                { key: "About", path: "/about" },
                { key: "Projects", path: "/projects" },
                { key: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}${link.path}`}
                    className="group text-xs md:text-sm text-gray-400 hover:text-(--main-color) transition-colors font-bold flex items-center gap-2 focus:outline-hidden"
                  >
                    <span
                      className="w-1 h-1 bg-(--main-color) rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    ></span>
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* العمود الثالث: خدمات الشركة المباشرة لتعزيز الـ Internal Linking */}
          <nav
            className="md:col-span-3 text-start"
            aria-label={isRtl ? "خدماتنا بالتذييل" : "Footer Services Links"}
          >
            <h4 className="text-sm md:text-base font-black uppercase tracking-[3px] mb-6 border-b border-(--main-color) pb-2 inline-block text-white">
              {t("Footer_Services")}
            </h4>
            <ul className="space-y-3.5">
              {[
                { id: "fire-alarm-systems", key: "S1_Title" },
                { id: "fire-fighting-systems", key: "S2_Title" },
                { id: "maintenance-contracts", key: "S3_Title" },
                { id: "cctv-security-systems", key: "S4_Title" },
                { id: "safety-plans-engineering", key: "S5_Title" },
              ].map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/${locale}/services/${svc.id}`}
                    className="text-xs md:text-sm text-gray-400 font-bold hover:text-gray-300 transition-colors focus:outline-hidden"
                  >
                    {t(svc.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* العمود الرابع: معلومات الاتصال مغلفة بوسم address دلالي لقوقل */}
          <div className="md:col-span-3 text-start space-y-5">
            <h4 className="text-sm md:text-base font-black uppercase tracking-[3px] mb-6 border-b border-(--main-color) pb-2 inline-block text-white">
              {t("contact_info_title")}
            </h4>

            <address className="space-y-3 not-italic">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 bg-gray-100/10 text-(--main-color) transition-colors duration-300 shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <MdPhone className="text-sm" />
                </div>
                <div className="flex flex-col">
                  {phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      dir="ltr"
                      className="text-xs font-black text-gray-400 hover:text-white transition-colors focus:outline-hidden"
                    >
                      {formatNumber(phone)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="p-2 bg-gray-100/10 text-(--main-color) transition-colors duration-300 shrink-0"
                  aria-hidden="true"
                >
                  <MdEmail className="text-sm" />
                </div>
                <a
                  href="mailto:info@orasecure.com.sa"
                  className="text-xs font-black text-gray-400 hover:text-white transition-colors truncate focus:outline-hidden"
                >
                  info@orasecure.com.sa
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="p-2 bg-gray-100/10 text-(--main-color) transition-colors duration-300 shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <MdLocationOn className="text-sm" />
                </div>
                <p className="text-xs font-bold text-gray-400 leading-relaxed">
                  {t("footer_address")}
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* سطر الحقوق السفلي */}
        <div className="text-center pt-8 border-t border-gray-100/10">
          <p className="text-gray-500 tracking-[2px] uppercase text-xs md:text-sm text-center">
            {t("Footer_Rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
