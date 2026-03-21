'use client'

import { useRouter } from 'next/navigation'

export function LanguageToggle({ currentLang }: { currentLang: 'zh' | 'en' }) {
  const router = useRouter()

  const switchLang = (newLang: 'zh' | 'en') => {
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`
    router.refresh()
  }

  return (
    <div className="hidden md:flex items-center gap-2 border border-zinc-200 rounded-full px-4 py-1.5 bg-zinc-100">
      <button 
        onClick={() => switchLang('zh')}
        className={`text-xs font-bold transition-colors ${currentLang === 'zh' ? 'text-accent' : 'text-zinc-600 hover:text-zinc-900'}`}
      >
        ZH
      </button>
      <span className="text-zinc-700 text-xs">/</span>
      <button 
        onClick={() => switchLang('en')}
        className={`text-xs font-bold transition-colors ${currentLang === 'en' ? 'text-accent' : 'text-zinc-600 hover:text-zinc-900'}`}
      >
        EN
      </button>
    </div>
  )
}
