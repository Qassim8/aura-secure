export const seoData = {
  en: {
    home: {
      title: "Aura Secure | Fire Safety & Security Engineering - Saudi Arabia",
      description:
        "Aura Secure provides certified fire protection, alarm systems, CCTV and maintenance services across Saudi Arabia. Experts in safety engineering and compliant installations.",
      keywords: [
        "fire alarm systems",
        "security companies Saudi Arabia",
        "safety engineering",
        "firefighting systems",
        "CCTV installation",
        "maintenance contracts",
      ],
      ogTitle: "Aura Secure — Trusted Safety & Fire Protection Solutions",
      ogDescription:
        "Certified fire protection, alarm systems and integrated security solutions across the Kingdom of Saudi Arabia.",
    },
    about: {
      title: "About Aura Secure | Safety & Fire Protection Experts",
      description:
        "Learn about Aura Secure's mission, certifications and longstanding experience in delivering compliant safety and fire protection solutions across multiple sectors.",
      keywords: [
        "Aura Secure",
        "safety company",
        "fire protection",
        "Saudi Civil Defense",
      ],
      ogTitle: "Aura Secure — About Us",
      ogDescription:
        "Reliable safety engineering and certified fire protection services.",
    },
    services: {
      title:
        "Services — Aura Secure | Fire Alarm, Fire Fighting, CCTV, Maintenance",
      description:
        "Explore Aura Secure's services: fire alarm systems, suppression systems, CCTV and access control, maintenance contracts, and safety plans.",
      keywords: [
        "fire alarm systems",
        "CCTV installation",
        "fire suppression",
        "maintenance contracts",
        "safety plans",
      ],
      ogTitle: "Aura Secure Services — Protecting People & Assets",
      ogDescription:
        "Comprehensive solutions from design and supply to installation and maintenance—fully compliant with international and Saudi standards.",
    },
    contact: {
      title: "Contact Aura Secure | Request Inspection & Support",
      description:
        "Contact Aura Secure for technical inspections, quotes, and support for safety systems and security solutions across Saudi Arabia.",
      keywords: [
        "contact Aura Secure",
        "technical inspection",
        "safety consultation",
      ],
      ogTitle: "Contact Aura Secure",
      ogDescription:
        "Reach out for inspections, quotations, and technical support.",
    },
  },
  ar: {
    home: {
      title:
        "أورا سيكيور | حلول الحماية من الحريق والأمن - المملكة العربية السعودية",
      description:
        "أورا سيكيور تقدم حلول معتمدة لأنظمة الحماية من الحرائق، الإنذار، كاميرات المراقبة، وخدمات الصيانة في المملكة. خبراء في الهندسة والسلامة.",
      keywords: [
        "أنظمة إنذار الحريق",
        "شركات الأمن والسلامة السعودية",
        "الهندسة الأمنية",
        "أنظمة إطفاء",
        "كاميرات المراقبة",
      ],
      ogTitle: "أورا سيكيور — حلول أمن وسلامة موثوقة",
      ogDescription: "حلول معتمدة لأنظمة الحماية من الحريق والأمن في المملكة.",
    },
    about: {
      title: "من نحن | أورا سيكيور",
      description:
        "تعرف على رسالة أورا سيكيور واعتمادها وخبرتها في تقديم حلول سلامة وحماية من الحريق متوافقة مع المعايير.",
      keywords: [
        "أورا سيكيور",
        "شركات السلامة",
        "الحماية من الحرائق",
        "الدفاع المدني",
      ],
      ogTitle: "أورا سيكيور — من نحن",
      ogDescription: "هندسة السلامة وحلول معتمدة لحماية المنشآت.",
    },
    services: {
      title: "خدماتنا — أورا سيكيور | إنذار، إطفاء، كاميرات، صيانة",
      description:
        "استكشف خدمات أورا سيكيور: أنظمة إنذار الحريق، أنظمة الإطفاء، كاميرات المراقبة والتحكم، عقود الصيانة، ومخططات السلامة.",
      keywords: [
        "أنظمة إنذار الحريق",
        "كاميرات المراقبة",
        "أنظمة إطفاء",
        "عقود صيانة",
        "مخططات السلامة",
      ],
      ogTitle: "خدمات أورا سيكيور — حماية الأرواح والممتلكات",
      ogDescription:
        "حلول متكاملة من التصميم وحتى التشغيل والصيانة متوافقة مع المعايير المحلية والدولية.",
    },
    contact: {
      title: "تواصل مع أورا سيكيور | طلب معاينة ودعم فني",
      description:
        "تواصل مع أورا سيكيور لطلب معاينة فنية، عروض أسعار، ودعم لأنظمة السلامة والأمن في المملكة.",
      keywords: ["تواصل أورا سيكيور", "طلب معاينة", "دعم فني"],
      ogTitle: "تواصل مع أورا سيكيور",
      ogDescription: "نحن هنا لتقديم المعاينات والعروض والدعم الفني.",
    },
  },
};

// Function to generate metadata for a specific page and locale
export function generatePageMetadata(
  pageKey,
  locale = "ar",
  siteUrl = "https://orasecure.com",
) {
  const pageData = seoData[locale]?.[pageKey] || seoData.en[pageKey];

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url: `${siteUrl}/${locale}`,
      title: pageData.ogTitle || pageData.title,
      description: pageData.ogDescription || pageData.description,
      image: {
        url: `${siteUrl}/og-image-${pageKey}.png`,
        width: 1200,
        height: 630,
        alt: pageData.ogTitle || pageData.title,
      },
      siteName: "Aura Secure",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.ogTitle || pageData.title,
      description: pageData.ogDescription || pageData.description,
      image: `${siteUrl}/og-image-${pageKey}.png`,
      creator: "@orasecure",
    },
  };
}

// Structured data for FAQ schema
export const faqSchema = {
  en: [
    {
      question: "What services do we offer?",
      answer:
        "We offer professional consultation, podcasts, workshops, and personalized guidance for career development.",
    },
    {
      question: "How can I book a consultation?",
      answer:
        "You can book a consultation directly through our consulting page by selecting your preferred time slot.",
    },
  ],
  ar: [
    {
      question: "ما الخدمات التي تقدمونها؟",
      answer:
        "نقدم استشارات مهنية وبودكاست وورش عمل وإرشادات شخصية لتطوير المسار الوظيفي.",
    },
    {
      question: "كيف يمكنني حجز استشارة؟",
      answer:
        "يمكنك حجز استشارة مباشرة من خلال صفحة الاستشارة بالاختيار من أوقات الجلسات المتاحة.",
    },
  ],
};
