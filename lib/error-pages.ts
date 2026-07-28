/**
 * Host / CDN error-page map (static export).
 * Server wiring: public/.htaccess (Apache) + public/web.config (IIS)
 * Source of truth for paths: public/error-pages/routes.json
 */
export const hostErrorPages = {
  403: "/error-pages/firewall.html",
  404: "/404.html",
  410: "/error-pages/link-expired.html",
  429: "/error-pages/rate-limit.html",
  500: "/error-pages/origin-502.html",
  502: "/error-pages/origin-502.html",
  503: "/error-pages/maintenance.html",
  504: "/error-pages/origin-502.html",
} as const

export type HostErrorStatus = keyof typeof hostErrorPages

export const cdnErrorPages = {
  waf: "/error-pages/waf.html",
  captcha: "/error-pages/captcha.html",
  jsChallenge: "/error-pages/js-challenge.html",
  linkInvalid: "/error-pages/link-invalid.html",
} as const

export function getHostErrorPage(status: number): string | undefined {
  return hostErrorPages[status as HostErrorStatus]
}
