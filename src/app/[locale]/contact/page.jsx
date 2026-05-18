"use client";
import { useTranslations } from "next-intl";
import Breadcrumb from "@/components/base/Breadcrumb";
import React from "react";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactSection from "@/components/contact/ContactSection";

const ContactPage = () => {
  const t = useTranslations("Contact");

  React.useEffect(() => {}, []);

  return (
    <main>
      <Breadcrumb title={t("Contact_1")} />
      <ContactInfo />
      <ContactSection bg={"bg-(--second-color)"} />
    </main>
  );
};

export default ContactPage;
