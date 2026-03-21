import Link from 'next/link'
import {
  Github,
  TerminalSquare,
  BookOpen,
  FileText,
  Menu,
  Fingerprint
} from 'lucide-react'
import { LanguageToggle } from '@/components/LanguageToggle'

export function SiteHeader({ dict, lang }: { dict: any; lang: 'zh' | 'en' }) {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center z-10">
      <Link href={`/`} className="group flex items-center gap-3 no-underline outline-none">
        <svg className="logo-svg w-10 h-10 group-hover:-rotate-3 transition-transform duration-300" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Decentralized Edge Nodes */}
          <circle cx="6" cy="14" r="1.5" fill="#d4d4d8" className="group-hover:fill-cyan-500 transition-colors duration-500"/>
          <circle cx="34" cy="26" r="1.5" fill="#d4d4d8" className="group-hover:fill-cyan-500 transition-colors duration-500"/>
          <path d="M8 16 L12 20" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="2 2" className="group-hover:stroke-cyan-500/50 transition-colors duration-500"/>
          <path d="M25 26 L32 26" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="2 2" className="group-hover:stroke-cyan-500/50 transition-colors duration-500"/>

          {/* Core 'd' - Operations Infra */}
          <circle cx="16" cy="24" r="7.5" stroke="#18181b" strokeWidth="2.5" className="group-hover:stroke-emerald-600 transition-colors duration-500"/>
          <path d="M23.5 15 V32" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" className="group-hover:stroke-emerald-600 transition-colors duration-500"/>
          
          {/* AI Spark - Intelligence */}
          <path d="M23.5 2 L25 7.5 L31 9.5 L25 11.5 L23.5 17 L22 11.5 L16 9.5 L22 7.5 Z" fill="#10b981" className="group-hover:scale-110 origin-[23.5px_9.5px] transition-transform duration-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"/>
          
          {/* Heartbeat / Pulse / Automation */}
          <circle cx="16" cy="24" r="2" fill="#10b981" className="animate-pulse group-hover:scale-[1.5] group-hover:fill-emerald-500 transition-all origin-[16px_24px] duration-500"/>
        </svg>
        <span className="font-mono text-xl font-bold tracking-tight text-zinc-900 group-hover:text-accent transition-colors">
          deops<span className="text-accent animate-pulse">_</span>
        </span>
      </Link>

      <nav className="hidden md:flex gap-8 items-center font-mono text-sm">
        <Link href={`/services`} className="text-zinc-600 hover:text-zinc-900 hover:-translate-y-0.5 transition-all flex items-center gap-2">
          <TerminalSquare className="w-4 h-4" /> {dict.nav.services}
        </Link>
        <Link href={`/blog`} className="text-zinc-600 hover:text-zinc-900 hover:-translate-y-0.5 transition-all flex items-center gap-2">
          <FileText className="w-4 h-4" /> {dict.nav.blog}
        </Link>
        <a href="https://kb.deops.org" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 hover:-translate-y-0.5 transition-all flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> {dict.nav.kb}
        </a>
        <Link href={`/about`} className="text-zinc-600 hover:text-zinc-900 hover:-translate-y-0.5 transition-all flex items-center gap-2">
          <Fingerprint className="w-4 h-4" /> {dict.nav.about}
        </Link>
        <div className="flex items-center gap-2 ml-4 border-l border-zinc-200 pl-6">
          <LanguageToggle currentLang={lang} />
        </div>

        <Link href="https://github.com/will-opz/deops.org" target="_blank" className="text-zinc-600 hover:text-zinc-900 hover:-translate-y-0.5 transition-all flex items-center gap-2 ml-4">
          <Github className="w-5 h-5" />
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-zinc-600 hover:text-zinc-900">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  )
}
