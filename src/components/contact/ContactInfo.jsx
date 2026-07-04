"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  MdLocationOn,
  MdPhoneInTalk,
  MdAccessTime,
  MdArrowOutward,
} from "react-icons/md";
import { SITE_URL } from "@/lib/url";

export default function ContactInfo() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // النطاق الرسمي والموقع الثابت لبيانات الـ Local SEO
  const DOMAIN_URL = SITE_URL; // استبدل بـ URL موقعك الرسمي
  const phoneNumber = "+966570114100";

  const formatNumber = (num) => {
    if (!isRtl) return num;
    return `\u202D${num.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}\u202C`;
  };

  // 📝 بناء LocalBusiness Schema لجوجل لرفع أداء السيو المحلي
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: isRtl ? "أوراسيكيور لأنظمة السلامة" : "OraSecure Safety Systems",
    image: `${DOMAIN_URL}/logo.png`,
    "@id": `${DOMAIN_URL}/#localbusiness`,
    url: DOMAIN_URL,
    telephone: phoneNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: t("info_location_desc"),
      addressCountry: "SA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  const infoCards = [
    {
      id: "location",
      icon: <MdLocationOn />,
      title: t("info_location_title"),
      desc: <p>{t("info_location_desc")}</p>,
      actionLabel: isRtl ? "توجيهات السير" : "Get Directions",
      link: "https://maps.google.com/?q=OraSecure", // يفضل وضع رابط الخريطة الفعلي هنا
    },
    {
      id: "phones",
      icon: <MdPhoneInTalk />,
      title: t("info_phone_title"),
      desc: (
        <div className="flex flex-col gap-1" dir="ltr">
          <a
            href={`tel:${phoneNumber}`}
            className="hover:text-(--main-color) transition-colors focus:outline-hidden"
          >
            {formatNumber("+966-570114100")}
          </a>
        </div>
      ),
      actionLabel: isRtl ? "اتصل الآن" : "Call Now",
      link: `tel:${phoneNumber}`,
    },
    {
      id: "hours",
      icon: <MdAccessTime />,
      title: t("info_hours_title"),
      desc: <p>{t("info_hours_desc")}</p>,
      actionLabel: null,
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* حقن بيانات السيو المحلي في الهيكل البرمجي للصفحة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 items-stretch">
          {/* تحويل الحاوية إلى وsum address دلالي قياسي لبيانات الاتصال */}
          <address className="flex flex-col gap-6 justify-between not-italic">
            {infoCards.map((card) => (
              <div
                key={card.id}
                className="group bg-gray-50/60 border border-gray-100 p-5 flex items-center gap-5 hover:bg-white hover:border-gray-200 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div
                  className="w-7 md:w-14 h-7 md:h-14 bg-(--primary-color) text-white group-hover:bg-(--main-color) flex items-center justify-center text-sm md:text-2xl shadow-md transition-colors duration-500 shrink-0"
                  aria-hidden="true"
                >
                  {card.icon}
                </div>

                <div className="grow space-y-2 text-start">
                  <h4 className="text-sm md:text-base font-semibold md:font-black text-(--primary-color) group-hover:text-(--main-color) transition-colors duration-300">
                    {card.title}
                  </h4>

                  <div className="text-xs md:text-sm text-(--alt-color)/90 font-medium leading-relaxed">
                    {card.desc}
                  </div>

                  {card.link && (
                    <div className="pt-2">
                      <a
                        href={card.link}
                        target={card.id === "location" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-black text-(--primary-color) hover:text-(--main-color) transition-colors border-b border-gray-200 hover:border-(--main-color) pb-0.5 focus:outline-hidden"
                      >
                        <span>{card.actionLabel}</span>
                        <MdArrowOutward
                          className="text-xs"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </address>

          {/* حاوية الخريطة التفاعلية */}
          <div className="w-full min-h-100 md:min-h-full overflow-hidden border border-gray-300 shadow-md relative group">
            <div
              className="absolute inset-0 border-2 border-(--main-color) scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-20"
              aria-hidden="true"
            ></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.044453851912!2d46.7489796!3d24.622152699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0731a0765423%3A0xc186fbd52c4cc41f!2zT3Jhc2VjdXJlIC0g2KfZiNix2KfYs9mK2YPZitmI2LEg2YTYo9mG2LjZhdipINin2YTYs9mE2KfZhdipINmI2YXZg9in2YHYrdipINin2YTYrdix2KfYptmC!5e0!3m2!1sar!2seg!4v1782213208029!5m2!1sar!2seg" // استبدل برابط الـ Embed الفعلي من خرائط جوجل
              className="w-full h-full min-h-112.5 lg:h-full border-0 opacity-90 group-hover:opacity-100 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={
                isRtl
                  ? "موقع شركة أوراسيكيور على الخريطة"
                  : "OraSecure Location Map"
              }
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
