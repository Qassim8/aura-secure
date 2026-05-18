"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import MainTitle from "@/components/base/MainTitle";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Services");

  const id = params.id;

  const services = [
    { id: "01", title: t("S1_Title"), desc: t("S1_Desc") },
    { id: "02", title: t("S2_Title"), desc: t("S2_Desc") },
    { id: "03", title: t("S3_Title"), desc: t("S3_Desc") },
    { id: "04", title: t("S4_Title"), desc: t("S4_Desc") },
    { id: "05", title: t("S5_Title"), desc: t("S5_Desc") },
  ];

  const service = services.find((s) => s.id === id) || { title: id, desc: "" };

  const items = [
    { label: t("Services_1"), href: `/${locale}` },
    { label: t("Services_1"), href: `/${locale}/services` },
    { label: service.title, href: `/${locale}/services/${id}` },
  ];

  return (
    <div>
      <Breadcrumb items={items} />

      <section className="py-10">
        <div className="container">
          <MainTitle
            title={t("Services_1")}
            subtitle={service.title}
            pos="start"
          />

          <div className="prose max-w-none">
            <h2 className="text-2xl font-black text-(--primary-color)">
              {service.title}
            </h2>
            <p className="mt-4">{service.desc}</p>
            <p className="mt-4 text-sm text-gray-600">{t("detail_note")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
