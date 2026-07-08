import type { Metadata } from "next"
import { SolutionDetail } from "@/components/solution-detail"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo-schemas"
import { SOLUTION_SLUGS } from "@/lib/solutions-data"
import { solutionsData } from "@/lib/solutions-data"
import type { SolutionSlug } from "@/lib/solutions-data"
import { createPageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const solution = solutionsData.fa.pages[slug as SolutionSlug]

  if (!solution) {
    return createPageMetadata({
      title: "راهکار یافت نشد",
      description: "صفحه راهکار مورد نظر یافت نشد.",
      path: `/solutions/${slug}/`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: solution.title,
    description: solution.shortDescription,
    path: `/solutions/${slug}/`,
    keywords: [solution.title, solution.tag, "راجیمو", "راهکار دیجیتال"],
  })
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params
  const solution = solutionsData.fa.pages[slug as SolutionSlug]

  if (!solution) {
    return <SolutionDetail slug={slug} />
  }

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(slug as SolutionSlug),
          webPageSchema({
            title: solution.title,
            description: solution.shortDescription,
            path: `/solutions/${slug}/`,
          }),
          breadcrumbSchema([
            { name: "خانه", path: "/" },
            { name: "راهکارها", path: "/solutions/" },
            { name: solution.title, path: `/solutions/${slug}/` },
          ]),
        ]}
      />
      <SolutionDetail slug={slug} />
    </>
  )
}
