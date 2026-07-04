"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import MainTitle from "../base/MainTitle";
import FAQ from "./FAQ";
import Form from "./Form";
import { faqSchema } from "@/lib/seo";

export default function ContactSection({ bg }) {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const currentFaqs = faqSchema[locale] || [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: currentFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      className={`py-20 ${bg} relative overflow-hidden text-start`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <MainTitle
          title={t("Contact_1")}
          subtitle={t("Contact_2")}
          pos="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mt-16 items-start">
          <aside className="md:col-span-5 space-y-4">
            <FAQ faqs={currentFaqs} />
          </aside>

          <div className="md:col-span-7 relative">
            <Form isRtl={isRtl} />
          </div>
        </div>
      </div>
    </section>
  );
}
