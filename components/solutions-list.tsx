"use client"

import { useCallback } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { RevealText } from "@/components/reveal-text"
import { BentoCard, Tag } from "@/components/bento-card"
import { SiteFooter } from "@/components/site-footer"
import { useLocale } from "@/components/use-locale"
import { getAllSolutions, solutionsData } from "@/lib/solutions-data"
import { arrowBack, arrowForward } from "@/lib/content"

export function SolutionsList() {
  const { locale, toggleLocale, t: site } = useLocale()
  const index = solutionsData[locale].index
  const solutions = getAllSolutions(locale)

  const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.querySelectorAll<HTMLElement>(".group").forEach((card) => {
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#111]">
      <MobileNav content={site} locale={locale} onToggleLocale={toggleLocale} />

      <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black/70 transition-colors mb-10 justify-center md:justify-start"
          >
            <span aria-hidden="true">{arrowBack(locale)}</span>
            {index.backHome}
          </a>

          <div className="mb-16 text-center md:text-start">
            <div className="flex justify-center md:justify-start">
              <Tag>{index.tag}</Tag>
            </div>
            <RevealText
              locale={locale}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] whitespace-pre-line"
            >
              {index.title}
            </RevealText>
            <p className="mt-6 text-sm text-black/45 leading-relaxed max-w-2xl mx-auto md:mx-0">{index.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3" onMouseMove={handleMouse}>
            {solutions.map((solution, i) => (
              <a key={solution.slug} href={`/solutions/${solution.slug}/`} className="block">
                <BentoCard className="p-8 min-h-[220px] h-full flex flex-col text-center md:text-start" delay={i * 80}>
                  <span className="text-[11px] text-black/30 mb-4">{solution.tag}</span>
                  <h2 className="text-xl font-light mb-3">{solution.title}</h2>
                  <p className="text-sm text-black/45 leading-relaxed flex-1">{solution.shortDescription}</p>
                  <span className="mt-6 text-xs text-black/40 group-hover:text-black/70 transition-colors">
                    {index.viewSolution} {arrowForward(locale)}
                  </span>
                </BentoCard>
              </a>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}
