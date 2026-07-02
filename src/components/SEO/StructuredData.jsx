import { SITE_URL } from "@/lib/url";
import React from "react";

// نصوص الخدمات التفصيلية المحسنة للسيو التي أرسلتها
const SERVICES_DATA = {
  ar: {
    "fire-alarm-systems": {
      name: "أنظمة إنذار الحريق (Fire Alarm Systems)",
      description:
        "توفر أوراسيكيور حلولاً متكاملة لأنظمة إنذار الحريق المصممة لاكتشاف الحرائق في مراحلها المبكرة وتقليل المخاطر على الأرواح والممتلكات. نعتمد على أحدث التقنيات وأجهزة الكشف الذكية لضمان الاستجابة السريعة والتنبيه الفوري عند حدوث أي خطر. تشمل خدماتنا دراسة الموقع، التصميم الهندسي، التوريد، التركيب، الاختبار، والتشغيل وفق متمتطلبات الدفاع المدني السعودي والمعايير العالمية المعتمدة. يتم تنفيذ المشاريع بواسطة فريق متخصص لضمان أعلى مستويات الجودة والسلامة.",
    },
    "fire-fighting-systems": {
      name: "أنظمة مكافحة وإطفاء الحريق (Fire Fighting Systems)",
      description:
        "تقدم أوراسيكيور حلولاً متكاملة لأنظمة مكافحة وإطفاء الحريق لحماية المنشآت التجارية والصناعية والسكنية. تشمل خدماتنا أنظمة الرش الآلي، أنظمة الإطفاء بالغاز، أنظمة FM200، أنظمة الرغوة، وشبكات الإطفاء المختلفة. يتم تصميم جميع الأنظمة بما يتوافق مع المعايير الهندسية ومتطلبات الدفاع المدني لضمان أعلى مستوى من الحماية والاستجابة الفعالة للطوارئ.",
    },
    "maintenance-contracts": {
      name: "عقود الصيانة (Maintenance Contracts)",
      description:
        "توفر أوراسيكيور عقود صيانة دورية وشاملة لأنظمة الأمن والسلامة لضمان استمرار عمل الأنظمة بكفاءة عالية وتقليل احتمالات الأعطال. تشمل خدمات الصيانة الفحص الدوري، الاختبارات الوقائية، الإصلاحات, التقارير الفنية، والاستجابة السريعة للحالات الطارئة. تساعد عقود الصيانة على الحفاظ على جاهزية الأنظمة وتحقيق الامتثال للمتطلبات التنظيمية ومعايير السلامة.",
    },
    "cctv-security-systems": {
      name: "أنظمة كاميرات المراقبة والأمن (CCTV Security Systems)",
      description:
        "تقدم أوراسيكيور حلول كاميرات مراقبة متطورة وأنظمة أمنية متكاملة للمؤسسات والمنشآت بمختلف أنواعها. تشمل الخدمات تصميم الشبكات الأمنية، تركيب الكاميرات الداخلية والخارجية، أنظمة التسجيل والمراقبة الذكية، وتقنيات المتابعة عن بعد. تساعد هذه الحلول على تعزيز الأمن، مراقبة الأنشطة، وحماية الأفراد والممتلكات باستخدام أحدث التقنيات.",
    },
    "safety-plans-engineering": {
      name: "المخططات والحلول الهندسية للسلامة (Safety Plans & Engineering Solutions)",
      description:
        "توفر أوراسيكيور خدمات إعداد المخططات والحلول الهندسية الخاصة بأنظمة الأمن والسلامة وفق المتطلبات الفنية والتنظيمية المعتمدة. تشمل الخدمات إعداد مخططات السلامة، الدراسات الهندسية، مراجعة الأنظمة، وتقديم الحلول المناسبة للمنشآت المختلفة. يتم تطوير الحلول بما يضمن رفع كفاءة أنظمة الحماية وتحقيق أعلى مستويات السلامة التشغيلية.",
    },
  },
  en: {
    "fire-alarm-systems": {
      name: "Fire Alarm Systems",
      description:
        "Ora Secure provides integrated fire alarm system solutions designed to detect fire risks at an early stage and protect lives and property. We use advanced technologies and intelligent detection devices to ensure fast response and immediate alerts in emergency situations. Our services include site assessment, engineering design, supply, installation, testing, and commissioning in compliance with Saudi Civil Defense requirements and international standards.",
    },
    "fire-fighting-systems": {
      name: "Fire Fighting Systems",
      description:
        "Ora Secure delivers complete fire fighting and suppression system solutions for residential, commercial, and industrial facilities. Our services include sprinkler systems, gas suppression systems, FM200 solutions, foam systems, and integrated fire networks. All systems are designed according to engineering standards and safety regulations to provide effective protection and emergency response.",
    },
    "maintenance-contracts": {
      name: "Maintenance Contracts",
      description:
        "Ora Secure offers comprehensive maintenance contracts for safety and security systems to ensure continuous performance and operational efficiency. Our maintenance services include periodic inspections, preventive testing, repairs, technical reporting, and rapid emergency support. Maintenance contracts help reduce failures and ensure compliance with safety requirements.",
    },
    "cctv-security-systems": {
      name: "CCTV Security Systems",
      description:
        "Ora Secure provides advanced CCTV surveillance and integrated security solutions for facilities of all sizes. Our services include security network design, indoor and outdoor camera installation, smart monitoring systems, recording solutions, and remote monitoring technologies. These solutions help improve security, monitor activities, and protect people and assets.",
    },
    "safety-plans-engineering": {
      name: "Safety Plans & Engineering Solutions",
      description:
        "Ora Secure provides engineering safety planning and integrated safety solutions based on technical standards and regulatory requirements. Our services include safety plan preparation, engineering studies, system evaluation, and customized solutions for different facilities. We ensure reliable protection strategies and enhanced operational safety.",
    },
  },
};

