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

  const services = [
    "fire-alarm-systems",
    "fire-fighting-systems",
    "maintenance-contracts",
    "cctv-security-systems",
    "safety-plans-engineering",
  ];

  const servicePages = ["ar", "en"].flatMap((locale) =>
    services.map((service) => `/${locale}/services/${service}`),
  );

  return [...pages, ...servicePages].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("/services/") ? "monthly" : "weekly",
    priority: route === "/ar" || route === "/en" ? 1 : 0.9,
  }));
}
