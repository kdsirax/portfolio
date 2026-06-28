# Antigravity Portfolio Prompt — Khushal Sirvi

---

## TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Fonts:** Geist Sans (headings) + Inter (body) via `next/font/google`
- **Deployment:** Vercel
- **Linting/Formatting:** ESLint + Prettier

---

## FULL ANTIGRAVITY PROMPT

Paste this entire prompt into Antigravity's Agent Workspace:

---

Build me a professional, minimal developer portfolio website for **Khushal Sirvi**, a full-stack developer and B.E. student at IIIT Una.

---

### TECH STACK

Use the following stack — do not deviate:

- Next.js 14 with App Router and TypeScript
- Tailwind CSS for all styling
- Framer Motion for animations (scroll-triggered reveals, fade-ins, staggered lists)
- Lenis for smooth scrolling
- Lucide React for icons
- Geist Sans for headings, Inter for body text (via `next/font/google`)
- Deploy-ready for Vercel (`next.config.ts` should be clean with no errors)

---

### VISUAL DESIGN

**Color palette — keep it calm and professional, no harsh colors:**

- Background: `#0d0d0f` (near-black, not pure black)
- Surface / cards: `#141416`
- Subtle borders: `#1f1f22`
- Primary text: `#e8e8e8`
- Secondary text: `#888890`
- Accent: `#6c8cf2` (soft indigo-blue — NOT neon, NOT electric blue)
- Accent hover: `#8ba4f5`
- Code tag background: `#1a1a1f`

**Typography:**

- Display headings: Geist Sans, weight 600, letter-spacing `-0.03em`
- Body: Inter, weight 400, line-height 1.75
- Section labels (eyebrows): `text-xs tracking-widest uppercase text-[#6c8cf2]`

**Design rules:**

- No loud gradients, glows, or neon. Subtle is the goal.
- Section backgrounds alternate very subtly — some sections at `#0d0d0f`, others at `#141416` — to create rhythm without noise.
- Use a thin `1px border border-[#1f1f22]` on cards. No thick borders.
- All cards: `rounded-xl`, `bg-[#141416]`, subtle hover lift via `hover:border-[#6c8cf2]/30 transition-colors`.
- Skill tags: `bg-[#1a1a1f] text-[#b0b0bb] text-xs px-3 py-1 rounded-full border border-[#1f1f22]`
- All animations: use `opacity` + `translateY` only. No scale or rotation on page load. Keep motion calm.
- `prefers-reduced-motion` must be respected — wrap all Framer Motion variants to be no-ops when reduced motion is detected.

---

### LAYOUT & STRUCTURE

**File structure to generate:**

```
app/
  layout.tsx          ← font setup, Lenis init, metadata
  page.tsx            ← imports all sections in order
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Journey.tsx
  Expertise.tsx
  Skills.tsx
  Projects.tsx
  Blog.tsx
  Contact.tsx
  Footer.tsx
data/
  projects.ts         ← project data as a typed array
  skills.ts           ← skills grouped by category
  journey.ts          ← timeline data
```

---

### SECTION SPECIFICATIONS

**1. Navbar**

- Fixed top, full-width, `backdrop-blur-sm bg-[#0d0d0f]/80`
- Left: `KS` monogram in the accent color, weight 700
- Right: nav links — Home · About · Journey · Skills · Projects · Blog · Contact
- On mobile: hamburger menu with a slide-in drawer
- Smooth scroll to section on click
- Active section highlight via Intersection Observer

---

**2. Hero**

- Full viewport height (`min-h-screen`)
- Centered layout, left-aligned on desktop
- Small eyebrow label: `Full-Stack Developer & AI Builder`
- H1: `Khushal Sirvi` — large, weight 600, Geist Sans
- Subtitle (animated typewriter cycling through these 5 strings):
  - `Building AI/ML pipelines`
  - `Designing real-time systems`
  - `Crafting full-stack products`
  - `Wiring Kafka & vector databases`
  - `Solving hard problems`
- One paragraph below: "B.E. Information Technology student at IIIT Una. I build intelligent, production-ready systems — from RAG pipelines and Kafka data infrastructure to polished Next.js products."
- Two CTA buttons:
  - Primary: `View Projects` (scrolls to Projects)
  - Secondary: `Contact Me` (scrolls to Contact) — outline style
- Below CTAs: a subtle row of social icons (GitHub, LinkedIn, email) with links:
  - GitHub: `https://github.com/khushalsirvi` ← placeholder, user will update
  - LinkedIn: `https://linkedin.com/in/khushalsirvi` ← placeholder
  - Email: `khushalsirvi2422@gmail.com`
