import { HomePage } from "@/components/home-page"
import { JsonLd } from "@/components/json-ld"
import { homePageSchemas } from "@/lib/seo-schemas"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "راجیمو | زیرساخت دیجیتال کسب‌وکار — RAJIMO",
  description:
    "راجیمو به کسب‌وکارها کمک می‌کند با استفاده از محصولات دیجیتال، نرم‌افزارهای اختصاصی، اتوماسیون و هوش مصنوعی، سریع‌تر رشد کنند.",
  path: "/",
  keywords: [
    "راجیمو",
    "Rajimo",
    "طراحی سایت",
    "توسعه نرم‌افزار",
    "اتوماسیون",
    "هوش مصنوعی",
    "زیرساخت دیجیتال",
  ],
})

export default function Page() {
  return (
    <>
      <JsonLd data={homePageSchemas()} />
      <HomePage />
    </>
  )
}
