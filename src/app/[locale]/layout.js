import { Almarai, Open_Sans, Roboto, Ubuntu } from "next/font/google";
import "./globals.css";
import { routing } from "@/i18n/navigation";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import TopBar from "@/components/base/TopBar";
import FloatingActions from "@/components/base/FloatingActions";
import StructuredData from "@/components/SEO/StructuredData";
import { generatePageMetadata } from "@/lib/seo";
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

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("home", locale, "https://orasecure.com");
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

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
          <StructuredData locale={locale} />
          <TopBar />
          <Navbar />
          <FloatingActions />
          {children} <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
