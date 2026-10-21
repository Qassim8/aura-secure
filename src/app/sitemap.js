import { LOCALES, SERVICE_IDS, DEFAULT_LOCALE } from "@/lib/seo";
import { SITE_URL } from "@/lib/url";

// الصفحات القابلة للفهرسة فقط؛ كل نسخة لغوية تُدرج مع روابطها البديلة (hreflang)
const PATHS = [
  "",
  "/about",
  "/services",
  ...SERVICE_IDS.map((id) => `/services/${id}`),
  "/projects",
  "/contact",
];

export default function sitemap() {
  return PATHS.flatMap((path) => {
    const languages = {
      ...Object.fromEntries(
        LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
      ),
      "x-default": `${SITE_URL}/${DEFAULT_LOCALE}${path}`,
    };

    return LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: { languages },
    }));
  });
}
