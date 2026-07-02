import { SITE_URL } from "@/lib/url";
import ServicesClient from "./services-client";
import { generatePageMetadata } from "@/lib/seo";

export default function ServicesPage() {
  return <ServicesClient />;
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("services", locale, SITE_URL);
}
