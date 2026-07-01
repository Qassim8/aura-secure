export default function sitemap() {
  const baseUrl = "https://www.orasecure.com.sa";

  const pages = [
    "/ar",
    "/ar/about",
    "/ar/services",
    "/ar/projects",
    "/ar/contact",

    "/en",
    "/en/about",
    "/en/services",
    "/en/projects",
    "/en/contact",
  ];

  // عدّل القائمة حسب service ids الحقيقية عندك
  const services = [
    "fire-alarm-systems",
    "fire-fighting-systems",
    "maintenance-contracts",
    "cctv-security-systems",
    "safety-plans-engineering",
  ];

  const servicePages = ["ar", "en"].flatMap((locale) =>
    services.map((service) => ({
      url: `${baseUrl}/${locale}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    })),
  );

  const staticPages = pages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/ar" || route === "/en" ? 1 : 0.8,
  }));

  return [...staticPages, ...servicePages];
}
