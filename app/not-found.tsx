import Link from "next/link"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "صفحه یافت نشد",
  description: "صفحه مورد نظر یافت نشد.",
  path: "/404/",
  noIndex: true,
})

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#111] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-sm text-black/40 tracking-widest mb-4">۴۰۴</p>
        <h1 className="text-3xl font-light mb-4">صفحه یافت نشد</h1>
        <p className="text-sm text-black/45 leading-relaxed mb-8">
          آدرسی که وارد کرده‌اید وجود ندارد یا منتقل شده است.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  )
}
