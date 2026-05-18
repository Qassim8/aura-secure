"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const phones = ["+966551622891", "+966574265715"];

  const formatNumber = (num) => {
    if (!isRtl) return num;
    return `\u202D${num.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}\u202C`;
  };

  return (
    <footer
      className="bg-(--primary-color) text-white pt-20 pb-10 border-t border-gray-800"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-4 space-y-6 text-start">
            <h2 className="text-3xl font-black tracking-tighter">
              ORA<span className="text-(--main-color)">SECURE</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed max-w-sm">
              {t("Footer_Desc")}
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 border border-gray-700/60 flex items-center justify-center text-gray-300 hover:bg-(--main-color) hover:text-white hover:border-(--main-color) transition-all duration-300 shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 text-start">
            <h4 className="md:text-lg font-black uppercase tracking-[3px] mb-6 border-b border-(--main-color) pb-2 inline-block text-white">
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
                    className="group text-xs md:text-sm text-gray-400 hover:text-(--main-color) transition-colors font-bold flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-(--main-color) rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 text-start">
            <h4 className="md:text-lg font-black uppercase tracking-[3px] mb-6 border-b border-(--main-color) pb-2 inline-block text-white">
              {t("Footer_Services")}
            </h4>
            <ul className="space-y-3.5">
              {[
                { id: "01", key: "S1_Title" },
                { id: "02", key: "S2_Title" },
                { id: "03", key: "S3_Title" },
                { id: "04", key: "S4_Title" },
              ].map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/${locale}/services/${svc.id}`}
                    className="text-xs md:text-sm text-gray-400 font-bold hover:text-gray-300 transition-colors"
                  >
                    {t(svc.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 text-start space-y-5">
            <h4 className="md:text-lg font-black uppercase tracking-[3px] mb-6 border-b border-(--main-color) pb-2 inline-block text-white">
              {t("contact_info_title")}
            </h4>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100/10 text-(--main-color) transition-colors duration-300 shrink-0 mt-0.5">
                  <MdPhone className="text-sm" />
                </div>
                <div className="flex flex-col">
                  {phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      dir="ltr"
                      className="text-xs font-black text-gray-400 hover:text-white transition-colors"
                    >
                      {formatNumber(phone)}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100/10 text-(--main-color) transition-colors duration-300 shrink-0">
                  <MdEmail className="text-sm" />
                </div>
                <a
                  href="mailto:info@orasecure.com"
                  className="text-xs font-black text-gray-400 hover:text-white transition-colors truncate"
                >
                  info@orasecure.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100/10 text-(--main-color) transition-colors duration-300 shrink-0 mt-0.5">
                  <MdLocationOn className="text-sm" />
                </div>
                <p className="text-xs font-bold text-gray-400 leading-relaxed">
                  {t("footer_address")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-100/10">
          <p className="text-gray-500 tracking-[2px] uppercase text-center">
            {t("Footer_Rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
