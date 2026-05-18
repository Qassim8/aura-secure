import React from "react";

export default function StructuredData({
  type = "organization",
  breadcrumb = null,
  service = null,
  locale = "ar",
}) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aura Secure",
    url: "https://orasecure.com",
    logo: "https://orasecure.com/icon.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966551622891",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["Arabic", "English"],
      },
    ],
    sameAs: ["https://www.linkedin.com/", "https://twitter.com/"],
  };

  const breadcrumbList = breadcrumb
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

  const serviceSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Aura Secure",
          url: "https://orasecure.com",
        },
        areaServed: "Saudi Arabia",
      }
    : null;

  const scripts = [org, breadcrumbList, serviceSchema].filter(Boolean);

  return (
    <>
      {scripts.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
