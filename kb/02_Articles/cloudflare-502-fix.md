---
title: "Cloudflare 502 错误排查与修复全指南"
description: "遇到 502 Bad Gateway？本文从源站、CDN 节点到配置冲突，深度解析并提供一键排查方案。"
keywords: [Cloudflare, 502, Bad Gateway, SRE, 故障排查]
date: "2026-03-20"
---

# Cloudflare 502 错误怎么解决（完整指南）

## 一、问题描述
用户访问网站时看到 Cloudflare 提供的 502 Bad Gateway 报错页面。

## 二、常见原因
- 源站（Origin）Web 服务（Nginx/Apache）未启动。
- 源站服务器出口防火墙屏蔽了 Cloudflare 的 IP 段。
- 请求超时（Upstream Timeout）。

## 三、解决方法

### 方法1：检查源站状态
`systemctl status nginx`

### 方法2：放行 CF IP
确保安全组允许来自 Cloudflare IP 的 80/443 入站。

## 四、快速检测

👉 使用点对点诊断工具：
https://opskitpro.com/tools/website-check

## 五、总结
