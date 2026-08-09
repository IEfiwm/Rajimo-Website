"use client"

import type { ProjectItem } from "@/lib/projects-data"

type BrowserMockupProps = {
  project: ProjectItem
  visitLabel: string
  openLabel: string
}

export function BrowserMockup({ project, visitLabel, openLabel }: BrowserMockupProps) {
  const href = project.landingPath ?? project.url
  const isExternal = !project.landingPath

  return (
    <div className="rounded-xl border border-black/[0.08] bg-white overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-black/[0.06] bg-[#fafaf8]">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-black/[0.04] border border-black/[0.04]">
          <span className="block text-[11px] text-black/40 truncate text-center" dir="ltr">
            {project.displayUrl}
          </span>
        </div>
      </div>

      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="relative block aspect-[16/10] bg-[#eceae5] overflow-hidden group"
        aria-label={`${openLabel}: ${project.name}`}
      >
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent pointer-events-none" />
        <span className="absolute inset-x-0 bottom-0 flex justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="px-5 py-2.5 rounded-xl bg-[#111] text-white text-xs tracking-wide shadow-lg">
            {visitLabel}
          </span>
        </span>
      </a>
    </div>
  )
}
