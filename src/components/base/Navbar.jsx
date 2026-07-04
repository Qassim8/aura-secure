"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import Image from "next/image";
import TopBar from "./TopBar";

export default function HeaderNavbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isRtl = locale === "ar";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  const links = [
    { key: "home", href: `/${locale}` },
    { key: "about", href: `/${locale}/about` },
    { key: "services", href: `/${locale}/services` },
    { key: "works", href: `/${locale}/projects` },
    { key: "contact", href: `/${locale}/contact` },
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className="w-full sticky top-0 left-0 z-50">
      <nav
        dir={isRtl ? "rtl" : "ltr"}
        aria-label={isRtl ? "التنقل الرئيسي" : "Main Navigation"}
        className={`w-full py-1.25 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-xl border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-between">
            {/* الشعار برابط أساسي واضح قاصد الصفحة الرئيسية باللغة النشطة */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-4 relative w-20 h-16"
              aria-label={
                isRtl ? "أوراسيكيور الصفحة الرئيسية" : "OraSecure Home Page"
              }
            >
              <Image
                src="/logo.png"
                alt={
                  isRtl
                    ? "شعار شركة أوراسيكيور لأنظمة الأمن والسلامة"
                    : "OraSecure Fire Safety Logo"
                }
                width={120}
                height={40}
                className="max-w-full h-auto object-contain"
                priority // إعطاء أولوية تحميل الشعار لمنع مشاكل LCP في الـ Core Web Vitals
              />
            </Link>

            {/* روابط سطح المكتب الثابتة هندسياً */}
            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-6 py-6.75 text-sm font-semibold transition-all duration-300 focus:outline-hidden ${
                      active
                        ? "text-white bg-(--main-color)"
                        : "text-(--primary-color) hover:bg-(--main-color)/5"
                    }`}
                  >
                    <span className="relative z-10">{t(link.key)}</span>
                  </Link>
                );
              })}
            </div>

            {/* تبديل اللغة لسطح المكتب */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                type="button"
                className="cursor-pointer transition-all flex items-center gap-2 text-(--primary-color) text-sm font-medium focus:outline-hidden"
              >
                <RiGlobalLine className="text-lg" aria-hidden="true" />
                <span>{locale === "ar" ? "English" : "العربية"}</span>
              </button>
            </div>

            {/* زر القائمة للهواتف مع دعم الـ Accessibility والوصول المكافئ للـ DOM */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              aria-expanded={mobileOpen}
              aria-label={isRtl ? "فتح قائمة التنقل" : "Toggle navigation menu"}
              className="md:hidden relative w-8 h-8 flex items-center justify-center text-(--main-color) text-2xl focus:outline-hidden"
            >
              {mobileOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>

        {/* ------------------------------------------- */}
        {/* قائمة المحمول الـ Mobile Responsive Panel      */}
        {/* ------------------------------------------- */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* خلفية معتمة تظهر عند الفتح لإغلاق سلس وتجربة ممتازة */}
          <div
            onClick={() => setMobileOpen(false)}
            className={`fixed inset-0 bg-black/20 backdrop-blur-xs transition-all duration-300 ${
              mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden="true"
          />

          <div
            className={`relative bg-white border-t border-black/5 shadow-2xl transition-all duration-500 overflow-hidden ${
              mobileOpen ? "max-h-[90vh]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col p-4 gap-2">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    tabIndex={mobileOpen ? 0 : -1} // منع التركيز بـ Tab لو القائمة مغلقة
                    aria-current={active ? "page" : undefined}
                    className={`px-5 py-4 transition-all duration-300 flex items-center justify-between ${
                      active
                        ? "bg-(--main-color) text-white"
                        : "text-(--primary-color) hover:bg-black/5"
                    }`}
                  >
                    <span className="font-semibold">{t(link.key)}</span>
                  </Link>
                );
              })}
            </div>

            <div className="p-4 border-t border-black/5 flex flex-col gap-3">
              <button
                onClick={toggleLanguage}
                type="button"
                tabIndex={mobileOpen ? 0 : -1}
                className="h-12 bg-black/10 text-(--primary-color) font-medium flex items-center justify-center gap-1 focus:outline-hidden"
              >
                <RiGlobalLine className="text-lg" aria-hidden="true" />
                <span>
                  {locale === "ar" ? "Switch to English" : "التبديل للعربية"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
