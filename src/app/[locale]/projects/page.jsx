import ProjectsClient from "./projects-client";
import { generatePageMetadata } from "@/lib/seo";

export default function ProjectsPage() {
  return <ProjectsClient />;
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  return generatePageMetadata("projects", locale, "https://orasecure.com");
}
