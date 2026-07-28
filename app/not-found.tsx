import { NotFoundPage } from "@/components/not-found-page"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "صفحه یافت نشد",
  description: "صفحه‌ای که دنبالش هستید وجود ندارد یا منتقل شده است.",
  path: "/404/",
  noIndex: true,
})

export default function NotFound() {
  return <NotFoundPage />
}
