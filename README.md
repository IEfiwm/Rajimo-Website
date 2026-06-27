# RAJIMO Website — راجیمو

وب‌سایت تک‌صفحه‌ای راجیمو که با **Next.js 16** و **Tailwind CSS v4** ساخته شده است. این پروژه به‌صورت **سایت استاتیک (HTML / CSS / JS)** خروجی گرفته می‌شود و با **GitHub Actions** به‌صورت خودکار build شده و از طریق **FTP** روی هاست آپلود می‌شود.

---

## فهرست

- [پیش‌نیازها](#پیشنیازها)
- [اجرای محلی (Development)](#اجرای-محلی-development)
- [گرفتن خروجی استاتیک](#گرفتن-خروجی-استاتیک)
- [CI/CD با GitHub Actions](#cicd-با-github-actions)
- [تنظیم Secrets در گیت‌هاب](#تنظیم-secrets-در-گیتهاب)
- [ساختار پروژه](#ساختار-پروژه)
- [عیب‌یابی](#عیبیابی)

---

## پیش‌نیازها

- [Node.js 20+](https://nodejs.org)
- npm (همراه Node نصب می‌شود)

---

## اجرای محلی (Development)

```bash
npm install
npm run dev
```

سپس به آدرس [http://localhost:3000](http://localhost:3000) بروید.

---

## گرفتن خروجی استاتیک

پروژه با تنظیم `output: "export"` در `next.config.mjs` پیکربندی شده، بنابراین با دستور build، خروجی کامل HTML/CSS/JS در پوشه‌ی `out/` ساخته می‌شود:

```bash
npm run build
```

محتوای پوشه‌ی `out/` همان چیزی است که باید روی هاست قرار بگیرد (می‌توانید همین پوشه را دستی هم روی هاست آپلود کنید).

> نکته: `images.unoptimized: true` و `trailingSlash: true` تنظیم شده‌اند تا خروجی روی هاست‌های ساده‌ی FTP/Apache بدون نیاز به سرور Node کار کند.

---

## CI/CD با GitHub Actions

فایل ورک‌فلو در مسیر [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) قرار دارد و این مراحل را انجام می‌دهد:

1. **Checkout** کد مخزن
2. نصب **Node.js 20**
3. اجرای `npm install`
4. اجرای `npm run build` و ساخت پوشه‌ی `out/`
5. آپلود محتوای `out/` روی هاست از طریق **FTP** با اکشن [`SamKirkland/FTP-Deploy-Action`](https://github.com/SamKirkland/FTP-Deploy-Action)

### چه زمانی اجرا می‌شود؟

- هر **push** روی شاخه‌ی `main` یا `master`
- به‌صورت **دستی** از تب **Actions → Build & Deploy (FTP) → Run workflow**

اکشن FTP فقط فایل‌های تغییرکرده را آپلود می‌کند (sync هوشمند)، پس deployهای بعدی سریع‌تر هستند.

---

## تنظیم Secrets در گیت‌هاب

قبل از اولین deploy باید اطلاعات FTP هاست را در گیت‌هاب ثبت کنید:

**Repository → Settings → Secrets and variables → Actions → New repository secret**

| نام Secret        | توضیح                                                        | مثال                  |
| ----------------- | ------------------------------------------------------------ | --------------------- |
| `FTP_SERVER`      | آدرس سرور FTP هاست                                            | `ftp.rajimo.ir`       |
| `FTP_USERNAME`    | نام کاربری FTP                                                | `user@rajimo.ir`      |
| `FTP_PASSWORD`    | رمز عبور FTP                                                  | `••••••••`            |
| `FTP_SERVER_DIR`  | مسیر مقصد روی هاست (با اسلش انتهایی)                          | `/public_html/`       |

### متغیر اختیاری (Variables)

اگر هاست شما از **FTPS** (FTP امن) پشتیبانی می‌کند، یک Variable به اسم `FTP_PROTOCOL` با مقدار `ftps` بسازید (در تب **Variables** کنار **Secrets**). در غیر این صورت به‌صورت پیش‌فرض از `ftp` استفاده می‌شود.

> ⚠️ هرگز رمز FTP را مستقیم داخل کد یا فایل ورک‌فلو ننویسید؛ همیشه از Secrets استفاده کنید.

---

## ساختار پروژه

```
.
├── app/                  # صفحات و layout (Next.js App Router)
├── components/           # کامپوننت‌های UI
├── lib/                  # محتوا، فونت‌ها و توابع کمکی
├── public/               # فایل‌های استاتیک (آیکون، تصاویر، فونت)
├── next.config.mjs       # تنظیمات Next.js (output: export)
├── .github/workflows/
│   └── deploy.yml        # ورک‌فلو CI/CD برای build و آپلود FTP
└── README.md
```

---

## عیب‌یابی

- **deploy اجرا نشد:** مطمئن شوید روی شاخه‌ی `main` یا `master` push کرده‌اید و هر چهار Secret تعریف شده‌اند.
- **خطای اتصال FTP:** آدرس `FTP_SERVER`، پورت و درست‌بودن نام کاربری/رمز را بررسی کنید. بعضی هاست‌ها فقط FTPS را قبول می‌کنند → `FTP_PROTOCOL=ftps`.
- **فایل‌ها در مسیر اشتباه آپلود شدند:** مقدار `FTP_SERVER_DIR` را اصلاح کنید (معمولاً `/public_html/` یا `/htdocs/`).
- **خطای build:** ابتدا به‌صورت محلی `npm run build` را اجرا کنید تا منشأ خطا مشخص شود.
