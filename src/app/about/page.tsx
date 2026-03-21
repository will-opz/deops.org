import { cookies } from 'next/headers'
import { Shield, Zap, Brain, Terminal, Globe, Github, ArrowUpRight, Mail } from 'lucide-react'
import { getDictionary } from '@/dictionaries'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'


export default async function AboutPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "zh") as "zh" | "en";
  const dict = await getDictionary(lang)

  const isZh = lang === 'zh'

  return (
    <>
      <SiteHeader dict={dict} lang={lang} />

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 z-10 mt-4 mb-32">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-6">
            {isZh ? "运维的未来" : "The Future of Ops"}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 font-mono italic">
              {isZh ? "由 AI 定义" : "Defined by AI"}
            </span>
          </h1>
          <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
            {isZh 
              ? "极简，极客，全面自动化。deops 是为下一代 AI 原生工程师构建的去中心化运维基础设施。我们相信运维的未来不仅限于基础设施的代码化，更属于边缘计算与大模型驱动的智能决策。"
              : "Minimalist, hardcore, and fully automated. deops is the decentralized operations infrastructure built for the next generation of AI-native engineers. We believe the future of operations goes beyond infrastructure-as-code; it belongs to edge computing and LLM-driven intelligent decision-making."
            }
          </p>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 font-mono flex items-center gap-3">
            <span className="text-accent">#</span> {isZh ? "核心理念" : "Core Philosophy"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: Zap, 
                title: isZh ? "边缘优先" : "Edge-First", 
                desc: isZh ? "所有工具和 API 构建在 Cloudflare Edge Runtime 之上，实现近零延迟的全球化响应。" : "All tools and APIs are built on Cloudflare Edge Runtime, achieving near-zero latency global response."
              },
              { 
                icon: Shield, 
                title: isZh ? "去中心化安全" : "Decentralized Security", 
                desc: isZh ? "密码管理、零信任通道、威胁情报——安全不是附属品，而是架构的基石。" : "Password management, zero-trust tunnels, threat intelligence — security is not an add-on, it's the foundation."
              },
              { 
                icon: Brain, 
                title: isZh ? "AI 原生工作流" : "AI-Native Workflows", 
                desc: isZh ? "从异常检测到根因分析，从代码审计到事故复盘——大语言模型深度嵌入每一个运维环节。" : "From anomaly detection to root cause analysis, from code audits to incident reviews — LLMs are deeply embedded in every operations workflow."
              },
              { 
                icon: Terminal, 
                title: isZh ? "极客至上" : "Hacker Ethos", 
                desc: isZh ? "终端风格的界面设计、Cmd+K 全局搜索、HUD 仪表盘——deops 为有技术洁癖的人打造。" : "Terminal-inspired UI, Cmd+K global search, HUD dashboards — deops is built for those with a taste for technical perfection."
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="glass-card p-6 rounded-xl border border-zinc-100 hover:border-emerald-500/20 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 border border-emerald-200/50">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 font-mono flex items-center gap-3">
            <span className="text-accent">#</span> {isZh ? "技术栈" : "Tech Stack"}
          </h2>
          <div className="glass-card rounded-xl border border-zinc-100 p-6 font-mono text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-700">
              <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">▸</span> Next.js 16 (Turbopack + App Router)</div>
              <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">▸</span> Cloudflare Edge Runtime</div>
              <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">▸</span> Tailwind CSS v4</div>
              <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">▸</span> Lucide React Icons</div>
              <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">▸</span> Quartz (Obsidian Digital Garden)</div>
              <div className="flex items-center gap-3"><span className="text-emerald-600 font-bold">▸</span> Cookie-based i18n (zh/en)</div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 font-mono flex items-center gap-3">
            <span className="text-accent">#</span> {isZh ? "快速入口" : "Quick Links"}
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "GitHub", url: "https://github.com/will-opz/deops.org", icon: Github },
              { label: isZh ? "数字花园" : "Digital Garden", url: "https://kb.deops.org", icon: Globe },
            ].map((link, idx) => {
              const Icon = link.icon
              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white font-mono text-sm hover:bg-emerald-600 transition-all group shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              )
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 font-mono flex items-center gap-3">
            <span className="text-accent">#</span> {isZh ? "联系我们" : "Contact"}
          </h2>
          <div className="glass-card rounded-xl border border-zinc-100 p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-200/50 shrink-0">
              <Mail className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-1 font-mono">{isZh ? "业务合作 / 技术交流 / 安全反馈" : "Business / Tech / Security Feedback"}</p>
              <a href="mailto:admin@deops.org" className="text-lg font-bold text-zinc-900 hover:text-emerald-600 transition-colors font-mono">
                admin@deops.org
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter dict={dict} />
    </>
  )
}
