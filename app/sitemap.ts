import type { MetadataRoute } from "next";
import { isPreview, pages, siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return isPreview ? [] : Object.keys(pages).map((path) => ({ url: siteUrl(path) }));
}
