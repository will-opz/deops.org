# deops (de + ops) — AI-Native Operations Infrastructure

[English](./README.md) | [简体中文](./README_zh.md)

**deops** is a minimalist, hardcore, and fully automated operations infrastructure built for the next generation of AI-native engineers. Designed from the perspective of a Senior SRE, it embodies a decentralized, code-defined philosophy with a high-end, terminal-inspired aesthetic.

> [!IMPORTANT]
> This project is optimized for the **Cloudflare Edge Runtime**. It uses a pure Edge Dynamic architecture to achieve near-zero latency for operational tools and service management.

---

## 🏛️ Architecture

```
deops.org (Main Site — Next.js 16)
├── /              Home — Hero + Quick Access HUD
├── /services      Service Matrix (45+ tools, 12 categories)
├── /tools/passgen Password Generator (entropy-focused)
├── /tools/qrgen   Text-to-QR Matrix Encoder
├── /tools/ip      Ops IP Edge Sensing (dual-stack)
├── /blog          Tech Blog (coming soon)
├── /about         About + Contact
└── /api/ip        Edge Runtime IP API

kb.deops.org (Sub Site — Quartz + Obsidian)
└── Digital Garden (knowledge graph, notes, deep content)
```

---

## 🚀 Key Features

### Native Cyber Tools (Self-Built)
- **🔐 Password Generator**: Cryptographically secure, entropy-focused random password generation on the edge.
- **📱 QR Matrix Encoder**: Real-time text-to-QR code conversion with instant rendering.
- **🌍 Ops IP Edge Sensing**: Dual-stack (IPv4/IPv6) geolocation and network intelligence powered by Cloudflare Edge.

### HUD Service Matrix
A centralized "Head-Up Display" mapping **45+ operational tools** across **12 categories** with Spotlight global search (`Cmd+K`) and sticky sidebar navigation:

| Category | Tools |
|----------|-------|
| **Native Cyber Tools** | PassGen, QRGen, IP Pulse |
| **Password Management** | 1Password, Enpass, Bitwarden |
| **Monitoring & Observability** | Grafana, Prometheus, Elasticsearch, Zabbix |
| **IT Automation & IaC** | Ansible, SaltStack, Terraform |
| **Infrastructure & Edge** | AWS Console, Cloudflare, Kubernetes |
| **CI/CD** | GitHub Actions, ArgoCD, Jenkins |
| **Zero Trust & Tunnels** | JumpServer, Tailscale, WireGuard, Pritunl, Proton Mail |
| **AI & Intelligence** | OpenClaw, OpenAI, Claude, Gemini, Grok |
| **Threat Intel & Recon** | Nmap, Masscan, Shodan, FOFA, VirusTotal |
| **Offensive & Traffic** | Burp Suite, Wireshark, Nuclei |
| **Cloud & DevSecOps** | Trivy, Checkov, Wazuh |
| **DNS & Diagnostics** | MXToolBox, DNSDumpster, SecurityTrails, ViewDNS, ICANN Lookup |

### Digital Garden (Sub-Site)
- **Engine**: [Quartz 4](https://quartz.jzhao.xyz/) — purpose-built for Obsidian `[[wikilinks]]` and knowledge graphs.
- **URL**: [kb.deops.org](https://kb.deops.org)
- **Content**: Cybersecurity notes, cloud-native playbooks, AI engineering, SRE incident post-mortems.

### UX & Internationalization
- **Cookie-based i18n** (zh/en) — language preference detected via `Accept-Language`, persisted via `NEXT_LOCALE` cookie.
- **Premium typography** — Inter + Noto Sans SC (Chinese) + JetBrains Mono (code).
- **Spotlight Search** — `Cmd+K` / `Ctrl+K` global search across all services.
- **Smart 404 Redirect** — All dead links redirect seamlessly to the homepage.
- **Scroll-to-Top FAB** — Floating action button appears on long pages.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (Turbopack + App Router) |
| **Runtime** | [Cloudflare Edge Runtime](https://workers.cloudflare.com/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS |
| **Icons** | [Lucide React](https://lucide.dev/) (45+ icons) |
| **Typography** | Inter, Noto Sans SC, JetBrains Mono (via `next/font/google`) |
| **i18n** | Cookie-based with `@formatjs/intl-localematcher` |
| **Knowledge Base** | [Quartz 4](https://quartz.jzhao.xyz/) (Obsidian Digital Garden) |

---

## 📦 Deployment

### Main Site (Cloudflare Pages)

```bash
npx @cloudflare/next-on-pages@1
```

| Setting | Value |
|---------|-------|
| Framework Preset | None (Custom) |
| Build Output Directory | `.vercel/output/static` |
| Compatibility Flags | `nodejs_compat` |
| Compatibility Date | `2024-11-18` |

### Sub-Site `kb.deops.org` (Cloudflare Pages)

| Setting | Value |
|---------|-------|
| Repository | `will-opz/kb.deops.org` |
| Framework Preset | None |
| Build Command | `npx quartz build` |
| Build Output Directory | `public` |

---

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/will-opz/deops.org.git

# Install dependencies
npm install

# Launch Turbopack dev server
npm run dev
```

---

## 🤝 Contributing

We welcome contributions from the SRE and DevOps community. Whether it's adding a new cyber tool or optimizing the HUD layout, feel free to open a PR.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

- **Email**: [admin@deops.org](mailto:admin@deops.org)
- **GitHub**: [github.com/will-opz](https://github.com/will-opz)

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  <b>Deep. Define. Decentralized.</b><br/>
  Designed by <a href="https://deops.org">deops.org</a>
</p>
