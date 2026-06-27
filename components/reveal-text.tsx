"use client"

import { useEffect, useRef, useState } from "react"

type RevealTextProps = {
  children: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  stagger?: number
  duration?: number
  delay?: number
  threshold?: number
  locale?: "fa" | "en"
}

export function RevealText({
  children,
  className = "",
  as: Tag = "h2",
  stagger = 80,
  duration = 700,
  delay = 0,
  threshold = 0.2,
  locale = "en",
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  // Persian: animate whole lines to preserve letter joining
  if (locale === "fa") {
    const lines = children.split("\n")

    return (
      // @ts-ignore — dynamic tag
      <Tag ref={ref} className={className} style={{ display: "block" }}>
        {lines.map((line, i) => {
          const lineDelay = delay + i * (stagger * 2)

          return (
            <span
              key={i}
              style={{
                display: "block",
                opacity: visible ? 1 : 0,
                filter: visible ? "blur(0px)" : "blur(12px)",
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: visible
                  ? `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${lineDelay}ms,
                     filter ${duration}ms cubic-bezier(0.16,1,0.3,1) ${lineDelay}ms,
                     transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${lineDelay}ms`
                  : "none",
              }}
            >
              {line}
            </span>
          )
        })}
      </Tag>
    )
  }

  // English: per-word stagger
  const parts = children.split(/(\n)/g)
  const words: { word: string; index: number }[] = []
  let wordIndex = 0
  parts.forEach((part) => {
    if (part === "\n") {
      words.push({ word: "\n", index: wordIndex++ })
    } else {
      part.split(" ").forEach((w, i, arr) => {
        if (w) words.push({ word: i < arr.length - 1 ? w + "\u00A0" : w, index: wordIndex++ })
      })
    }
  })

  return (
    // @ts-ignore — dynamic tag
    <Tag ref={ref} className={className} style={{ display: "block", overflow: "hidden" }}>
      {words.map(({ word, index }) => {
        if (word === "\n") return <br key={`br-${index}`} />

        const wordDelay = delay + index * stagger

        return (
          <span
            key={index}
            style={{
              display: "inline-block",
              opacity: visible ? 1 : 0,
              filter: visible ? "blur(0px)" : "blur(8px)",
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: visible
                ? `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${wordDelay}ms,
                   filter  ${duration}ms cubic-bezier(0.16,1,0.3,1) ${wordDelay}ms,
                   transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${wordDelay}ms`
                : "none",
            }}
          >
            {word}
          </span>
        )
      })}
    </Tag>
  )
}
