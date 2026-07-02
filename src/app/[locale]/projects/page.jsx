import { SITE_URL } from "@/lib/url";
import ProjectsClient from "./projects-client";
import { generatePageMetadata } from "@/lib/seo";

export default function ProjectsPage() {
  return <ProjectsClient />;
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return generatePageMetadata("projects", locale, SITE_URL);
}
