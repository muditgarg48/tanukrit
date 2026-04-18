import { CONTENT } from "@/constants/content";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${CONTENT.seo.siteUrl}/sitemap.xml`,
  }
}