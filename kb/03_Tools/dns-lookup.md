---
title: "DNS 全记录探测助手使用教程"
tool_slug: "dns-lookup"
category: "Network"
last_updated: "2026-03-25"
---

# DNS 高级查询 (DNS Lookup) 指南

## 1. 工具简介
OpsKitPro DNS 探测中心提供比传统 `dig` 命令更友好的“取证报告”。支持全球主流 DoH (DNS over HTTPS) 节点对比，是排查域名解析争议的利器。

### 核心功能：
- **全记录类型支持**：涵盖 A, AAAA, CNAME, MX, NS, TXT, CAA。
- **多节点对比**：自由选择 Cloudflare (1.1.1.1) 或 Google (8.8.8.8) 作为后端解析器。
- **TTL 实时监控**：显示记录的生存时间 (Live TTL)，预测生效窗口期。
- **原始响应审计**：提供 RDATA 原始报文镜像，供专业分析。

---

## 2. 使用步骤
1.  **输入目标**：输入你要查询的域名（如 `google.com`）。
2.  **配置选项**：
    -   在下拉菜单中选择 **Record Type**（默认为 A 记录）。
    -   在右侧选择 **Resolver Node**（如想验证墙外生效情况，选 Google）。
3.  **执行分析**：点击「Analyze」，获取毫秒级响应报告。
4.  **历史追溯**：使用下方的 `RECENT_FORENSICS` 模块，一键对比历史查询记录。

---

## 3. 常见场景
- **配置生效验证**：刚在阿里/腾讯改了 DNS，还没生效？用 Cloudflare 节点查下全球是否已同步。
- **MX 邮件排错**：快速确认 `MX` 记录优先级 (Priority) 是否配置正确。
- **验证码申请**：查询 `TXT` 记录确认 SSL 证书或站长平台验证码是否已部署。
---
