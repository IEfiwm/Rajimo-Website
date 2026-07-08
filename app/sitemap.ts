import type { MetadataRoute } from "next"
import { SOLUTION_SLUGS } from "@/lib/solutions-data"
import { absoluteUrl, staticRoutes } from "@/lib/seo"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }))

  const solutionEntries = SOLUTION_SLUGS.map((slug) => ({
    url: absoluteUrl(`/solutions/${slug}/`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...solutionEntries]
}
