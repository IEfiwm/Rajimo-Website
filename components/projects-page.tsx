"use client"

import { useCallback } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { RevealText } from "@/components/reveal-text"
import { BentoCard, Tag } from "@/components/bento-card"
import { BrowserMockup } from "@/components/browser-mockup"
import { SiteFooter } from "@/components/site-footer"
import { useLocale } from "@/components/use-locale"
import { getProjects } from "@/lib/projects-data"
import { arrowBack } from "@/lib/content"

export function ProjectsPage() {
  const { locale, toggleLocale, t: site } = useLocale()
  const { page, items } = getProjects(locale)

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
            className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black/70 transition-colors mb-10"
          >
            <span aria-hidden="true">{arrowBack(locale)}</span>
            {page.backHome}
          </a>

          <div className="mb-16">
            <Tag>{page.tag}</Tag>
            <RevealText
              locale={locale}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
            >
              {page.title}
            </RevealText>
            <p className="mt-6 text-sm text-black/45 leading-relaxed max-w-2xl">{page.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" onMouseMove={handleMouse}>
            {items.map((project, i) => (
              <BentoCard key={project.id} className="p-5 md:p-6" delay={i * 80}>
                <BrowserMockup
                  project={project}
                  visitLabel={page.visitSite}
                  openLabel={page.openInNewTab}
                />
                <div className="mt-5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 text-center sm:text-start">
                  <div>
                    <h2 className="text-lg font-light">{project.name}</h2>
                    <p className="text-sm text-black/45 mt-1 leading-relaxed">{project.description}</p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-[11px] text-black/35 hover:text-black/70 transition-colors tracking-wide pt-1"
                    dir="ltr"
                  >
                    {project.displayUrl} ↗
                  </a>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}