- Subtle particle/dot grid background (CSS only, no library) OR a clean code-block ASCII art — pick whichever looks more refined.

---

**3. About**

- Section eyebrow: `About`
- H2: `Me, Myself and I`
- Two-column layout on desktop (60/40 split): text left, a styled info card right
- Bio text:
  > "I'm a full-stack developer passionate about building intelligent, scalable systems. I got started tinkering with web projects during school, and that curiosity turned into a serious commitment to software engineering at IIIT Una, where I'm pursuing my B.E. in Information Technology.
  >
  > I've shipped production systems at Huemanx — Kafka-based ingestion pipelines, Qdrant vector database integrations, and automated scraping tools used in live sales workflows. I'm open to full-stack, backend, or AI-adjacent roles. Feel free to reach out."
- Right card: 4 quick-stat boxes in a 2×2 grid:
  - `8.3` · CGPA at IIIT Una
  - `1` · Industry internship
  - `3` · Production projects shipped
  - `AIR 96` · IMU-CET 2024

---

**4. Journey (Timeline)**

- Section eyebrow: `Experience & Education`
- H2: `My Journey`
- Vertical timeline, centered line, alternating cards left/right on desktop, single column on mobile
- Timeline entries (ordered newest to oldest):

  1. **PR Head, Ecova — IIIT Una** · Aug 2025 – Present  
     _Club leadership, community and communications_

  2. **Software Development Intern — Huemanx** · Feb 2026 – April 2026  
     - RAG-based lead scoring using Qdrant vector database; 30% accuracy improvement  
     - Kafka-based bulk pipeline supporting 10,000+ records per batch, sub-second latency  
     - Web scrapers for email discovery & Messenger data extraction; 80% reduction in manual effort

  3. **B.E. Information Technology — IIIT Una** · 2024 – 2028  
     CGPA: 8.3 · Finalist, Hacksagon 2026

  4. **Senior Secondary — JNV Jojawar (CBSE)** · 2023  
     86.2% · AIR 96, IMU-CET 2024

---

**5. Expertise**

- Section eyebrow: `What I Do`
- H2: `Where'm I Expert?`
- 3 cards in a row, each with a Lucide icon, title, and 2–3 line description:

  - **Full-Stack Development** (icon: `Layers`)  
    Building end-to-end products with Next.js, React, Node.js, and REST/GraphQL APIs — from auth flows to responsive frontends.

  - **Backend & Data Engineering** (icon: `Database`)  
    Designing Kafka pipelines, vector database integrations (Qdrant), and scalable API architectures with JWT auth, rate limiting, and production-grade error handling.

  - **AI/ML Integration** (icon: `Cpu`)  
    Implementing RAG pipelines, LLM-powered features, and prompt engineering workflows into real products with measurable outcomes.

---

**6. Skills**

- Section eyebrow: `Tech Stack`
- H2: `Skills`
- Grouped into rows, each with a label on the left and skill tags on the right:

  | Group | Skills |
  |---|---|
  | Languages | C, C++, Python, JavaScript, TypeScript |
  | Frontend | React.js, Next.js, Tailwind CSS, HTML, CSS, Bootstrap |
  | Backend | Node.js, Express.js, REST APIs, GraphQL, JWT, NGINX |
  | Databases | MongoDB, MySQL, PostgreSQL, Qdrant |
  | DevOps & Tools | Git, Docker, Apache Kafka, AWS, Postman, CI/CD |
  | Gen AI | RAG Pipelines, Vector Databases, LLM Integration, Prompt Engineering |

- On hover, each tag subtly lifts with `border-[#6c8cf2]/40`.

---

**7. Projects**

- Section eyebrow: `Work`
- H2: `My Projects`
- A 3-column card grid (2 on tablet, 1 on mobile)
- Each card has: title, description, tech stack tags, and icon-button links

**Project data:**

