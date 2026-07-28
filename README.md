# RAJIMO Website — راجیمو

وب‌سایت رسمی راجیمو، ساخته‌شده با **Next.js 16** و **Tailwind CSS v4** با تمرکز روی:

- تجربه دو‌زبانه فارسی/انگلیسی (RTL/LTR)
- تایپوگرافی و خوانایی فارسی
- لندینگ مدرن با بخش‌های محصول، فرآیند، صنایع و پروژه‌های فعال

نسخه فعلی پروژه: **v0.3.0**

---

## فهرست

- [پیش‌نیازها](#پیشنیازها)
- [اجرای محلی](#اجرای-محلی)
- [Build و خروجی](#build-و-خروجی)
- [SEO](#seo)
- [مدیریت نسخه](#مدیریت-نسخه)
- [CHANGELOG](#changelog)
- [CI/CD با GitHub Actions](#cicd-با-github-actions)
- [تنظیم Secrets در GitHub](#تنظیم-secrets-در-github)
- [ساختار پروژه](#ساختار-پروژه)
- [نکات توسعه](#نکات-توسعه)
- [عیب‌یابی](#عیبیابی)

---

## پیش‌نیازها

- [Node.js 20+](https://nodejs.org)
- npm

---

## اجرای محلی

```bash
npm install
npm run dev
```

اپ را در آدرس [http://localhost:3000](http://localhost:3000) ببینید.

---

## Build و خروجی

```bash
npm run build
```

نکات:

- پیکربندی پروژه برای خروجی استاتیک در `next.config.mjs` انجام شده است.
- خروجی build مناسب دیپلوی روی هاست‌های ساده (FTP/Apache) است.

---

## SEO

پروژه برای سئو فنی آماده شده است:

- متادیتای اختصاصی هر صفحه (`title`, `description`, `canonical`, Open Graph, Twitter)
- `robots.txt` و `sitemap.xml` خودکار
- `manifest.webmanifest` برای PWA پایه
- JSON-LD: `Organization`, `WebSite`, `WebPage`, `Service`, `BreadcrumbList`

### تنظیم دامنه

آدرس سایت از متغیر `NEXT_PUBLIC_SITE_URL` خوانده می‌شود (پیش‌فرض: `https://rajimo.ir`).

محلی:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://rajimo.ir
```

در GitHub Actions (Variables):

| Variable | مقدار |
| --- | --- |
| `SITE_URL` | `https://rajimo.ir` |

### فایل‌های مرتبط

- `lib/seo.ts` — تنظیمات مرکزی SEO
- `lib/seo-schemas.ts` — اسکیماهای JSON-LD
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`

### پیشنهاد بعد از دیپلوی

1. سایت را در [Google Search Console](https://search.google.com/search-console) ثبت کنید
2. `sitemap.xml` را ارسال کنید: `https://rajimo.ir/sitemap.xml`
3. یک تصویر OG اختصاصی ۱۲۰۰×۶۳۰ در `public/og-image.jpg` قرار دهید (اختیاری ولی توصیه‌شده)

---

## مدیریت نسخه

ورژن پروژه از `package.json` خوانده می‌شود و در فوتر لندینگ نمایش داده می‌شود.

- منبع ورژن: `package.json` → `version`
- مصرف در UI: `lib/version.ts`

### قانون تغییر ورژن

- `PATCH` (مثال: `0.2.0` → `0.2.1`): تغییرات کوچک UI، باگ‌فیکس، متن
- `MINOR` (مثال: `0.2.0` → `0.3.0`): بخش جدید یا تغییر قابل‌توجه در UX
- `MAJOR` (مثال: `0.x` → `1.0.0`): تغییرات شکسته‌شونده یا بازطراحی بنیادین

### اسکریپت‌های ورژن

```bash
npm run version:patch   # 0.3.0 → 0.3.1
npm run version:minor   # 0.3.0 → 0.4.0
npm run version:major   # 0.3.0 → 1.0.0
```

بعد از هر تغییر قابل‌انتشار، ورژن را بالا ببرید و در [CHANGELOG](#changelog) ثبت کنید.

### CHANGELOG

#### v0.3.0

- صفحات جداگانه: راهکارها، پروژه‌ها، تماس
- صفحه پروژه‌ها با mockup و اسکرین‌شات واقعی
- فرم تماس با فیلد یکپارچه ایمیل/موبایل
- لوگوی Rajimo در ناوبری، فوتر و favicon
- حذف بخش محصولات از لندینگ و منو
- ذخیره زبان (FA/EN) بین صفحات در localStorage
- بهبود RTL: فلش بازگشت، placeholder فارسی، تراز شماره تماس

#### v0.2.0

- فونت یکان‌بخ فانوم، بهبود RTL و کنتراست فارسی
- بخش پروژه‌های فعال، marquee، نسخه در فوتر

---

## CI/CD با GitHub Actions

فایل ورک‌فلو: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

مراحل:

1. Checkout مخزن
2. نصب Node.js 20
3. `npm install`
4. `npm run build`
5. آماده‌سازی 404 برای Plesk (`error_docs/not_found.html` + `.htaccess`)
6. آپلود خروجی روی هاست با FTP

اجرای ورک‌فلو:

- با push روی `main` یا `master`
- اجرای دستی از تب Actions

### صفحه 404 و خطاها روی Plesk

سایت استاتیک است؛ خودِ Next.js روی هاست اجرا نمی‌شود.

| کد | صفحه | مسیر Plesk `error_docs/` |
| --- | --- | --- |
| 403 | `/error-pages/firewall.html` | `forbidden.html` |
| 404 | `/404.html` (صفحه Next) | `not_found.html` |
| 410 | `/error-pages/link-expired.html` | `gone.html` |
| 429 | `/error-pages/rate-limit.html` | — |
| 500 / 502 / 504 | `/error-pages/origin-502.html` | `internal_server_error.html` / `bad_gateway.html` / `gateway_timeout.html` |
| 503 | `/error-pages/maintenance.html` | `service_unavailable.html` |

صفحات کمکی CDN (مستقیم قابل‌دسترسی):

- `/error-pages/waf.html`
- `/error-pages/captcha.html`
- `/error-pages/js-challenge.html`
- `/error-pages/link-invalid.html`

تنظیمات:

1. `public/.htaccess` → Apache (`ErrorDocument`)
2. `public/web.config` → IIS / Plesk Windows (`httpErrors`)
3. `public/error-pages/routes.json` + `lib/error-pages.ts` → نقشه مرکزی مسیرها
4. ورک‌فلو دیپلوی همان فایل‌ها را داخل `error_docs/` با نام‌های Plesk کپی می‌کند

اگر بعد از دیپلوی هنوز صفحه پیش‌فرض آمد، در پنل:

**Domains → دامنه → Apache & nginx Settings**

- **Custom error documents** را روشن کنید
- برای nginx:

```nginx
error_page 403 /error-pages/firewall.html;
error_page 404 /404.html;
error_page 410 /error-pages/link-expired.html;
error_page 429 /error-pages/rate-limit.html;
error_page 500 /error-pages/origin-502.html;
error_page 502 /error-pages/origin-502.html;
error_page 503 /error-pages/maintenance.html;
error_page 504 /error-pages/origin-502.html;
```

برای IIS مطمئن شوید `web.config` در ریشه سایت (`httpdocs` / `public_html`) آپلود شده است.
---

## تنظیم Secrets در GitHub

مسیر:
`Repository → Settings → Secrets and variables → Actions`

| Secret | توضیح |
| --- | --- |
| `FTP_SERVER` | آدرس FTP |
| `FTP_USERNAME` | نام کاربری FTP |
| `FTP_PASSWORD` | رمز FTP |
| `FTP_SERVER_DIR` | مسیر مقصد روی هاست (مثل `/public_html/`) |

اختیاری:

- Variable به نام `FTP_PROTOCOL` با مقدار `ftps` (در صورت نیاز)

---

## ساختار پروژه

```text
.
├── app/                  # صفحات App Router + استایل‌های global
├── components/           # کامپوننت‌های UI لندینگ
├── lib/                  # content، version، fonts و helperها
├── public/               # تصاویر، فونت‌ها، آیکون‌ها
├── .github/workflows/    # CI/CD
└── README.md
```

---

## نکات توسعه

- همه متن‌ها و داده‌های دو‌زبانه در `lib/content.ts`
- رعایت RTL/LTR در تغییرات UI
- برای فارسی از spacing/contrast مناسب استفاده شود
- هر تغییر قابل‌انتشار باید با `npm run version:patch|minor|major` و به‌روزرسانی CHANGELOG همراه باشد

---

## عیب‌یابی

- اگر UI تغییر نکرد: `Cmd + Shift + R` (hard refresh)
- اگر build خطا داد: اول محلی `npm run build` را اجرا کنید
- اگر deploy خطا داد: Secrets و مسیر `FTP_SERVER_DIR` را بررسی کنید
- اگر روی هاست صفحه 404 پیش‌فرض Plesk می‌آید: بخش [صفحه 404 روی Plesk](#صفحه-404-روی-plesk) را ببینید و وجود فایل‌های `/404.html` و `/error_docs/not_found.html` را چک کنید
