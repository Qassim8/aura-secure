"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import Breadcrumb from "@/components/base/Breadcrumb";
import MainTitle from "@/components/base/MainTitle";
import Link from "next/link";
import { GiFlame, GiWrench } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import { LuBadgeCheck, LuBuilding2 } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import ServicesCTA from "@/components/services/ServicesCTAWithMap";
import PageHeader from "@/components/base/Breadcrumb";

export default function ServiceDetailClient() {
  const params = useParams();

  const locale = useLocale();

  const t = useTranslations("Services");

  const id = params.id;

  const services = [
    {
      id: "fire-alarm-systems",

      icon: <GiFlame className="w-8 h-8" />,

      title: t("S1_Title"),

      desc: t("S1_LongDesc"),

      features: [
        locale === "ar"
          ? "توريد لوحات الإنذار المعتمدة"
          : "Certified fire alarm control panels",

        locale === "ar"
          ? "تركيب كاشفات الدخان والحرارة"
          : "Smoke & heat detector installation",

        locale === "ar"
          ? "ربط أنظمة الإنذار بالمباني"
          : "Building alarm integration",

        locale === "ar" ? "اختبارات وتشغيل كامل" : "Testing & commissioning",
      ],
    },

    {
      id: "fire-fighting-systems",

      icon: <GoShieldCheck className="w-8 h-8" />,

      title: t("S2_Title"),

      desc: t("S2_LongDesc"),

      features: [
        locale === "ar" ? "أنظمة FM200" : "FM200 suppression systems",

        locale === "ar" ? "شبكات الرش الآلي" : "Automatic sprinkler systems",

        locale === "ar" ? "مضخات الحريق" : "Fire pump systems",

        locale === "ar" ? "تمديدات الأنابيب" : "Fire piping networks",
      ],
    },

    {
      id: "maintenance-contracts",

      icon: <GiWrench className="w-8 h-8" />,

      title: t("S3_Title"),

      desc: t("S3_LongDesc"),

      features: [
        locale === "ar" ? "زيارات دورية" : "Scheduled inspections",

        locale === "ar" ? "تقارير فنية" : "Technical reports",

        locale === "ar" ? "صيانة وقائية" : "Preventive maintenance",

        locale === "ar" ? "استجابة سريعة للأعطال" : "Fast emergency response",
      ],
    },

    {
      id: "cctv-security-systems",

      icon: <LuBuilding2 className="w-8 h-8" />,

      title: t("S4_Title"),

      desc: t("S4_LongDesc"),

      features: [
        locale === "ar" ? "كاميرات مراقبة HD" : "HD surveillance cameras",

        locale === "ar" ? "أنظمة Access Control" : "Access control systems",

        locale === "ar" ? "ربط الفروع مركزياً" : "Centralized monitoring",

        locale === "ar" ? "تسجيل وحفظ البيانات" : "Recording & backup systems",
      ],
    },

    {
      id: "safety-plans-engineering",

      icon: <LuBadgeCheck className="w-8 h-8" />,

      title: t("S5_Title"),

      desc: t("S5_LongDesc"),

      features: [
        locale === "ar" ? "مخططات الدفاع المدني" : "Civil defense drawings",

        locale === "ar" ? "تصميم مخارج الطوارئ" : "Emergency exit planning",

        locale === "ar" ? "توزيع معدات السلامة" : "Safety equipment layout",

        locale === "ar" ? "اعتماد المخططات" : "Engineering approvals",
      ],
    },
  ];

  const service = services.find((s) => s.id === id);

  if (!service) return null;

  const items = [
    {
      label: locale === "ar" ? "الرئيسية" : "Home",

      href: `/${locale}`,
    },

    {
      label: t("Services_1"),

      href: `/${locale}/services`,
    },

    {
      label: service.title,

      href: `/${locale}/services/${id}`,
    },
  ];

  return (
    <div>
      <PageHeader
        title={service.title}
        breadcrumbs={[
          {
            label: locale === "ar" ? "الرئيسية" : "Home",
            href: `/${locale}`,
          },
          {
            label: locale === "ar" ? "الخدمات" : "Services",
            href: `/${locale}/services`,
          },
          {
            label: service.title,
            href: `/${locale}/services/${service.id}`,
          },
        ]}
      />

      {/* HERO */}

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-(--primary-color) to-[#09101d]" />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="w-20 h-20 --3xl bg-(--main-color)/10 border border-(--main-color)/20 flex items-center justify-center text-(--main-color) mb-8">
              {service.icon}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              {service.title}
            </h1>

            <p className="mt-8 text-lg leading-9 text-white/70 max-w-3xl">
              {service.desc}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href={`/${locale}/contact`}
                className="px-8 h-14 --2xl bg-(--main-color) text-white font-bold inline-flex items-center gap-2"
              >
                {locale === "ar" ? "اطلب معاينة الآن" : "Request Inspection"}

                <BsArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-24 bg-white">
        <div className="container">
          <MainTitle
            title={t("Services_1")}
            subtitle={
              locale === "ar" ? "ماذا تشمل هذه الخدمة؟" : "What’s Included?"
            }
          />

          <div className="grid md:grid-cols-2 gap-px mt-14 border border-black/10 bg-black/10">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-10 hover:bg-(--primary-color) hover:text-white transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-(--main-color)/20 bg-(--main-color)/10 text-(--main-color) flex items-center justify-center group-hover:bg-(--main-color) group-hover:text-white transition-all">
                    <GoShieldCheck className="text-2xl" />
                  </div>

                  <div>
                    <span className="text-sm text-(--main-color) font-bold">
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 text-xl font-black leading-relaxed">
                      {feature}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}

      <section className="py-24 bg-[#f8fafc] border-y border-black/5">
        <div className="container">
          <MainTitle
            title={locale === "ar" ? "لماذا نحن" : "Why Aura Secure"}
            subtitle={
              locale === "ar"
                ? "خبرة وجودة بمعايير عالمية"
                : "Trusted Safety Experts"
            }
          />

          <div className="mt-16 divide-y divide-black/10 border-y border-black/10">
            {[
              {
                number: "01",

                title:
                  locale === "ar"
                    ? "حلول مطابقة لاشتراطات الدفاع المدني"
                    : "Civil Defense Approved Systems",
              },

              {
                number: "02",

                title:
                  locale === "ar"
                    ? "كوادر هندسية متخصصة"
                    : "Professional Engineering Team",
              },

              {
                number: "03",

                title:
                  locale === "ar"
                    ? "دعم وصيانة طويلة المدى"
                    : "Long-Term Technical Support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div className="text-5xl font-black text-(--main-color)/20">
                  {item.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-(--primary-color)">
                    {item.title}
                  </h3>
                </div>

                <div className="w-14 h-14 border border-(--main-color)/20 bg-(--main-color)/10 text-(--main-color) flex items-center justify-center">
                  <LuBadgeCheck className="text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <ServicesCTA />
    </div>
  );
}
