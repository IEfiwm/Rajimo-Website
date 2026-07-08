import { SolutionsList } from "@/components/solutions-list"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, webPageSchema } from "@/lib/seo-schemas"
import { solutionsData } from "@/lib/solutions-data"
import { createPageMetadata } from "@/lib/seo"

const page = solutionsData.fa.index

export const metadata = createPageMetadata({
  title: "راهکارهای دیجیتال راجیمو",
  description: page.description,
  path: "/solutions/",
  keywords: [
    "راهکارهای دیجیتال",
    "توسعه نرم‌افزار",
    "اتوماسیون",
    "طراحی محصول",
    "هوش مصنوعی",
    "راجیمو",
  ],
})

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: page.title.replace("\n", " "),
            description: page.description,
            path: "/solutions/",
          }),
          breadcrumbSchema([
            { name: "خانه", path: "/" },
            { name: "راهکارها", path: "/solutions/" },
          ]),
        ]}
      />
      <SolutionsList />
    </>
  )
}
