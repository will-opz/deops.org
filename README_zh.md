# deops (de + ops) — AI 原生运维基础设施

[English](./README.md) | [简体中文](./README_zh.md)

**deops** 是一个极简、硬核且高度自动化的运维基础设施，专为下一代 AI 原生工程师构建。该项目从资深 SRE 的视角设计，体现了去中心化、代码定义（Infrastructure as Code）的核心理念，并采用了高端的终端风格美学。

> [!IMPORTANT]
> 本项目已针对 **Cloudflare Edge Runtime** 进行深度优化。采用纯边缘动态渲染（Edge Dynamic）架构，为运维工具和服务管理提供近乎零延迟的响应。

---

## 🚀 核心特性

- **⚡ 边缘优先架构**：基于 **Next.js 16 (Turbopack)** 并在 **Cloudflare Pages** 上部署，绕过传统服务器瓶颈。
- **🛡️ 网络安全工具箱**：工业级实用工具，包括基于熵值增强的 **随机密码生成器** 和实时 **文本转二维码** 矩阵编码。
- **🌐 HUD 服务矩阵**：基础设施可观测性和 CI/CD 流水线监控的中央“平显”导航。
- **🧠 极客知识库 (扩展就绪)**：预配置的 Markdown 渲染引擎，用于高密度的事故复盘和架构设计文档展示。
- **💎 高级极客美学**：受 Obsidian 启发的 OLED 纯黑主题，结合玻璃拟态和细腻的几何微动效。

---

## 🛠️ 技术栈

- **核心**: [Next.js 16](https://nextjs.org/) (App Router & Server Components)
- **运行时**: [Cloudflare Edge Runtime](https://workers.cloudflare.com/)
- **样式**: [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS
- **图标**: [Lucide React](https://lucide.dev/)
- **国际化 (i18n)**: 通过自定义 `proxy.ts` 层实现纯边缘侧本地化。

---

## 📦 部署 (Cloudflare Pages)

本项目专为 **Cloudflare Pages** 打造，使用 `@cloudflare/next-on-pages@1` 插件确保最高兼容性。

### 1. 构建指令
```bash
npx @cloudflare/next-on-pages@1
```

### 2. 必要设置
- **Framework Preset**: 无 (Custom)
- **Build Output Directory**: `.vercel/output/static`
- **Compatibility Flags**: 在 Production 和 Preview 中添加 `nodejs_compat`。
- **Compatibility Date**: 设置为 `2024-11-18` 或更晚。

---

## 🛠️ 开发环境

```bash
# 克隆仓库
git clone https://github.com/will-opz/deops.org.git

# 安装依赖
npm install

# 启动 Turbopack 开发服务器
npm run dev
```

---

## 🤝 参与贡献

我们欢迎来自 SRE 和 DevOps 社区的贡献。无论是添加新的运维工具还是优化 HUD 布局，欢迎提交 PR。

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

---

## 📄 开源协议

本项目采用 **MIT License**。详见 `LICENSE` 文件。

---

<p align="center">
  <b>深度. 定义. 去中心化.</b><br/>
  Designed by <a href="https://deops.org">deops.org</a>
</p>
