import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localeDetection: false,
  // روابط hreflang تُولَّد في HTML عبر generateMetadata (مصدر واحد بلا تعارض)
  alternateLinks: false,
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
