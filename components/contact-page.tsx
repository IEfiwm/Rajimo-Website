"use client"

import { useState, type FormEvent } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { RevealText } from "@/components/reveal-text"
import { BentoCard, Tag } from "@/components/bento-card"
import { SiteFooter } from "@/components/site-footer"
import { useLocale } from "@/components/use-locale"
import { arrowBack } from "@/lib/content"

const CONTACT_EMAIL = "contact@rajimo.ir"

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-white text-sm text-[#111] placeholder:text-black/30 outline-none transition-colors focus:border-black/20 focus:bg-[#fafaf8]"

export function ContactPage() {
  const { locale, toggleLocale, t: site } = useLocale()
  const c = site.contact
  const f = c.form

  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [field, setField] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = f.validation.name
    if (!contact.trim()) next.contact = f.validation.contact
    if (!field.trim()) next.field = f.validation.field
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("sending")
    setErrors({})

    const contactValue = contact.trim()
    const body = [
      `Name: ${name.trim()}`,
      `Contact: ${contactValue}`,
      `Business field: ${field.trim()}`,
      message.trim() ? `\nProject details:\n${message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: contactValue,
          _subject: `Rajimo contact — ${name.trim()}`,
          message: body,
        }),
      })

      if (!res.ok) throw new Error("submit failed")
      setStatus("success")
      setName("")
      setContact("")
      setField("")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

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
            {c.backHome}
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <Tag>{c.tag}</Tag>
              <RevealText
                locale={locale}
                className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]"
              >
                {c.title}
              </RevealText>
              <p className="mt-6 text-sm md:text-base text-black/45 leading-relaxed max-w-md">
                {c.description}
              </p>

              <div className="mt-10 space-y-5 text-start">
                <div>
                  <p className="text-xs text-black/35 mb-2 tracking-wide">
                    {c.emailLabel}
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    className="inline-block text-sm text-[#111] hover:text-black/70 transition-colors"
                    dir="ltr"
                  >
                    {c.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-black/35 mb-2 tracking-wide">
                    {c.phoneLabel}
                  </p>
                  <div className="flex flex-col gap-2 items-start">
                    {c.phones.map((num) => (
                      <a
                        key={num}
                        href={`tel:${num}`}
                        className="inline-block text-sm text-[#111] hover:text-black/70 transition-colors"
                        dir="ltr"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <BentoCard className="p-6 md:p-8">
              {status === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-10 h-10 rounded-full bg-black/[0.05] flex items-center justify-center mx-auto mb-5">
                    <span className="text-lg">✓</span>
                  </div>
                  <p className="text-sm text-black/55 leading-relaxed max-w-xs mx-auto">{f.success}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs text-black/40 hover:text-black/70 transition-colors"
                  >
                    {locale === "fa" ? "ارسال پیام جدید" : "Send another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-xs text-black/50 mb-2">
                      {f.name.label}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={f.name.placeholder}
                      className={inputClass}
                      autoComplete="name"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500/80">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-info" className="block text-xs text-black/50 mb-2">
                      {f.contact.label}
                    </label>
                    <input
                      id="contact-info"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={f.contact.placeholder}
                      className={inputClass}
                      autoComplete="email"
                      dir={locale === "fa" ? "rtl" : "ltr"}
                    />
                    {errors.contact && <p className="mt-1.5 text-xs text-red-500/80">{errors.contact}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-field" className="block text-xs text-black/50 mb-2">
                      {f.field.label}
                    </label>
                    <input
                      id="contact-field"
                      type="text"
                      value={field}
                      onChange={(e) => setField(e.target.value)}
                      placeholder={f.field.placeholder}
                      className={inputClass}
                    />
                    {errors.field && <p className="mt-1.5 text-xs text-red-500/80">{errors.field}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs text-black/50 mb-2">
                      {f.message.label}
                      <span className="text-black/25 font-normal ms-1">({f.message.optional})</span>
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={f.message.placeholder}
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-500/80">{f.error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-wide font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? f.sending : f.submit}
                  </button>
                </form>
              )}
            </BentoCard>
          </div>
        </div>
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}
