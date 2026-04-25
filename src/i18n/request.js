import { getRequestConfig } from "next-intl/server";
import { routing } from "./navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale)) {
    return {
      locale: routing.defaultLocale,
      messages: (await import(`../messages/${routing.defaultLocale}.json`))
        .default,
    };
  }

  return {
    locale: locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
