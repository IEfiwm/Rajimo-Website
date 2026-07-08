"use client"

import { useEffect, useMemo, useState } from "react"
import { markIntroSeen } from "@/lib/intro-prefs"

const LETTERS = ["R", "A", "J", "I", "M", "O"]

function getIntroTiming(compact: boolean) {
  const letterInStagger = compact ? 55 : 90
  const letterInDur = compact ? 450 : 700
  const holdDuration = compact ? 120 : 300
  const lettersInTotal =
    letterInStagger * (LETTERS.length - 1) + letterInDur + holdDuration

  const letterOutStagger = compact ? 35 : 55
  const letterOutDur = compact ? 300 : 450
  const lettersOutTotal = letterOutStagger * (LETTERS.length - 1) + letterOutDur

  const curtainDelay = lettersInTotal + (compact ? 60 : 100)
  const curtainDuration = compact ? 850 : 1300
  const animTotal = curtainDelay + lettersOutTotal + (compact ? 500 : 1400)

  return {
    letterInStagger,
    letterInDur,
    lettersInTotal,
    letterOutStagger,
    letterOutDur,
    curtainDelay,
    curtainDuration,
    animTotal,
    heroRevealMs: curtainDelay + curtainDuration - 150,
  }
}

export const INTRO_DURATION_MS = getIntroTiming(false).curtainDelay + getIntroTiming(false).curtainDuration
export const HERO_REVEAL_MS = getIntroTiming(false).heroRevealMs

type Phase = "idle" | "in" | "out" | "done"

type IntroAnimationProps = {
  onDone: () => void
  onReveal?: () => void
  skip?: boolean
}

export function IntroAnimation({ onDone, onReveal, skip = false }: IntroAnimationProps) {
  const [phase, setPhase] = useState<Phase>(skip ? "done" : "idle")
  const [curtainUp, setCurtainUp] = useState(false)
  const [compact, setCompact] = useState(false)

  const timing = useMemo(() => getIntroTiming(compact), [compact])

  useEffect(() => {
    setCompact(window.matchMedia("(max-width: 768px)").matches)
  }, [])

  useEffect(() => {
    if (skip) {
      onDone()
      return
    }

    const t0 = setTimeout(() => setPhase("in"), 50)
    const t1 = setTimeout(() => setPhase("out"), timing.lettersInTotal)
    const t2 = setTimeout(() => setCurtainUp(true), timing.curtainDelay)
    const tReveal = setTimeout(() => onReveal?.(), timing.heroRevealMs)
    const t4 = setTimeout(() => {
      setPhase("done")
      markIntroSeen()
      onDone()
    }, timing.animTotal)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(tReveal)
      clearTimeout(t4)
    }
  }, [onDone, onReveal, skip, timing])

  if (phase === "done") return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none bg-[#f5f4f1]" aria-hidden="true">
      <div
        className="absolute inset-x-0 top-0"
        style={{
          bottom: curtainUp ? "100%" : "0%",
          transition: curtainUp
            ? `bottom ${timing.curtainDuration}ms cubic-bezier(0.76, 0, 0.24, 1)`
            : "none",
          background: "#f5f4f1",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center" dir="ltr">
        <div className="flex" style={{ gap: "0.06em", direction: "ltr" }}>
          {LETTERS.map((letter, i) => {
            const inDelay = i * timing.letterInStagger
            const outDelay = i * timing.letterOutStagger

            const isIdle = phase === "idle"
            const isIn = phase === "in"
            const isOut = phase === "out"

            const opacity = isIdle ? 0 : isIn ? 1 : 0
            const blur = isIdle ? 36 : isIn ? 0 : 24
            const translateY = isIdle ? 48 : isIn ? 0 : -20

            const transition = isOut
              ? `opacity ${timing.letterOutDur}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms,
                 filter ${timing.letterOutDur}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms,
                 transform ${timing.letterOutDur}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms`
              : isIn
                ? `opacity ${timing.letterInDur}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
                   filter ${timing.letterInDur}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
                   transform ${timing.letterInDur}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms`
                : "none"

            return (
              <span
                key={i}
                className="font-sans font-bold text-[#111] leading-none select-none"
                style={{
                  fontSize: `calc((100vw - 64px) / ${LETTERS.length})`,
                  letterSpacing: "0.05em",
                  opacity,
                  filter: `blur(${blur}px)`,
                  transform: `translateY(${translateY}px)`,
                  transition,
                  willChange: "opacity, filter, transform",
                }}
              >
                {letter}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
