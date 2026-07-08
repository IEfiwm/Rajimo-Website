"use client"

import { useCallback } from "react"
import { notFound } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import { RevealText } from "@/components/reveal-text"
import { BentoCard, Tag } from "@/components/bento-card"
import { SiteFooter } from "@/components/site-footer"
import { useLocale } from "@/components/use-locale"
import { getSolution, solutionsData } from "@/lib/solutions-data"
import { arrowBack } from "@/lib/content"

type SolutionDetailProps = {
  slug: string
}

export function SolutionDetail({ slug }: SolutionDetailProps) {
  const { locale, toggleLocale, t: site } = useLocale()
  const index = solutionsData[locale].index
  const solution = getSolution(slug, locale)

  const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.querySelectorAll<HTMLElement>(".group").forEach((card) => {
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    })
  }, [])

  if (!solution) notFound()

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#111]">
      <MobileNav content={site} locale={locale} onToggleLocale={toggleLocale} />

      <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <a
            href="/solutions/"
            className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black/70 transition-colors mb-10"
          >
            <span aria-hidden="true">{arrowBack(locale)}</span>
            {index.backToSolutions}
          </a>

          <div className="mb-16">
            <Tag>{solution.tag}</Tag>
            <RevealText
              locale={locale}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] whitespace-pre-line"
            >
              {solution.heroTitle}
            </RevealText>
            <p className="mt-6 text-sm md:text-base text-black/45 leading-relaxed max-w-2xl">
              {solution.heroDescription}
            </p>
          </div>

          <div className="mb-20 space-y-5 max-w-3xl">
            {solution.overview.map((paragraph) => (
              <p key={paragraph} className="text-sm md:text-base text-black/45 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-8">
              {locale === "fa" ? "چه ارائه می‌دهیم" : "What we deliver"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3" onMouseMove={handleMouse}>
              {solution.features.map((feature, i) => (
                <BentoCard key={feature.title} className="p-8 min-h-[180px]" delay={i * 60}>
                  <h3 className="text-lg font-light mb-3">{feature.title}</h3>
                  <p className="text-sm text-black/45 leading-relaxed">{feature.description}</p>
                </BentoCard>
              ))}
            </div>
          </div>

          <BentoCard className="p-8 md:p-10 mb-20" delay={200}>
            <h2 className="text-xl font-light mb-6">
              {locale === "fa" ? "کاربردها" : "Use cases"}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.useCases.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-black/50">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-black/25 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </BentoCard>

          <section className="relative py-20 px-6 md:px-10 rounded-2xl border border-black/[0.07] bg-white overflow-hidden text-center">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <img
                src="/images/arc.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center 70%",
                  transform: locale === "fa" ? "scaleX(-1)" : "none",
                  filter: "blur(3px)",
                }}
              />
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.97))" }}
            />
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[1.1] mb-5 whitespace-pre-line">
                {solution.cta.title}
              </h2>
              <p className="text-sm text-black/45 leading-relaxed mb-8">{solution.cta.description}</p>
              <a
                href="/contact/"
                className="inline-block px-8 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-widest font-medium"
              >
                {solution.cta.button}
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}
