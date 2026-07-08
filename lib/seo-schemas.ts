import { SOLUTION_SLUGS } from "@/lib/solutions-data"
import { solutionsData } from "@/lib/solutions-data"
import { absoluteUrl, siteConfig } from "@/lib/seo"

type JsonLd = Record<string, unknown>

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.nameEn,
    alternateName: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/logo.png"),
    email: siteConfig.email,
    contactPoint: siteConfig.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer support",
      availableLanguage: ["fa", "en"],
    })),
    sameAs: [],
  }
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.nameEn,
    alternateName: siteConfig.name,
    url: absoluteUrl("/"),
    inLanguage: ["fa-IR", "en-US"],
    publisher: {
      "@type": "Organization",
      name: siteConfig.nameEn,
      logo: absoluteUrl("/images/logo.png"),
    },
  }
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "fa-IR",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.nameEn,
      url: absoluteUrl("/"),
    },
  }
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function serviceSchema(slug: (typeof SOLUTION_SLUGS)[number]): JsonLd {
  const solution = solutionsData.fa.pages[slug]

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.shortDescription,
    url: absoluteUrl(`/solutions/${slug}/`),
    provider: {
      "@type": "Organization",
      name: siteConfig.nameEn,
      url: absoluteUrl("/"),
    },
    areaServed: {
      "@type": "Country",
      name: "Iran",
    },
    serviceType: solution.tag,
  }
}

export function homePageSchemas(): JsonLd[] {
  return [
    organizationSchema(),
    websiteSchema(),
    webPageSchema({
      title: "راجیمو | زیرساخت دیجیتال کسب‌وکار",
      description: siteConfig.description,
      path: "/",
    }),
  ]
}
