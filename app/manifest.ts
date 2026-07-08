import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.nameEn}`,
    short_name: siteConfig.nameEn,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F5F4F0",
    theme_color: "#111111",
    lang: "fa",
    dir: "rtl",
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
