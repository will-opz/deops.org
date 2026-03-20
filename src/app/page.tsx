import Link from 'next/link'
import { BookOpen, TerminalSquare, FileText, Github, Zap, Code2, BrainCircuit, Workflow, Database, ArrowUpRight, Menu } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Header / Nav */}
      <header className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center z-10">
        <Link href="/" className="group flex items-center gap-3 no-underline outline-none">
          {/* Geometric Logo: d, o, and >_ */}
          <svg className="logo-svg w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer box */}
            <rect x="2" y="2" width="36" height="36" rx="8" stroke="#3f3f46" strokeWidth="2" className="group-hover:stroke-accent/50"/>
            {/* Geometric 'd' */}
            <circle cx="14" cy="20" r="5" stroke="#d4d4d8" strokeWidth="2" className="group-hover:stroke-white"/>
            <path d="M19 12v13" stroke="#d4d4d8" strokeWidth="2" strokeLinecap="round" className="group-hover:stroke-white"/>
            {/* Geometric 'o' */}
            <circle cx="26" cy="20" r="5" stroke="#d4d4d8" strokeWidth="2" className="group-hover:stroke-white"/>
            {/* Command prompt _ */}
            <path d="M16 30h8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" className="group-hover:shadow-[0_0_10px_#10b981]"/>
            {/* Node connection dot */}
            <circle cx="26" cy="12" r="1.5" fill="#10b981"/>
            <path d="M26 13.5v1.5" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2"/>
          </svg>
          <span className="font-mono text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
            deops<span className="text-accent animate-pulse">_</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center font-mono text-sm">
          <Link href="#kb" className="text-zinc-400 hover:text-white hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> KB
          </Link>
          <Link href="#services" className="text-zinc-400 hover:text-white hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <TerminalSquare className="w-4 h-4" /> Services
          </Link>
          <Link href="#blog" className="text-zinc-400 hover:text-white hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <FileText className="w-4 h-4" /> Blog
          </Link>
          <Link href="https://github.com" target="_blank" className="text-zinc-400 hover:text-white hover:-translate-y-0.5 transition-all flex items-center gap-2 ml-4">
            <Github className="w-5 h-5" />
          </Link>
        </nav>

        {/* Mobile Menu Button (visual only for this demo) */}
        <button className="md:hidden text-zinc-400 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 z-10 mt-16 md:mt-24 mb-32">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs font-mono text-accent mb-8 shadow-lg backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          System Core v2.4 operational
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
          The Future of Ops is <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 font-mono italic">Defined by AI.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Minimalist, hardcore, and fully automated. <strong className="text-zinc-200">deops</strong> is the decentralized operations infrastructure built for the next generation of AI-native engineers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-24">
          <Link href="#" className="px-8 py-3.5 rounded-md bg-white text-zinc-900 font-semibold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Zap className="w-5 h-5" /> Initialize Protocol
          </Link>
          <Link href="#" className="px-8 py-3.5 rounded-md border border-zinc-700 bg-zinc-900/50 text-zinc-300 font-mono text-sm hover:border-zinc-500 hover:bg-zinc-800 active:scale-95 transition-all flex items-center justify-center gap-2">
            <Code2 className="w-5 h-5" /> View Docs
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl text-left">
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-xl group cursor-default">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
              <BrainCircuit className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              AI-Driven Insights
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100" />
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Predictive anomaly detection and automated root-cause analysis powered by LLMs, reducing MTTR to virtually zero.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 rounded-xl group cursor-default">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
              <Workflow className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              Automated Workflows
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Event-driven remediation and seamless CI/CD pipeline integrations. Define your infra state once, let algorithms handle the rest.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 rounded-xl group cursor-default">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              Knowledge Base
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100" />
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Obsidian-inspired Markdown engine for incident post-mortems and architecture specs. Your ops memory, eternally searchable.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md z-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-sm font-mono flex items-center gap-2">
            &copy; 2026 deops.org
            <span className="hidden md:inline text-zinc-700">|</span>
            <span className="hidden md:inline hover:text-zinc-300 transition-colors cursor-default">Deep. Define. Decentralized.</span>
          </div>
          
          <div className="flex items-center gap-3 bg-black/50 px-4 py-2 rounded-full border border-zinc-800/80 hover:border-emerald-500/30 transition-colors cursor-help" title="All nodes responding normally">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">All Systems Operational</span>
          </div>
        </div>
      </footer>
    </>
  )
}
