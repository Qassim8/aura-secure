import React from "react";

export default function StructuredData({
  type = "organization",
  breadcrumb = null,
  service = null,
  locale = "ar",
}) {
  const siteUrl = "https://orasecure.com";

  // =========================
  // ORGANIZATION + LOCAL SEO
  // =========================

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    "@id": `${siteUrl}/#organization`,

    name: locale === "ar" ? "أوراسيكيور" : "Aura Secure",

    alternateName: "ORA Secure",

    url: siteUrl,

    logo: `${siteUrl}/icon.png`,

    image: `${siteUrl}/og-image-home.png`,

    description:
      locale === "ar"
        ? "شركة متخصصة في أنظمة الأمن والسلامة وإنذار وإطفاء الحريق وكاميرات المراقبة في المملكة العربية السعودية."
        : "A Saudi company specialized in fire alarm systems, fire suppression systems, CCTV surveillance, and integrated safety solutions.",

    telephone: "+966551622891",

    email: "info@orasecure.com",

    address: {
      "@type": "PostalAddress",

      addressCountry: "SA",

      addressRegion: locale === "ar" ? "الرياض" : "Riyadh",
    },

    areaServed: {
      "@type": "Country",
      name: locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia",
    },

    availableLanguage: ["Arabic", "English"],

    openingHours: "Su-Th 08:00-18:00",

    priceRange: "$$",

    sameAs: ["https://www.linkedin.com/", "https://twitter.com/"],

    contactPoint: [
      {
        "@type": "ContactPoint",

        telephone: "+966551622891",

        contactType: "customer service",

        areaServed: "SA",

        availableLanguage: ["Arabic", "English"],
      },
    ],
  };

  // =========================
  // WEBSITE SCHEMA
  // =========================

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${siteUrl}/#website`,

    url: siteUrl,

    name: "Aura Secure",

    inLanguage: locale === "ar" ? "ar-SA" : "en-US",

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  // =========================
  // BREADCRUMB
  // =========================

  const breadcrumbSchema = breadcrumb
    ? {
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        itemListElement: breadcrumb.map((b, i) => ({
          "@type": "ListItem",

          position: i + 1,

          name: b.name,

          item: b.url,
        })),
      }
    : null;

  // =========================
  // SERVICE SCHEMA
  // =========================

  const serviceSchema = service
    ? {
        "@context": "https://schema.org",

        "@type": "Service",

        serviceType: service.name,

        name: service.name,

        description: service.description,

        areaServed: {
          "@type": "Country",
          name: locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia",
        },

        provider: {
          "@id": `${siteUrl}/#organization`,
        },

        brand: {
          "@type": "Brand",

          name: "Aura Secure",
        },

        availableChannel: {
          "@type": "ServiceChannel",

          serviceUrl: `${siteUrl}/${locale}/services`,
        },
      }
    : null;

  // =========================
  // FAQ SCHEMA
  // =========================

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity:
      locale === "ar"
        ? [
            {
              "@type": "Question",

              name: "ما الخدمات التي تقدمها أوراسيكيور؟",

              acceptedAnswer: {
                "@type": "Answer",

                text: "تقدم أوراسيكيور خدمات أنظمة إنذار الحريق، أنظمة الإطفاء، كاميرات المراقبة، التحكم بالدخول، وعقود الصيانة في المملكة العربية السعودية.",
              },
            },

            {
              "@type": "Question",

              name: "هل الأنظمة متوافقة مع اشتراطات الدفاع المدني؟",

              acceptedAnswer: {
                "@type": "Answer",

                text: "نعم، جميع الأنظمة والحلول الهندسية يتم تنفيذها وفق اشتراطات الدفاع المدني السعودي والمعايير العالمية.",
              },
            },
          ]
        : [
            {
              "@type": "Question",

              name: "What services does Aura Secure provide?",

              acceptedAnswer: {
                "@type": "Answer",

                text: "Aura Secure provides fire alarm systems, fire suppression systems, CCTV surveillance, access control systems, and maintenance contracts across Saudi Arabia.",
              },
            },

            {
              "@type": "Question",

              name: "Are your systems compliant with Saudi Civil Defense regulations?",

              acceptedAnswer: {
                "@type": "Answer",

                text: "Yes, all systems comply with Saudi Civil Defense requirements and international standards.",
              },
            },
          ],
  };

  // =========================
  // FINAL SCRIPTS
  // =========================

  const scripts = [
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
    serviceSchema,
    faqSchema,
  ].filter(Boolean);

  return (
    <>
      {scripts.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
