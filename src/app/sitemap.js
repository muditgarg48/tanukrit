import { LANDING_CONTENT } from "@/constants/landingContent";
import { CONTENT } from "@/constants/content";

export default function sitemap() {
  const baseUrl = CONTENT.seo.siteUrl;

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  const categoryRoutes = Object.values(LANDING_CONTENT).map((item) => ({
    url: `${baseUrl}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...categoryRoutes];
}