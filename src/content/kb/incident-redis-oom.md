---
title: "Incident Runbook: Redis Out Of Memory (OOM)"
date: "2026-03-20"
description: "Standard Operating Procedure (SOP) for resolving Redis Eviction and OOM crashes in the production state."
---

# Redis OOM Runbook

When the Production Redis cluster hits 100% memory utilization, the API gateways will instantly begin shedding load, resulting in elevated `503` errors.

## 🚨 Immediate Mitigation (First 5 Minutes)

1. **Verify Metric Dashboards**
   Check Grafana `Redis Overview` panel. Look at `used_memory_rss` vs `maxmemory`.
2. **Emergency Eviction Flush**
   If the cluster is completely locked, manually purge the non-critical volatile cache namespaces.
   
```bash
redis-cli -h prod-redis.internal keys "cache:html:*" | xargs redis-cli -h prod-redis.internal del
```

## 🔍 Root Cause Analysis

Usually caused by:
- **Misconfigured TTLs**: Developers deployed a new feature caching large JSON payloads without standard `EXPIRE` wrappers.
- **Thundering Herd**: Cache stampede leading to millions of simultaneous writes.

## 📈 Long-term Fix

Enable `allkeys-lru` policy strictly if it's acting purely as a cache.

> **Note**: Never use `allkeys-lru` if Redis is used as a primary datastore or message queue!
