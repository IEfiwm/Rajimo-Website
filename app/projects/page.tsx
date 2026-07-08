import { ProjectsPage } from "@/components/projects-page"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, webPageSchema } from "@/lib/seo-schemas"
import { projectsData } from "@/lib/projects-data"
import { createPageMetadata } from "@/lib/seo"

const page = projectsData.fa.page

export const metadata = createPageMetadata({
  title: "پروژه‌های راجیمو",
  description: page.description,
  path: "/projects/",
  keywords: [
    "نمونه کار",
    "پروژه‌های راجیمو",
    "طراحی سایت",
    "توسعه نرم‌افزار",
    "راجیمو",
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
            path: "/projects/",
          }),
          breadcrumbSchema([
            { name: "خانه", path: "/" },
            { name: "پروژه‌های ما", path: "/projects/" },
          ]),
        ]}
      />
      <ProjectsPage />
    </>
  )
}
