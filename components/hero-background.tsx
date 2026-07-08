"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { HERO_VIDEO_URL } from "@/lib/hero-media"

const MEDIA_STYLE = {
  transform: "scale(1.05)",
  transformOrigin: "center center",
} as const

type HeroBackgroundProps = {
  /** ویدیو فقط وقتی نمایش داده می‌شود که intro تمام شده یا reveal شده باشد */
  visible: boolean
}

export function HeroBackground({ visible }: HeroBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const readyRef = useRef(false)
  const [videoReady, setVideoReady] = useState(false)

  const markReady = useCallback(() => {
    if (readyRef.current) return
    readyRef.current = true
    setVideoReady(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || video.dataset.loading === "true") return

    video.dataset.loading = "true"
    video.src = HERO_VIDEO_URL
    video.load()

    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "video"
    link.href = HERO_VIDEO_URL
    document.head.appendChild(link)

    const fallback = window.setTimeout(() => {
      if (!readyRef.current && video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        markReady()
      }
    }, 6000)

    return () => {
      window.clearTimeout(fallback)
      link.remove()
    }
  }, [markReady])

  useEffect(() => {
    if (!visible || !videoReady) return
    videoRef.current?.play().catch(() => {})
  }, [visible, videoReady])

  const showVideo = visible && videoReady

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#f5f4f1]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out"
        style={{
          ...MEDIA_STYLE,
          opacity: showVideo ? 1 : 0,
        }}
        onCanPlayThrough={markReady}
      />
    </div>
  )
}
