import type { MetadataRoute } from "next";
import { business } from "./business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.businessName,
    short_name: business.businessName,
    lang: business.language,
    start_url: "/",
    display: "browser",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
