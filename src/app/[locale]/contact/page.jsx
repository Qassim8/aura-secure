import ContactClient from "./contact-client";
import { generatePageMetadata } from "@/lib/seo";

export default function ContactPage() {
  return <ContactClient />;
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("contact", locale, "https://orasecure.com");
}
