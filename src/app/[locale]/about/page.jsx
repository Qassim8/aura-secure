import AboutClient from "./about-client";
import { generatePageMetadata } from "@/lib/seo";

export default function AboutPage({ params }) {
  return <AboutClient />;
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("about", locale, "https://orasecure.com");
}
