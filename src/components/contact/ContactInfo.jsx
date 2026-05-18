"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  MdLocationOn,
  MdPhoneInTalk,
  MdAccessTime,
  MdArrowOutward,
} from "react-icons/md";

export default function ContactInfo() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const formatNumber = (num) => {
    if (!isRtl) return num;
    return `\u202D${num.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}\u202C`;
  };

  const infoCards = [
    {
      id: "location",
      icon: <MdLocationOn />,
      title: t("info_location_title"),
      desc: t("info_location_desc"),
      actionLabel: isRtl ? "توجيهات السير" : "Get Directions",
      link: "https://maps.google.com/?q=Prince+Mohammed+bin+Abdulrahman+Rd+Al+Kharj+Rd+Riyadh",
    },
    {
      id: "phones",
      icon: <MdPhoneInTalk />,
      title: t("info_phone_title"),
      desc: (
        <div className="flex flex-col gap-1" dir="ltr">
          <a
            href="tel:+966551622891"
            className="hover:text-(--main-color) transition-colors"
          >
            {formatNumber("+966 551622891")}
          </a>
          <a
            href="tel:+966574265715"
            className="hover:text-(--main-color) transition-colors"
          >
            {formatNumber("+966 574265715")}
          </a>
        </div>
      ),
      actionLabel: isRtl ? "اتصل الآن" : "Call Now",
      link: "tel:+966551622891",
    },
    {
      id: "hours",
      icon: <MdAccessTime />,
      title: t("info_hours_title"),
      desc: t("info_hours_desc"),
      actionLabel: null,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 items-stretch">
          <div className="flex flex-col gap-6 justify-between">
            {infoCards.map((card) => (
              <div
                key={card.id}
                className="group bg-gray-50/60 border border-gray-100 p-6 md:p-8 flex items-center gap-6 hover:bg-white hover:border-gray-200 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="w-7 md:w-14 h-7 md:h-14 bg-(--primary-color) text-white group-hover:bg-(--main-color) flex items-center justify-center text-sm md:text-2xl shadow-md transition-colors duration-500 shrink-0">
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
                        className="inline-flex items-center gap-1 text-[11px] font-black text-(--primary-color) hover:text-(--main-color) transition-colors border-b border-gray-200 hover:border-(--main-color) pb-0.5"
                      >
                        <span>{card.actionLabel}</span>
                        <MdArrowOutward className="text-xs" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full min-h-100 md:min-h-full overflow-hidden border border-gray-300 shadow-md relative group">
            <div className="absolute inset-0 border-2 border-(--main-color) scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-20"></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.877042564883!2d46.7410052!3d24.6278895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f067d5d30e38b%3A0xcd50bf8a77d1303d!2z2KfZhNiu2KfZhNiv2YrZgdiMINin2YTYsdmK2KfZhA!5e0!3m2!1sar!2ssa!4v1716000000000!5m2!1sar!2ssa"
              className="w-full h-full min-h-112.5 lg:h-full border-0 md:grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OraSecure Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
