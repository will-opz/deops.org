# deops.org

**deops (de + ops)** — AI-Native Operations Infrastructure

This repository contains the foundational landing page for [deops.org](https://deops.org), designed from the perspective of a 10+ year Senior SRE / Architect. The site embodies the core philosophy: **Minimalist, Hardcore, Automated, and Lightning-fast**.

---

## 🌟 Core Philosophy

- **Deep, Define, Decentralized (`de`)**: Reimagining operations with depth, infrastructure as code (defined), and distributed paradigms.
- **Ops**: The lifeblood of system reliability and AI-native workflows.
- **Aesthetic**: Minimalist, developer-centric, terminal-inspired (Obsidian/Zinc dark theme), with subtle geometric UI and tech-focused color accents (Emerald Green `#10b981` & Cyan).

## 🛠️ Tech Stack & Architecture

The current architecture is a zero-build, ultra-fast static implementation, designed for immediate edge deployment (Vercel, Cloudflare, GitHub Pages).

- **HTML5**: Semantic, accessible single-page structure.
- **Tailwind CSS (CDN)**: Utility-first styling for rapid UI creation without bloated CSS files. Customized with specific Tailwind configuration embedded in the `<head>`.
- **Lucide Icons (CDN)**: Clean, consistent, and lightweight SVG-based iconography.
- **Custom SVG Logo**: A purely code-driven, scale-independent geometric logo combining `d`, `o`, a command prompt `>_`, and neural node aesthetics.
- **Visual Effects**: Includes custom mesh-grid background (`bg-grid-pattern`), ambient radial glow, and CSS Backdrop Filter (Glassmorphism).

---

## 🚀 Deployment Guide

Because the site is a self-contained static `index.html`, it requires zero build steps and deploys instantly.

### Cloudflare Pages (Recommended for Edge Speed)
1. Push this repository to GitHub/GitLab.
2. Connect the repository in the Cloudflare Pages dashboard.
3. Configure the build settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (or leave empty)
4. Add custom domain: `deops.org`.

### GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Add custom domain `deops.org` and enforce HTTPS.

---

## 🔮 Future Expansion (Roadmap)

The current layout acts as a master gateway (Navigation Matrix) to a broader ecosystem. Future modules to implement:

- [ ] **Knowledge Base (`/kb`)**: An Obsidian-inspired Markdown engine for capturing incident post-mortems, runbooks, and architectural decisions.
- [ ] **Services Matrix (`/services`)**: A unified dashboard linking to various AI-driven AIOps tools (e.g., Grafana/Prometheus overlays, Kubernetes Dashboards, CI/CD health runners).
- [ ] **Technical Blog (`/blog`)**: Deep dives into AIOps, site reliability engineering, performance tuning, and distributed systems.
- [ ] **System Status Sync**: Hook up the mock "All Systems Operational" footer light to a real status API (e.g., Atlassian Statuspage or UptimeRobot).

---

## 💻 Local Development

No `npm`, `Webpack`, or `Vite` required for the V1 landing page. Simply open the file:

```bash
# macOS
open index.html

# Linux
xdg-open index.html
```

Or, serve via Python if you plan to add local assets/fetching:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```
