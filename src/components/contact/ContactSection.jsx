"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import MainTitle from "../base/MainTitle";
import { MdSend, MdExpandMore } from "react-icons/md";
import FAQ from "./FAQ";
import Form from "./Form";

export default function ContactSection({ bg }) {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      className={`py-20 ${bg} relative overflow-hidden text-right`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container relative z-10">
        <MainTitle
          title={t("Contact_1")}
          subtitle={t("Contact_2")}
          pos="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mt-16 items-start">
          <div className="md:col-span-5 space-y-4">
            <FAQ t={t} />
          </div>

          <div className="md:col-span-7 relative">
            <Form t={t} isRtl={isRtl} />
          </div>
        </div>
      </div>
    </section>
  );
}
