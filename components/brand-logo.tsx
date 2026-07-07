type BrandLogoProps = {
  className?: string
  showText?: boolean
  textClassName?: string
  imageClassName?: string
}

export function BrandLogo({
  className = "",
  showText = true,
  textClassName = "brand-mark font-pixel text-xs tracking-[0.25em] text-black/70",
  imageClassName = "h-7 w-auto rounded-md",
}: BrandLogoProps) {
  return (
    <a href="/" className={`inline-flex items-center gap-2.5 hover:opacity-80 transition-opacity ${className}`}>
      <img
        src="/images/logo.png"
        alt="Rajimo"
        className={imageClassName}
        width={173}
        height={173}
      />
      {showText && <span className={textClassName}>RAJIMO</span>}
    </a>
  )
}
