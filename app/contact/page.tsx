import { ContactPage } from "@/components/contact-page"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, webPageSchema } from "@/lib/seo-schemas"
import { content } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo"

const page = content.fa.contact

export const metadata = createPageMetadata({
  title: "تماس با راجیمو",
  description: page.description,
  path: "/contact/",
  keywords: [
    "تماس با راجیمو",
    "مشاوره نرم‌افزار",
    "درخواست پروژه",
    "راجیمو",
    "contact rajimo",
  ],
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: page.title,
            description: page.description,
            path: "/contact/",
          }),
          breadcrumbSchema([
            { name: "خانه", path: "/" },
            { name: "تماس با ما", path: "/contact/" },
          ]),
        ]}
      />
      <ContactPage />
    </>
  )
}
