import { Almarai, Open_Sans, Roboto, Ubuntu } from "next/font/google";
import "./globals.css";
import { routing } from "@/i18n/navigation";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import { notFound } from "next/navigation";

const exo2 = Ubuntu({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#03045e",
};

// Generate metadata function for locale-specific SEO
export async function generateMetadata({ params }) {
  const { locale } = await params;

  const seoData = {
    en: {
      title: "Aura Secure Company | Bridging the Gap to Your Dream Career",
      description:
        "The leading platform for Sudanese youth to transition from education to the professional world. Expert insights on career planning, soft skills, and navigating the job market.",
      keywords: [
        "Sudanese youth career",
        "career guidance Sudan",
        "Start with a question initiative",
        "job market readiness",
        "professional mentorship",
        "career podcast Sudan",
      ],
      siteUrl: "https://startwithaquestion.com", // غير الرابط لرابطك الحقيقي
      ogTitle:
        "Don't Just Look for a Job, Build a Career | Start with a Question",
      ogDescription:
        "Join thousands of graduates discovering their path. Expert-led guidance to help you master the skills companies actually want.",
    },
    ar: {
      title: "ابدأ بسؤال | دليلك العملي من التخرج إلى أول وظيفة",
      description:
        "المنصة الأولى لتمكين الشباب السوداني مهنياً. نقدم لك استشارات واقعية، مهارات ناعمة، وخارطة طريق لاجتياز المقابلات الوظيفية وبناء مسار مهني ناجح.",
      keywords: [
        "مبادرة ابدأ بسؤال",
        "تمكين الشباب السوداني",
        "التطوير المهني للخريجين",
        "كيفية اجتياز المقابلة الشخصية",
        "بناء السيرة الذاتية",
        "رزان الحارث",
      ],
      siteUrl: "https://startwithaquestion.com",
      ogTitle: "ابدأ بسؤال | لا تبحث عن وظيفة فحسب، ابنِ مسارك المهني بذكاء",
      ogDescription:
        "انضم لآلاف الخريجين في رحلة الوعي المهني. تعلم ما لا تعلمه لك الجامعة عن سوق العمل والنجاح الوظيفي.",
    },
  };

  const currentSeo = seoData[locale] || seoData.en;

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    keywords: currentSeo.keywords,
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url: `${currentSeo.siteUrl}/${locale}`,
      title: currentSeo.title,
      description: currentSeo.description,
      siteName: "Start with a Question",
    },
    alternates: {
      canonical: `${currentSeo.siteUrl}/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    icons: {
      icon: "./icon.png",
      shortcut: "./icon.png",
      apple: "./icon.png",
    },
  };
}

// Generate static routes for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  // Fetch translation messages for this locale
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Determine page direction and language
  const direction = locale === "ar" ? "rtl" : "ltr";
  const fontVariables =
    locale === "en" ? `${exo2.variable}` : `${almarai.variable}`;
  return (
    <html
      dir={direction}
      lang={locale}
      data-locale={locale}
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children} <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