```ts
// data/projects.ts

export const projects = [
  {
    title: "StoQ",
    subtitle: "AI Stock Intelligence Platform",
    description:
      "An AI-powered stock intelligence platform for Indian retail investors. Delivers real-time BUY/SELL/HOLD signals, RSI, MACD, and sentiment scores per stock within 5 seconds. Features a personalised news feed, ML-driven suggested stocks, and on-demand Hindi translation of financial news via MyMemory API. Secured with Google OAuth 2.0, JWT sessions, and MongoDB Atlas TTL indexing.",
    stack: ["Next.js", "TypeScript", "MongoDB", "NextAuth.js", "REST APIs"],
    github: "https://github.com/khushalsirvi/stoq", // placeholder
    demo: "https://stoq.vercel.app", // placeholder
  },
  {
    title: "Guftgu",
    subtitle: "Real-Time Messaging & P2P Video Calling",
    description:
      "Premium real-time messaging and HD video calling app. Built with native WebRTC RTCPeerConnection and Google STUN servers. Features live online presence, interactive image sharing, multi-provider Firebase Auth (Email + Google), and auto-offline on tab close.",
    stack: ["React", "Sass", "Firebase", "WebRTC"],
    github: "https://github.com/khushalsirvi/guftgu", // placeholder
    demo: "https://guftgu.vercel.app", // placeholder
  },
  {
    title: "Ecova",
    subtitle: "Environmental Club Management Platform",
    description:
      "Full-stack club management platform for IIIT Una's environmental club. REST APIs with JWT auth, rate limiting, and centralised error handling. Cloudinary media uploads, Redux Toolkit state management, and a responsive Next.js App Router frontend.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/khushalsirvi/ecova", // placeholder
    demo: null,
  },
];
```

- Cards should show the tech tags as pills and have two icon-buttons: GitHub (`Github` icon) and optionally Demo (`ExternalLink` icon). If `demo` is null, hide the demo button.
- Add a subtle `[Featured]` label to StoQ and Guftgu.

---

**8. Blog**

- Section eyebrow: `Writing`
- H2: `Blog`
- Do NOT show any blog posts. Show a single centered "Coming Soon" state instead.
- Design: a dashed-border box (`border-dashed border-[#1f1f22] rounded-xl p-12`) with a `PenLine` Lucide icon at the top, and this copy:

  > **Under Construction**  
  > I'm putting my thoughts on paper — on building systems, AI, competitive programming, and engineering. Check back soon.

- Subtle pulsing animation on the icon only (Framer Motion `animate={{ opacity: [0.4, 1, 0.4] }}` with `repeat: Infinity`).

---

**9. Contact**

- Section eyebrow: `Get in touch`
- H2: `Say Hello`
- Centered layout, max-width `max-w-xl`
- Intro text: "Whether you have a role, a project, or just want to connect — my inbox is always open."
- Two large link-buttons stacked:
  - Email: `khushalsirvi2422@gmail.com` — `Mail` icon
  - Phone: `+91 7878003773` — `Phone` icon
- Below: row of social icon-links (GitHub, LinkedIn)
- A mailto CTA button: `Send a message →` linking to `mailto:khushalsirvi2422@gmail.com`

---

**10. Footer**

- Minimal, single row
- Left: `© 2026 Khushal Sirvi. All rights reserved.`
- Right: `Designed & built by Khushal Sirvi`
- Centered on mobile

---

### ANIMATIONS

Use Framer Motion with this reusable pattern across all sections:

```tsx
// components/ui/FadeIn.tsx
const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
// Wrap with useInView and trigger once
```

- Section headings: fade-in on scroll
- Cards: stagger-reveal (0.1s delay between each)
- Hero text: sequence fade-in (name → subtitle → paragraph → CTAs)
- Timeline: items reveal as user scrolls past them
- No animation on the Navbar or Footer

---

### RESPONSIVENESS

- Mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Navbar collapses to hamburger at `md`
- All section grids collapse to single-column on mobile
- Timeline switches from alternating to single-column at `md`
- Touch targets minimum 44×44px

---

### METADATA & SEO

In `layout.tsx`:

```ts
export const metadata: Metadata = {
  title: "Khushal Sirvi — Full-Stack Developer",
  description:
    "Portfolio of Khushal Sirvi, a full-stack developer specialising in AI/ML pipelines, real-time data systems, and scalable web applications.",
  openGraph: {
    title: "Khushal Sirvi — Full-Stack Developer",
    description: "Full-stack developer building AI-powered, production-ready systems.",
    url: "https://khushalsirvi.dev",
    siteName: "Khushal Sirvi",
    type: "website",
  },
};
```

---

### FINAL NOTES FOR THE AGENT

- Use `"use client"` only where required (components with hooks or event handlers).
- All data (projects, skills, journey entries) must live in `data/` as typed TypeScript arrays — not hardcoded in JSX.
- Lenis must be initialized in a `<LenisProvider>` client component and wrapped around the root layout.
- No `console.log` statements in production code.
- The site must pass a Lighthouse performance score of 90+ — use `next/image` for any images, lazy-load non-critical sections.
- Do not use any third-party UI component library (no shadcn, no MUI). Pure Tailwind + custom components only.
- After generating all files, run `npm run build` and fix any TypeScript or Next.js errors before considering the task complete.

---

*End of prompt.*
