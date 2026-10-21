"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import MainTitle from "@/components/base/MainTitle";
import Link from "next/link";
import { GiFlame, GiWrench } from "react-icons/gi";
import { GoShieldCheck as ShieldIcon } from "react-icons/go";
import { LuBadgeCheck, LuBuilding2 } from "react-icons/lu";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ServicesCTA from "@/components/services/ServicesCTAWithMap";
import PageHeader from "@/components/base/Breadcrumb";

export default function ServiceDetailClient() {
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations("Services");
  const id = params.id;
  const isRtl = locale === "ar";

  const services = [
    {
      id: "fire-alarm-systems",
      icon: <GiFlame className="w-8 h-8" />,
      title: t("S1_Title"),
      desc: t("S1_LongDesc"),
      features: [
        isRtl
          ? "توريد لوحات الإنذار المعتمدة"
          : "Certified fire alarm control panels",
        isRtl
          ? "تركيب كاشفات الدخان والحرارة"
          : "Smoke & heat detector installation",
        isRtl ? "ربط أنظمة الإنذار بالمباني" : "Building alarm integration",
        isRtl ? "اختبارات وتشغيل كامل" : "Testing & commissioning",
      ],
    },
    {
      id: "fire-fighting-systems",
      icon: <ShieldIcon className="w-8 h-8" />,
      title: t("S2_Title"),
      desc: t("S2_LongDesc"),
      features: [
        isRtl ? "أنظمة FM200" : "FM200 suppression systems",
        isRtl ? "شبكات الرش الآلي" : "Automatic sprinkler systems",
        isRtl ? "مضخات الحريق" : "Fire pump systems",
        isRtl ? "تمديدات الأنابيب" : "Fire piping networks",
      ],
    },
    {
      id: "maintenance-contracts",
      icon: <GiWrench className="w-8 h-8" />,
      title: t("S3_Title"),
      desc: t("S3_LongDesc"),
      features: [
        isRtl ? "زيارات دورية" : "Scheduled inspections",
        isRtl ? "تقارير فنية" : "Technical reports",
        isRtl ? "صيانة وقائية" : "Preventive maintenance",
        isRtl ? "استجابة سريعة للأعطال" : "Fast emergency response",
      ],
    },
    {
      id: "cctv-security-systems",
      icon: <LuBuilding2 className="w-8 h-8" />,
      title: t("S4_Title"),
      desc: t("S4_LongDesc"),
      features: [
        isRtl ? "كاميرات مراقبة HD" : "HD surveillance cameras",
        isRtl ? "أنظمة Access Control" : "Access control systems",
        isRtl ? "ربط الفروع مركزياً" : "Centralized monitoring",
        isRtl ? "تسجيل وحفظ البيانات" : "Recording & backup systems",
      ],
    },
    {
      id: "safety-plans-engineering",
      icon: <LuBadgeCheck className="w-8 h-8" />,
      title: t("S5_Title"),
      desc: t("S5_LongDesc"),
      features: [
        isRtl ? "مخططات الدفاع المدني" : "Civil defense drawings",
        isRtl ? "تصميم مخارج الطوارئ" : "Emergency exit planning",
        isRtl ? "توزيع معدات السلامة" : "Safety equipment layout",
        isRtl ? "اعتماد المخططات" : "Engineering approvals",
      ],
    },
  ];

  const service = services.find((s) => s.id === id);

  if (!service) return null;

  // البيانات المنظمة (BreadcrumbList + Service) تُولَّد من الخادم في page.jsx
  const breadcrumbsData = [
    {
      name: isRtl ? "الرئيسية" : "Home",
      url: "/",
    },
    {
      name: isRtl ? "الخدمات" : "Services",
      url: "/services",
    },
    {
      name: service.title,
      url: `/services/${service.id}`,
    },
  ];

  return (
    <article>
      {/* البريد كرمب والترويسة المحدثة */}
      <PageHeader title={service.title} breadcrumbs={breadcrumbsData} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-28 bg-slate-50/50">
        <div className="absolute inset-0 bg-red-100/10" aria-hidden="true" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <div
              className="w-20 h-20 bg-(--main-color)/10 border border-(--main-color)/20 flex items-center justify-center text-(--main-color) mb-8"
              aria-hidden="true"
            >
              {service.icon}
            </div>

            <p className="mt-8 text-lg md:text-xl leading-9 text-(--primary-color) max-w-3xl font-medium">
              {service.desc}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href={`/${locale}/contact`}
                className="px-8 h-14 bg-(--main-color) text-white font-bold inline-flex items-center gap-2 transition-transform hover:scale-[1.02] focus:outline-hidden"
              >
                {isRtl ? "اطلب معاينة الآن" : "Request Inspection"}
                {!isRtl ? (
                  <BsArrowRight className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <BsArrowLeft className="w-5 h-5" aria-hidden="true" />
                )}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <MainTitle
            title={t("Services_1")}
            subtitle={
              isRtl
                ? `ماذا تشمل خدمة ${service.title}؟`
                : `What’s Included in ${service.title}?`
            }
          />

          {/* تحويل قائمة الميزات إلى هيكلية متوافقة مع السيو وقارئات الشاشة */}
          <ul className="grid md:grid-cols-2 gap-px mt-14 border border-slate-200 bg-black/10 list-none p-0">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="bg-white p-10 hover:bg-(--primary-color) hover:text-white transition-all duration-300 group"
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 border border-(--main-color)/20 bg-(--main-color)/10 text-(--main-color) flex items-center justify-center group-hover:bg-(--main-color) group-hover:text-white transition-all"
                    aria-hidden="true"
                  >
                    <ShieldIcon className="text-2xl" />
                  </div>

                  <div>
                    <span className="text-sm text-(--main-color) font-bold block mb-1">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-black leading-relaxed">
                      {feature}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-24 bg-[#f8fafc] border-y border-black/5">
        <div className="container mx-auto px-6">
          <MainTitle
            title={isRtl ? "لماذا نحن" : "Why Ora Secure"}
            subtitle={
              isRtl ? "خبرة وجودة بمعايير عالمية" : "Trusted Safety Experts"
            }
          />

          <div className="mt-16 divide-y divide-black/10 border-y border-black/10">
            {[
              {
                number: "01",
                title: isRtl
                  ? "حلول مطابقة لاشتراطات الدفاع المدني"
                  : "Civil Defense Approved Systems",
              },
              {
                number: "02",
                number_alt: "02",
                title: isRtl
                  ? "كوادر هندسية متخصصة"
                  : "Professional Engineering Team",
              },
              {
                number: "03",
                title: isRtl
                  ? "دعم وصيانة طويلة المدى"
                  : "Long-Term Technical Support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div
                  className="text-5xl font-black text-(--main-color)/20"
                  aria-hidden="true"
                >
                  {item.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-(--primary-color)">
                    {item.title}
                  </h3>
                </div>

                <div
                  className="w-14 h-14 border border-(--main-color)/20 bg-(--main-color)/10 text-(--main-color) flex items-center justify-center"
                  aria-hidden="true"
                >
                  <LuBadgeCheck className="text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES: روابط داخلية بين صفحات الخدمات */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <MainTitle
            title={t("Services_1")}
            subtitle={isRtl ? "خدمات أخرى قد تهمك" : "Other Services You May Need"}
          />

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mt-14 border border-slate-200 bg-black/10 list-none p-0">
            {services
              .filter((s) => s.id !== service.id)
              .map((s) => (
                <li key={s.id} className="bg-white">
                  <Link
                    href={`/${locale}/services/${s.id}`}
                    className="group h-full p-8 flex flex-col gap-5 hover:bg-(--primary-color) transition-all duration-300 focus:outline-hidden"
                  >
                    <span
                      className="w-14 h-14 border border-(--main-color)/20 bg-(--main-color)/10 text-(--main-color) flex items-center justify-center group-hover:bg-(--main-color) group-hover:text-white transition-all"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </span>
                    <span className="text-lg font-black text-(--primary-color) group-hover:text-white transition-colors">
                      {s.title}
                    </span>
                    <span className="mt-auto text-sm font-bold text-(--main-color) group-hover:text-white inline-flex items-center gap-2 transition-colors">
                      {t("view_more")}
                      {isRtl ? (
                        <BsArrowLeft className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <BsArrowRight className="w-4 h-4" aria-hidden="true" />
                      )}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <ServicesCTA />
    </article>
  );
}
