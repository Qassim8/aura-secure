import AboutClient from "./about-client";
import { generatePageMetadata } from "@/lib/seo";

export default function AboutPage({ params }) {
  return <AboutClient />;
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  return generatePageMetadata("about", locale, "https://orasecure.com");
}
