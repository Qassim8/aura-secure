import { SITE_URL } from "@/lib/url";
import AboutClient from "./about-client";
import { generatePageMetadata } from "@/lib/seo";

export default function AboutPage({ params }) {
  return <AboutClient />;
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("about", locale, SITE_URL);
}
