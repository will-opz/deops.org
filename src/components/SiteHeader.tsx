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
        <svg className="logo-svg w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="36" height="36" rx="8" stroke="#3f3f46" strokeWidth="2" className="group-hover:stroke-accent/50"/>
          <circle cx="14" cy="20" r="5" stroke="#d4d4d8" strokeWidth="2" className="group-hover:stroke-white"/>
          <path d="M19 12v13" stroke="#d4d4d8" strokeWidth="2" strokeLinecap="round" className="group-hover:stroke-white"/>
          <circle cx="26" cy="20" r="5" stroke="#d4d4d8" strokeWidth="2" className="group-hover:stroke-white"/>
          <path d="M16 30h8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" className="group-hover:shadow-[0_0_10px_#10b981]"/>
          <circle cx="26" cy="12" r="1.5" fill="#10b981"/>
          <path d="M26 13.5v1.5" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2"/>
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
