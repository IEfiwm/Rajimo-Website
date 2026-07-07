import { SolutionDetail } from "@/components/solution-detail"
import { SOLUTION_SLUGS } from "@/lib/solutions-data"

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params
  return <SolutionDetail slug={slug} />
}
