import { VeloraPage } from "@/components/velora-page"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, webPageSchema } from "@/lib/seo-schemas"
import { createPageMetadata, absoluteUrl } from "@/lib/seo"
import { veloraData, VELORA_LIVE_URL, VELORA_PATH } from "@/lib/velora-data"

const page = veloraData.fa

export const metadata = createPageMetadata({
  title: "ولورا — سیستم مدیریت کسب‌وکار",
  description: page.heroDescription,
  path: VELORA_PATH,
  keywords: [
    "ولورا",
    "Velora",
    "ERP",
    "نرم‌افزار مدیریت کسب‌وکار",
    "نرم‌افزار انبار",
    "فاکتور فروش",
    "راجیمو",
  ],
  ogImage: "/images/projects/velora.png",
})

function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Velora",
    alternateName: "ولورا",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl(VELORA_PATH),
    image: absoluteUrl("/images/projects/velora.png"),
    description: page.heroDescription,
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/contact/"),
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: "Rajimo",
      url: absoluteUrl("/"),
    },
    sameAs: [VELORA_LIVE_URL],
  }
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema(),
          webPageSchema({
            title: page.brand,
            description: page.heroDescription,
            path: VELORA_PATH,
          }),
          breadcrumbSchema([
            { name: "خانه", path: "/" },
            { name: "محصولات", path: "/projects/" },
            { name: "ولورا", path: VELORA_PATH },
          ]),
        ]}
      />
      <VeloraPage />
    </>
  )
}
