import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Allow crawling of all URLs (including /login/ and /register/).
 * Those pages use meta robots noindex — Google must be allowed to crawl
 * them so it can see noindex and drop them from the index.
 * Do NOT Disallow /register/ or /login/ (causes "Indexed, though blocked by robots.txt").
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mahadevbooks.today/sitemap.xml",
  };
}
