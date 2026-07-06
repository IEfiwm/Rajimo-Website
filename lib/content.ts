export type Locale = "fa" | "en"

export const content = {
  fa: {
    dir: "rtl" as const,
    lang: "fa",
    brand: "RAJIMO",
    nav: [
      { label: "راهکارها", href: "#platform" },
      { label: "محصولات", href: "#agents" },
      { label: "فرآیند", href: "#workflow" },
      { label: "صنایع", href: "#integrations" },
      { label: "تماس", href: "#contact" },
    ],
    navCta: "شروع همکاری",
    hero: {
      title: "از ایده تا رشد،\nزیرساخت دیجیتال\nکسب‌وکار شما را می‌سازیم.",
      description:
        "راجیمو به کسب‌وکارها کمک می‌کند با استفاده از محصولات دیجیتال، نرم‌افزارهای اختصاصی، اتوماسیون و هوش مصنوعی، سریع‌تر رشد کنند.",
      cta1: "شروع همکاری",
      cta2: "مشاهده راهکارها",
      stats: [
        { value: "۵+", label: "راهکار" },
        { value: "۴", label: "محصول" },
        { value: "۶+", label: "صنعت" },
      ],
    },
    solutions: {
      tag: "راهکارهای ما",
      title: "فناوری در خدمت\nرشد کسب‌وکار",
      description:
        "هر کسب‌وکاری با چالش‌های متفاوتی روبه‌رو است. ما با طراحی و توسعه راهکارهای دیجیتال متناسب با نیاز هر کسب‌وکار، به بهبود عملکرد و افزایش بهره‌وری کمک می‌کنیم.",
      featured: {
        title: "توسعه نرم‌افزارهای اختصاصی",
        description:
          "طراحی و توسعه وب‌سایت‌ها، اپلیکیشن‌ها، پلتفرم‌های SaaS و سیستم‌های اختصاصی متناسب با نیاز کسب‌وکار شما.",
      },
      items: [
        {
          title: "اتوماسیون و هوشمندسازی",
          description: "کاهش فعالیت‌های تکراری و بهبود فرآیندهای داخلی با ابزارهای هوشمند.",
        },
        {
          title: "طراحی محصول دیجیتال",
          description: "طراحی تجربه‌های کاربری کاربردی و مقیاس‌پذیر برای کاربران و کسب‌وکار.",
        },
        {
          title: "راهکارهای هوش مصنوعی",
          description: "تحلیل، تصمیم‌سازی، خودکارسازی فرآیندها و افزایش بهره‌وری.",
        },
      ],
    },
    products: {
      tag: "محصولات",
      title: "محصولاتی که برای\nصنایع مختلف توسعه داده‌ایم",
      side: "پلتفرم‌های آماده و اختصاصی که در صنایع مختلف پیاده‌سازی شده‌اند.",
      items: [
        {
          label: "عمده‌فروشی",
          title: "سیستم مدیریت عمده‌فروشی",
          desc: "مدیریت موجودی، حسابداری، فروش، گزارش‌گیری و عملیات روزمره در یک پلتفرم یکپارچه.",
          stats: [
            { v: "یکپارچه", l: "عملیات" },
            { v: "لحظه‌ای", l: "گزارش" },
          ],
        },
        {
          label: "هتل",
          title: "پلتفرم مدیریت هتل",
          desc: "مدیریت مهمانان، خدمات، انبارداری، حسابداری و عملیات هتل در یک سیستم متمرکز.",
          stats: [
            { v: "متمرکز", l: "مدیریت" },
            { v: "۲۴/۷", l: "دسترسی" },
          ],
        },
        {
          label: "معاملات",
          title: "پلتفرم معاملاتی",
          desc: "زیرساختی برای مدیریت معاملات رمزارزها و فلزات گران‌بها با تمرکز بر امنیت و مقیاس‌پذیری.",
          stats: [
            { v: "امن", l: "زیرساخت" },
            { v: "مقیاس‌پذیر", l: "معماری" },
          ],
        },
        {
          label: "رستوران",
          title: "راهکار رشد کافه و رستوران",
          desc: "تحلیل بازار، بررسی رقبا و ارائه راهکارهای عملیاتی برای افزایش فروش و بهبود عملکرد.",
          stats: [
            { v: "تحلیل", l: "بازار" },
            { v: "رشد", l: "فروش" },
          ],
        },
      ],
    },
    about: {
      tag: "درباره ما",
      title: "از تجربه تا ساختن",
      paragraphs: [
        "راجیمو از تجربه ما در طراحی محصول، توسعه نرم‌افزار و حل مسائل واقعی کسب‌وکار شکل گرفت.",
        "ما این مسیر را با یک هدف مشترک شروع کردیم: ساخت فناوری‌هایی که فقط کار نکنند، بلکه به رشد کسب‌وکارها کمک کنند.",
        "امروز در راجیمو روی محصول، سیستم‌های سازمانی، هوش مصنوعی و اتوماسیون تمرکز داریم تا برای مشتریان ارزش واقعی و پایدار ایجاد کنیم.",
      ],
      founders: [
        { name: "Amir Jalilvand", role: "Co-Founder", image: "/images/founder-amir.png" },
        { name: "Erfan Shayegh", role: "Founder", image: "/images/founder-erfan.png" },
      ],
    },
    process: {
      tag: "فرآیند همکاری",
      title: "رویکرد ما برای\nساخت محصولات موفق",
      items: [
        { n: "۰۱", title: "شناخت", desc: "بررسی اهداف، چالش‌ها و فرصت‌های کسب‌وکار." },
        { n: "۰۲", title: "طراحی", desc: "طراحی راهکار، معماری محصول و تجربه کاربری." },
        { n: "۰۳", title: "توسعه", desc: "پیاده‌سازی با فناوری‌های مناسب و زیرساخت‌های مقیاس‌پذیر." },
        { n: "۰۴", title: "رشد", desc: "پشتیبانی، بهینه‌سازی و توسعه مستمر پس از انتشار." },
      ],
    },
    industries: {
      tag: "صنایع هدف",
      title: "تجربه همکاری\nبرای صنایع مختلف",
      description: "راهکارهای دیجیتال متناسب با نیاز هر صنعت، از هتل تا فین‌تک.",
      card1: {
        title: "زیرساخت اختصاصی",
        description: "سیستم‌های سفارشی متناسب با فرآیندهای واقعی کسب‌وکار شما.",
      },
      card2: {
        title: "مقیاس‌پذیری",
        description: "معماری آماده برای رشد آینده و افزایش حجم عملیات.",
      },
      items: [
        "هتل و مهمانداری",
        "عمده‌فروشی و خرده‌فروشی",
        "خدمات مالی",
        "کافه و رستوران",
        "استارتاپ‌ها",
        "تحول دیجیتال",
      ],
    },
    whyUs: {
      tag: "چرا راجیمو",
      title: "ما فقط نرم‌افزار\nنمی‌سازیم.",
      description:
        "ما به کسب‌وکارها کمک می‌کنیم تصمیم‌های بهتری بگیرند، فرآیندهای بهتری داشته باشند و سریع‌تر رشد کنند.",
      items: [
        { label: "نگاه کسب‌وکاری", desc: "هر راهکار با توجه به اهداف و نیازهای واقعی کسب‌وکار طراحی می‌شود." },
        { label: "اجرای کامل", desc: "از ایده اولیه تا توسعه و پشتیبانی در کنار شما هستیم." },
        { label: "مقیاس‌پذیری", desc: "محصولات و زیرساخت‌ها برای رشد آینده طراحی می‌شوند." },
        { label: "همکاری بلندمدت", desc: "ما خودمان را بخشی از تیم شما می‌دانیم، نه صرفاً یک پیمانکار." },
      ],
      badges: ["نگاه کسب‌وکاری", "اجرای کامل", "مقیاس‌پذیری", "همکاری بلندمدت"],
      feedTitle: "پروژه‌های فعال",
      feedSubtitle: "راهکار در حال اجرا",
      feedCounter: "پروژه فعال",
    },
    liveProjects: {
      title: "راهکارهایی که\nدر حال اجرا هستند.",
    },
    devex: {
      tag: "رویکرد فنی",
      title: "زیرساخت مقیاس‌پذیر.\nتوسعه هدفمند.",
      steps: [
        { num: "۰۱", title: "شناخت نیاز", desc: "تحلیل چالش‌ها و اهداف" },
        { num: "۰۲", title: "معماری محصول", desc: "طراحی راهکار و UX" },
        { num: "۰۳", title: "توسعه", desc: "پیاده‌سازی و تست" },
        { num: "۰۴", title: "رشد", desc: "بهینه‌سازی مستمر" },
      ],
    },
    engagement: {
      tag: "همکاری",
      title: "آماده شروع\nهمکاری هستید؟",
      plans: [
        {
          name: "مشاوره",
          price: "رایگان",
          sub: "جلسه آشنایی اولیه",
          features: ["بررسی نیازها", "تحلیل چالش‌ها", "پیشنهاد راهکار", "برآورد اولیه"],
          cta: "درخواست جلسه",
        },
        {
          name: "توسعه",
          price: "اختصاصی",
          sub: "ساخت محصول دیجیتال",
          features: ["طراحی UX/UI", "توسعه کامل", "اتوماسیون", "هوش مصنوعی", "تست و QA", "استقرار"],
          highlight: true,
          cta: "شروع همکاری",
        },
        {
          name: "پشتیبانی",
          price: "بلندمدت",
          sub: "رشد و بهینه‌سازی",
          features: ["پشتیبانی فنی", "بهینه‌سازی", "توسعه ویژگی‌ها", "مانیتورینگ"],
          cta: "تماس با ما",
        },
      ],
    },
    cta: {
      title: "شروع کنیم؟",
      description:
        "اگر برای توسعه محصول، اتوماسیون فرآیندها یا تحول دیجیتال کسب‌وکارتان به یک شریک فناوری نیاز دارید، آماده گفت‌وگو هستیم.",
      button1: "درخواست جلسه",
      button2: "تماس با ما",
      emailPlaceholder: "ایمیل شما",
      submit: "ارسال",
      success: "درخواست شما ثبت شد. به زودی با شما تماس می‌گیریم.",
    },
    footer: {
      copyright: "© ۱۴۰۵ راجیمو. تمامی حقوق محفوظ است.",
      links: [
        { label: "حریم خصوصی", href: "#" },
        { label: "شرایط", href: "#" },
        { label: "تماس", href: "#contact" },
      ],
    },
    liveFeed: {
      items: [
        {
          name: "داریک",
          description: "پلتفرم معاملات فلزات گران‌بها",
          status: { label: "فعال", color: "#60a5fa" },
        },
        {
          name: "ارسی انیمه",
          description: "پلتفرم استریم انیمه",
          status: { label: "در حال اجرا", color: "#4ade80" },
        },
        {
          name: "آی تی اداری",
          description: "وبسایت فروش ماشین‌آلات اداری",
          status: { label: "فعال", color: "#60a5fa" },
        },
        {
          name: "ولورا",
          description: "سیستم ERP",
          status: { label: "در حال اجرا", color: "#4ade80" },
        },
        {
          name: "ارسی انیمه",
          description: "بات تلگرام",
          status: { label: "فعال", color: "#60a5fa" },
        },
        {
          name: "دنیای سونی",
          description: "وبسایت فروش محصولات سونی",
          status: { label: "فعال", color: "#60a5fa" },
        },
        {
          name: "سرخ",
          description: "وبسایت فروش زعفران",
          status: { label: "فعال", color: "#60a5fa" },
        },
        {
          name: "آتی سازان",
          description: "وبسایت شرکتی در حوزه معماری",
          status: { label: "در حال اجرا", color: "#4ade80" },
        },
        {
          name: "اوکیش",
          description: "پلتفرم خدمات به ایرانیان خارج از کشور",
          status: { label: "متوقف شده", color: "#9ca3af" },
        },
        {
          name: "لومورا",
          description: "پلتفرم رشد فروش کافه و رستوران‌ها مبتنی بر هوش مصنوعی",
          status: { label: "در حال اجرا", color: "#4ade80" },
        },
      ],
    },
  },
  en: {
    dir: "ltr" as const,
    lang: "en",
    brand: "RAJIMO",
    nav: [
      { label: "Solutions", href: "#platform" },
      { label: "Products", href: "#agents" },
      { label: "Process", href: "#workflow" },
      { label: "Industries", href: "#integrations" },
      { label: "Contact", href: "#contact" },
    ],
    navCta: "Start Collaboration",
    hero: {
      title: "From Idea to Growth,\nWe Build Your\nDigital Infrastructure.",
      description:
        "Rajimo helps businesses grow faster using digital products, custom software, automation, and artificial intelligence.",
      cta1: "Start Collaboration",
      cta2: "View Solutions",
      stats: [
        { value: "5+", label: "Solutions" },
        { value: "4", label: "Products" },
        { value: "6+", label: "Industries" },
      ],
    },
    solutions: {
      tag: "Our Solutions",
      title: "Technology at the Service\nof Business Growth",
      description:
        "Every business faces different challenges. We design and develop digital solutions tailored to each business need to improve performance and productivity.",
      featured: {
        title: "Custom Software Development",
        description:
          "Design and development of websites, applications, SaaS platforms, and custom systems tailored to your business needs.",
      },
      items: [
        {
          title: "Automation & Intelligence",
          description: "Reduce repetitive activities and improve internal processes with smart tools.",
        },
        {
          title: "Digital Product Design",
          description: "Practical and scalable user experiences for users and business goals.",
        },
        {
          title: "AI Solutions",
          description: "Analysis, decision-making, process automation, and productivity enhancement.",
        },
      ],
    },
    products: {
      tag: "Products",
      title: "Products We Have Developed\nfor Various Industries",
      side: "Ready-made and custom platforms implemented across different industries.",
      items: [
        {
          label: "WHOLESALE",
          title: "Wholesale Management System",
          desc: "Inventory, accounting, sales, reporting, and daily operations in one integrated platform.",
          stats: [
            { v: "Unified", l: "Operations" },
            { v: "Real-time", l: "Reports" },
          ],
        },
        {
          label: "HOTEL",
          title: "Hotel Management Platform",
          desc: "Guest management, services, warehousing, accounting, and hotel operations in one system.",
          stats: [
            { v: "Central", l: "Management" },
            { v: "24/7", l: "Access" },
          ],
        },
        {
          label: "TRADING",
          title: "Trading Platform",
          desc: "Infrastructure for cryptocurrency and precious metals trading with security and scalability.",
          stats: [
            { v: "Secure", l: "Infra" },
            { v: "Scalable", l: "Architecture" },
          ],
        },
        {
          label: "RESTAURANT",
          title: "Cafe & Restaurant Growth",
          desc: "Market analysis, competitor review, and operational solutions to increase sales.",
          stats: [
            { v: "Market", l: "Analysis" },
            { v: "Sales", l: "Growth" },
          ],
        },
      ],
    },
    about: {
      tag: "About Us",
      title: "From Experience\nto Building",
      paragraphs: [
        "Rajimo was shaped by our experience in product design, software development, and solving real business problems.",
        "We started this journey with a shared goal: building technology that doesn't just work, but helps businesses grow.",
        "Today at Rajimo, we focus on products, enterprise systems, AI, and automation to create real, lasting value for our clients.",
      ],
      founders: [
        { name: "Amir Jalilvand", role: "Co-Founder", image: "/images/founder-amir.png" },
        { name: "Erfan Shayegh", role: "Founder", image: "/images/founder-erfan.png" },
      ],
    },
    process: {
      tag: "Our Process",
      title: "Our Approach to\nBuilding Successful Products",
      items: [
        { n: "01", title: "Discovery", desc: "Review business goals, challenges, and opportunities." },
        { n: "02", title: "Design", desc: "Solution design, product architecture, and user experience." },
        { n: "03", title: "Development", desc: "Implementation with appropriate technologies and scalable infrastructure." },
        { n: "04", title: "Growth", desc: "Support, optimization, and continuous development after release." },
      ],
    },
    industries: {
      tag: "Target Industries",
      title: "Experience Across\nVarious Industries",
      description: "Digital solutions tailored to each industry, from hospitality to fintech.",
      card1: {
        title: "Custom Infrastructure",
        description: "Systems tailored to your real business processes.",
      },
      card2: {
        title: "Scalability",
        description: "Architecture ready for future growth and increased operations.",
      },
      items: [
        "Hotel & Hospitality",
        "Wholesale & Retail",
        "Financial Services",
        "Cafe & Restaurant",
        "Startups",
        "Digital Transformation",
      ],
    },
    whyUs: {
      tag: "Why Rajimo",
      title: "We Don't Just\nBuild Software.",
      description:
        "We help businesses make better decisions, have better processes, and grow faster.",
      items: [
        { label: "Business Perspective", desc: "Every solution is designed according to real business goals and needs." },
        { label: "Complete Execution", desc: "From initial idea to development and support, we are with you." },
        { label: "Scalability", desc: "Products and infrastructure are designed for future growth." },
        { label: "Long-term Partnership", desc: "We consider ourselves part of your team, not just a contractor." },
      ],
      badges: ["Business View", "Full Execution", "Scalability", "Long-term Partnership"],
      feedTitle: "Active Projects",
      feedSubtitle: "Solution in progress",
      feedCounter: "active projects",
    },
    liveProjects: {
      title: "Solutions\nin active development.",
    },
    devex: {
      tag: "Technical Approach",
      title: "Scalable Infrastructure.\nPurposeful Development.",
      steps: [
        { num: "01", title: "Discovery", desc: "Analyze challenges and goals" },
        { num: "02", title: "Architecture", desc: "Solution and UX design" },
        { num: "03", title: "Development", desc: "Implementation and testing" },
        { num: "04", title: "Growth", desc: "Continuous optimization" },
      ],
    },
    engagement: {
      tag: "Collaboration",
      title: "Ready to\nGet Started?",
      plans: [
        {
          name: "Consultation",
          price: "Free",
          sub: "Initial discovery session",
          features: ["Needs review", "Challenge analysis", "Solution proposal", "Initial estimate"],
          cta: "Request Meeting",
        },
        {
          name: "Development",
          price: "Custom",
          sub: "Build your digital product",
          features: ["UX/UI Design", "Full development", "Automation", "AI integration", "Testing & QA", "Deployment"],
          highlight: true,
          cta: "Start Collaboration",
        },
        {
          name: "Support",
          price: "Long-term",
          sub: "Growth and optimization",
          features: ["Technical support", "Optimization", "Feature development", "Monitoring"],
          cta: "Contact Us",
        },
      ],
    },
    cta: {
      title: "Let's Start?",
      description:
        "If you need a technology partner for product development, process automation, or digital transformation, we are ready to talk.",
      button1: "Request Meeting",
      button2: "Contact Us",
      emailPlaceholder: "your@email.com",
      submit: "Submit",
      success: "Your request has been received. We'll be in touch soon.",
    },
    footer: {
      copyright: "© 2025 Rajimo. All rights reserved.",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Contact", href: "#contact" },
      ],
    },
    liveFeed: {
      items: [
        {
          name: "Daric",
          description: "Precious metals trading platform",
          status: { label: "Active", color: "#60a5fa" },
        },
        {
          name: "Arsi Anime",
          description: "Anime streaming platform",
          status: { label: "In progress", color: "#4ade80" },
        },
        {
          name: "IT Edari",
          description: "Office equipment sales website",
          status: { label: "Active", color: "#60a5fa" },
        },
        {
          name: "Velora",
          description: "ERP system",
          status: { label: "In progress", color: "#4ade80" },
        },
        {
          name: "Arsi Anime",
          description: "Telegram bot",
          status: { label: "Active", color: "#60a5fa" },
        },
        {
          name: "Donyaye Sony",
          description: "Sony products sales website",
          status: { label: "Active", color: "#60a5fa" },
        },
        {
          name: "Sorkh",
          description: "Saffron sales website",
          status: { label: "Active", color: "#60a5fa" },
        },
        {
          name: "Ati Sazan",
          description: "Corporate website for architecture",
          status: { label: "In progress", color: "#4ade80" },
        },
        {
          name: "Okayesh",
          description: "Services platform for Iranians abroad",
          status: { label: "Stopped", color: "#9ca3af" },
        },
        {
          name: "Lumora",
          description: "AI-powered cafe & restaurant sales growth platform",
          status: { label: "In progress", color: "#4ade80" },
        },
      ],
    },
  },
} as const

export type SiteContent = (typeof content)[Locale]
