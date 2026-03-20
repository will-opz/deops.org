# deops.org

**deops (de + ops)** — AI-Native Operations Infrastructure

This repository contains the Next.js (Edge) frontend architecture for [deops.org](https://deops.org). Designed from the perspective of a Senior SRE/Architect, the site embodies the core philosophy: **Minimalist, Hardcore, Automated, and Lightning-fast**.

---

## 🌟 Core Philosophy

- **Deep, Define, Decentralized (`de`)**: Reimagining operations with depth, infrastructure as code (defined), and distributed paradigms.
- **Ops**: The lifeblood of system reliability and AI-native workflows.
- **Aesthetic**: Minimalist, developer-centric, terminal-inspired (Obsidian/Zinc OLED black theme), with subtle geometric UI and tech-focused accents (Emerald & Cyan).

---

## 🛠️ Architecture (v2.0)

We migrated from a single HTML file to a robust **Next.js 16 (App Router)** frontend, fully optimized for Cloudflare Edge.

- **Framework**: Next.js (React) Server Components.
- **Styling**: Tailwind CSS v4 + native PostCSS.
- **Icons**: Lucide React.
- **Internationalization (i18n)**:
  - Pure Edge SSR rendering driven by native `proxy.ts`. Content managed via `src/dictionaries/`.
- **Knowledge Base (MDX)**:
  - Git-backed Markdown renderer (`next-mdx-remote`) with automated slug mapping scanning `src/content/kb`.
- **AI Ops Copilot (RAG)**:
  - Real-time SSE streaming backend proxying to a secure Cloudflare Tunnel / Dify RAG endpoint.

---

## 🚀 Deployment (Cloudflare Pages)

This project is tailored to deploy as a Serverless Edge application on **Cloudflare Pages**.

### Required Cloudflare Setup:
1. Connect this GitHub repository in the Cloudflare Pages dashboard.
2. **Framework preset**: Select `Next.js`
3. **Build command**: `npx @cloudflare/next-on-pages@1`
4. **Build output directory**: `.vercel/output/static`

### ⚠️ Critical Configuration (Node.js Compatibility)
Because Next.js routing relies on native Node APIs, you must explicitly enable Node APIs in Cloudflare Edge Workers:
- Go to your Pages project -> **Settings** -> **Functions** -> **Compatibility flags**.
- Type exactly **`nodejs_compat`** in both Production and Preview fields and press Enter to save it as a tag.
- Click **Save**, then go to the "Deployments" tab and hit **Retry deployment**.

---

## 💻 Operations & Maintenance

### 1. How to Publish a Knowledge Base Runbook (/kb)
The Knowledge Base (`/kb`) embraces the GitOps philosophy. 
1. Write your markdown file locally or in Obsidian.
2. Place it into the `src/content/kb/` directory.
3. Add the following YAML Frontmatter at the top of the file:

```yaml
---
title: "Incident Runbook: Redis OOM"
date: "2026-03-20"
description: "SOP for resolving cache evictions."
---
```
4. Commit and push. The `/kb` index page will auto-render it using `@tailwindcss/typography`.

### 2. How to Connect the AI Ops Copilot (/kb/chat)
The chat interface requires connecting to your self-hosted Dify LLM model.
Copy `.env.example` to `.env.local` and configure your API keys. 
If your tunnel is protected by **Cloudflare Zero Trust Access**, generate a Service Auth Token and add it to `.env.local`:

```env
CF_ACCESS_CLIENT_ID="your_client_id"
CF_ACCESS_CLIENT_SECRET="your_client_secret"
```

### 3. How to Add a New Navigation Site (/services HUD)
The Services Matrix is rendered via a data array. To add a new operational link:
1. Open `src/app/[lang]/services/page.tsx`.
2. Locate the `categorizedServices` array and inject a new object:

```tsx
{ 
  name: "Datadog", 
  desc: "Cloud Observability Platform", 
  icon: Activity, // Import an SVG icon from 'lucide-react'
  status: "operational", // Change to "maintenance" for blinking yellow 
  url: "https://app.datadoghq.com" 
}
```

---

```bash
# Local Development
npm install
npm run dev # Open http://localhost:3000
```