export default function StructuredData({
  type = "all",
  breadcrumb = [],
  serviceSlug = null,
  locale = "ar",
}) {
  const siteUrl = SITE_URL;

  // 1. LOCAL BUSINESS & ORGANIZATION SCHEMA
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name:
      locale === "ar"
        ? "أوراسيكيور لأنظمة الامان والسلامة"
        : "Ora Secure for Security and Safety Systems",
    alternateName: ["ORA Secure", "أوراسيكيور"],
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    image: `${siteUrl}/og-image-home.png`,
    description:
      locale === "ar"
        ? "أوراسيكيور: شركة معتمدة من الدفاع المدني السعودي لتصميم وتوريد وتركيب وصيانة أنظمة الأمن والسلامة، إنذار وإطفاء الحريق، وكاميرات المراقبة بأعلى معايير الجودة."
        : "Ora Secure: A Saudi Civil Defense certified company specializing in the design, supply, installation, and maintenance of fire alarm, firefighting, and CCTV security systems.",
    telephone: "+966570114100",
    email: "info@orasecure.com.sa",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: locale === "ar" ? "الرياض" : "Riyadh",
      addressLocality: locale === "ar" ? "الرياض" : "Riyadh",
    },
    areaServed: {
      "@type": "Country",
      name: locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia",
    },
    availableLanguage: ["Arabic", "English"],
    openingHours: "Su-Th 08:00-18:00",
    sameAs: [
      "https://www.linkedin.com/company/orasecure",
      "https://twitter.com/orasecure",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966570114100",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["Arabic", "English"],
      },
    ],
  };

  // 2. WEBSITE SCHEMA
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Ora Secure",
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  // 3. BREADCRUMB SCHEMA (يقبل مصفوفة الصفحة الحالية فقط لمنع الحشو)
  const breadcrumbSchema =
    breadcrumb && breadcrumb.length > 0
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

  // 4. DYNAMIC SERVICE SCHEMA (تعتمد على الخدمة النشطة حالياً)
  const currentService =
    serviceSlug && SERVICES_DATA?.[locale]?.[serviceSlug]
      ? SERVICES_DATA[locale][serviceSlug]
      : null;

  const serviceSchema = currentService
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: currentService.name,
        name: currentService.name,
        description: currentService.description,
        areaServed: {
          "@type": "Country",
          name: locale === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia",
        },
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        brand: {
          "@type": "Brand",
          name: "Ora Secure",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteUrl}/${locale}/services/${serviceSlug}`,
        },
      }
    : null;

  // 5. FAQ SCHEMA
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      locale === "ar"
        ? [
            {
              "@type": "Question",
              name: "ما الخدمات التي تقدمها شركة أوراسيكيور؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "تقدم أوراسيكيور خدمات أنظمة إنذار الحريق، أنظمة الإطفاء، كاميرات المراقبة، التحكم بالدخول، وعقود الصيانة المعتمدة من الدفاع المدني في المملكة العربية السعودية.",
              },
            },
            {
              "@type": "Question",
              name: "هل أنظمة أوراسيكيور متوافقة مع اشتراطات الدفاع المدني السعودي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم، جميع الأنظمة والحلول الهندسية التي نقدمها يتم تنفيذها واعتمادها وفق اشتراطات الدفاع المدني السعودي والمعايير العالمية (NFPA).",
              },
            },
          ]
        : [
            {
              "@type": "Question",
              name: "What services does Ora Secure provide?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ora Secure provides fire alarm systems, fire suppression systems, CCTV surveillance, access control systems, and engineering maintenance contracts across Saudi Arabia.",
              },
            },
            {
              "@type": "Question",
              name: "Are Ora Secure systems compliant with Saudi Civil Defense regulations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all our systems and engineering solutions comply strictly with Saudi Civil Defense requirements and NFPA international standards.",
              },
            },
          ],
  };

  const scripts = [];

  if (type === "all" || type === "organization")
    scripts.push(organizationSchema);
  if (type === "all" || type === "website") scripts.push(websiteSchema);
  if (breadcrumbSchema) scripts.push(breadcrumbSchema);
  if (serviceSchema) scripts.push(serviceSchema);
  if (type === "all" || type === "service") scripts.push(faqSchema);

  return (
    <>
      {/* فلترة المصفوفة تضمن عدم رندرة القيم الفارغة إطلاقاً */}
      {scripts.filter(Boolean).map((schema, idx) => (
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
