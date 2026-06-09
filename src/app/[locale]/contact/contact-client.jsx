"use client";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import React from "react";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactSection from "@/components/contact/ContactSection";

export default function ContactClient() {
  const t = useTranslations("Contact");
  const locale = useLocale();

  React.useEffect(() => {}, []);

  return (
    <main>
      <Breadcrumb
        title={t("Contact_1")}
        breadcrumbs={[
          {
            label: locale === "ar" ? "الرئيسية" : "Home",
            href: `/${locale}`,
          },
          {
            label: t("Contact_1"),
            href: `/${locale}/services`,
          },
        ]}
      />
      <ContactInfo />
      <ContactSection bg={"bg-(--second-color)"} />
    </main>
  );
}
