"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { MdOutlineSecurity, MdMenu, MdClose } from "react-icons/md";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const home = pathname === `/${locale}`;

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
    <nav
      dir={isRtl ? "rtl" : "ltr"}
      className={`sticky top-0 left-0 py-1.25 w-full z-50 transition-all duration-500
        ${scrolled ? " bg-white/50 backdrop-blur-2xl shadow-2xl" : "bg-white"}`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-4 relative w-20 h-16"
          >
            <Image
              src="/logo.png"
              alt="Aura Secure Logo"
              width={120}
              height={20}
              className="max-w-full h-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`relative px-6 py-6.75 text-sm font-semibold transition-all duration-300 focus:outline-none ${
                    active
                      ? "text-white bg-(--main-color)"
                      : "text-(--primary-color)  hover:bg-(--main-color)/5"
                  }`}
                >
                  <span className="relative z-10">{t(link.key)}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="cursor-pointer transition-all flex items-center gap-2 text-(--primary-color) text-sm font-medium"
            >
              <RiGlobalLine className="text-lg" />
              {locale === "ar" ? "English" : "العربية"}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-(--main-color) text-2xl"
          >
            {mobileOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 transition-all duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`relative bg-white border-t border-black/5 shadow-2xl transition-all duration-500 overflow-hidden ${
            mobileOpen ? "h-[90vh]" : "max-h-0"
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
              className="h-12 bg-black/10 text-(--primary-color) font-medium flex items-center justify-center gap-1"
            >
              <RiGlobalLine className="text-lg" />

              {locale === "ar" ? "Switch to English" : "التبديل للعربية"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
