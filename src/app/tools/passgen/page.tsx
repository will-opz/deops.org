import { cookies } from 'next/headers'
import { getDictionary } from '@/dictionaries'

export const runtime = 'edge'
import PassClient from './pass-client'

export default async function PassPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "zh") as "zh" | "en";
  const dict = await getDictionary(lang)
  
  return <PassClient lang={lang} dict={dict} />
}
